"use client";

import { useState } from "react";
import styles from "./book.module.css";
import emailjs from "@emailjs/browser"; // EmailJS

export default function BookPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10)); // November 2025
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const previousMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const isDateAvailable = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 1; // Sundays & Mondays unavailable
  };

  const isDatePast = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return date < new Date();
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.package) {
      alert("Please fill in all required fields.");
      return;
    }

    setSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      package: formData.package,
      message: formData.message,
      date: selectedDate
        ? `${monthNames[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
        : "",
    };

    // Replace the placeholders with your EmailJS details
    emailjs.send(
      "service_a0aj0q8",      // e.g., "service_xxx"
      "template_chvac8d",     // e.g., "template_xxx"
      templateParams,
      "XmgVlZpVEMicf4c7v"       // e.g., "user_xxx"
    ).then(
      (response) => {
        setSending(false);
        setSuccessMessage("Booking confirmed! We'll contact you shortly.");
        setFormData({ name: "", email: "", phone: "", package: "", message: "" });
        setSelectedDate(null);
      },
      (error) => {
        setSending(false);
        alert("Failed to send booking. Please try again later.");
        console.error(error);
      }
    );
  };

  return (
    <main className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Book Your Photography Session</h1>
          <p className={styles.subtitle}>
            Select your preferred date and time for your photoshoot
          </p>
        </div>
      </header>

      <div className={styles.bookingWrapper}>
        {/* Calendar Section */}
        <section className={styles.calendarSection}>
          <div className={styles.calendarCard}>
            <div className={styles.monthNav}>
              <button onClick={previousMonth} className={styles.navButton} aria-label="Previous month">←</button>
              <h2 className={styles.monthTitle}>
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button onClick={nextMonth} className={styles.navButton} aria-label="Next month">→</button>
            </div>

            <div className={styles.weekdayHeaders}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className={styles.weekdayHeader}>{day}</div>
              ))}
            </div>

            <div className={styles.daysGrid}>
              {days.map((day, index) => {
                const isPast = day && isDatePast(day);
                const isAvailable = day && !isPast && isDateAvailable(day);
                const isSelected =
                  selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentDate.getMonth() &&
                  selectedDate.getFullYear() === currentDate.getFullYear();

                return (
                  <button
                    key={index}
                    onClick={() => { if (isAvailable) setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)); }}
                    className={`${styles.day} ${day === null ? styles.emptyDay : ""} ${isPast ? styles.pastDay : ""} ${isAvailable ? styles.availableDay : ""} ${isSelected ? styles.selectedDay : ""}`}
                    disabled={!isAvailable}
                    aria-label={day ? `${monthNames[currentDate.getMonth()]} ${day}, ${currentDate.getFullYear()}` : undefined}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <div className={styles.selectedInfo}>
                <p className={styles.selectedText}>
                  Selected: <strong>{monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Booking Form Section */}
        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Booking Details</h2>

            {!selectedDate ? (
              <div className={styles.placeholder}>
                <p>📅 Please select a date to continue</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className={styles.input}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="package" className={styles.label}>Select Package</label>
                  <select
                    id="package"
                    name="package"
                    className={styles.select}
                    value={formData.package}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a package</option>
                    <option value="basic">Basic - 2 hours</option>
                    <option value="standard">Standard - 4 hours</option>
                    <option value="premium">Premium - Full day</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your vision..."
                    className={styles.textarea}
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={styles.submitButton} disabled={sending}>
                  {sending ? "Sending..." : "Confirm Booking"}
                </button>

                {successMessage && <p style={{ marginTop: "1rem", color: "#2b2b2b" }}>{successMessage}</p>}
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
