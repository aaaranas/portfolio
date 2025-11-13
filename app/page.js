"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const primary = "#ffd1da"; // pastel pink
    const softBg = "#fff5f7";
    const muted = "#f7e9ec";
    const accent = "#ff98b0";
    const text = "#2b2b2b";

    const [hoveredButton, setHoveredButton] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const router = useRouter();

    const handleBookUs = () => {
        router.push("/book");
    };

    const categories = [
        {
            id: "debut",
            title: "Debut",
            items: [
                { id: "Keisha", title: "Keisha", img: "/photos/keisha 1.jpg" },
                { id: "debut-2", title: "Garden Debut", img: "https://via.placeholder.com/600x400.png?text=Debut+2" },
                { id: "debut-3", title: "Vintage Debut Portrait", img: "https://via.placeholder.com/600x400.png?text=Debut+3" },
            ],
        },
        {
            id: "birthday",
            title: "Birthday",
            items: [
                { id: "Cassy Rose", title: "Cassy Rose", img: "/photos/cassy rose 1.jpg" },
                { id: "bday-2", title: "Surprise Party", img: "https://via.placeholder.com/600x400.png?text=Birthday+2" },
                { id: "bday-3", title: "Milestone Celebration", img: "https://via.placeholder.com/600x400.png?text=Birthday+3" },
            ],
        },
        {
            id: "landscape",
            title: "Landscape",
            items: [
                { id: "land-1", title: "Soft Morning Light", img: "https://via.placeholder.com/600x400.png?text=Landscape+1" },
                { id: "land-2", title: "Pastel Sunset", img: "https://via.placeholder.com/600x400.png?text=Landscape+2" },
                { id: "land-3", title: "Rolling Hills", img: "https://via.placeholder.com/600x400.png?text=Landscape+3" },
            ],
        },
    ];

    const styles = {
        page: {
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            color: text,
            background: softBg,
            minHeight: "100vh",
            padding: "32px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
        },
        brand: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
        },
        logo: {
            width: 56,
            height: 56,
            borderRadius: 12,
            background: `linear-gradient(135deg, ${primary}, ${accent})`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 18,
        },
        title: {
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 0.2,
        },
        nav: {
            display: "flex",
            gap: "12px",
            alignItems: "center",
        },
        navButton: (isHovered) => ({
            padding: "10px 16px",
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
            background: isHovered ? accent : "transparent",
            color: isHovered ? "#fff" : text,
            boxShadow: isHovered ? "0 6px 18px rgba(255,150,176,0.18)" : "none",
            transition: "all 180ms ease",
            fontWeight: 600,
            outline: "none",
        }),
        hero: {
            background: muted,
            borderRadius: 12,
            padding: 20,
            display: "flex",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
        },
        heroText: {
            maxWidth: 720,
        },
        heroHeading: {
            fontSize: 28,
            margin: 0,
            fontWeight: 800,
        },
        heroSub: {
            marginTop: 8,
            color: "#6b6b6b",
        },
        ctaGroup: {
            display: "flex",
            gap: 10,
            marginTop: 12,
            flexWrap: "wrap",
        },
        ctaButton: (primaryBtn, hovered) => ({
            padding: "10px 18px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            background: primaryBtn ? primary : "transparent",
            color: primaryBtn ? "#37182a" : text,
            boxShadow: primaryBtn
                ? hovered
                    ? "0 8px 28px rgba(255,209,218,0.28)"
                    : "0 4px 12px rgba(255,209,218,0.2)"
                : "none",
            transition: "all 180ms ease",
            fontWeight: 700,
        }),
        gallery: {
            display: "flex",
            flexDirection: "column",
            gap: 22,
        },
        categoryHeader: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
        },
        categoryTitle: {
            fontSize: 18,
            fontWeight: 800,
        },
        grid: {
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
        },
        card: (isHovered) => ({
            flex: "1 1 240px",
            maxWidth: 320,
            minWidth: 220,
            borderRadius: 10,
            overflow: "hidden",
            background: "#fff",
            boxShadow: isHovered ? "0 16px 40px rgba(0,0,0,0.12)" : "0 6px 18px rgba(0,0,0,0.06)",
            transition: "all 220ms cubic-bezier(.2,.9,.3,1)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
        }),
        imgWrap: {
            width: "100%",
            borderRadius: 10,
            overflow: "hidden",
            background: "#eee",
        },
        img: {
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
        },
        cardBody: {
            padding: 12,
            display: "flex",
            flexDirection: "column",
            gap: 6,
        },
        cardTitle: {
            fontSize: 15,
            fontWeight: 700,
        },
        cardDesc: {
            fontSize: 13,
            color: "#6b6b6b",
        },
        footerNote: {
            marginTop: 6,
            color: "#8a8a8a",
            fontSize: 13,
        },
    };

    return (
        <main style={styles.page}>
            <header style={styles.header}>
                <div style={styles.brand}>
                    <div style={styles.logo}>MP</div>
                    <div>
                        <div style={styles.title}>Myle Photography</div>
                        <div style={{ fontSize: 12, color: "#7a7a7a" }}>Capturing soft moments</div>
                    </div>
                </div>

                <nav style={styles.nav} aria-label="Main navigation">
                    {["Book Us", "About Us", "Contact Us"].map((label, i) => {
                        const hovered = hoveredButton === i;
                        return (
                            <button
                                key={label}
                                style={styles.navButton(hovered)}
                                onMouseEnter={() => setHoveredButton(i)}
                                onMouseLeave={() => setHoveredButton(null)}
                                onClick={() => {
                                    if (label === "Book Us") {
                                        handleBookUs();
                                    } else {
                                        const target = label.toLowerCase().replace(" ", "-");
                                        const el = document.getElementById(target);
                                        if (el) el.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                aria-label={label}
                            >
                                {label}
                            </button>
                        );
                    })}
                </nav>
            </header>

            <section style={styles.hero}>
                <div style={styles.heroText}>
                    <h1 style={styles.heroHeading}>Soft, minimal, and timeless photography</h1>
                    <p style={styles.heroSub}>
                        Myle Photography specializes in intimate portraiture and gentle landscapes with a pastel touch.
                        We focus on light, composition, and quiet moments that feel true.
                    </p>

                    <div style={styles.ctaGroup}>
                        <button
                            onClick={handleBookUs}
                            onMouseEnter={() => setHoveredButton("book")}
                            onMouseLeave={() => setHoveredButton(null)}
                            style={styles.ctaButton(true, hoveredButton === "book")}
                            aria-label="Book a photography session"
                        >
                            📅 Book With Us
                        </button>

                        <button
                            style={styles.ctaButton(false, hoveredButton === "learn")}
                            onMouseEnter={() => setHoveredButton("learn")}
                            onMouseLeave={() => setHoveredButton(null)}
                            onClick={() => {
                                const el = document.getElementById("about-us");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                <div style={{ minWidth: 200, maxWidth: 420 }}>
                    <div
                        style={{
                            borderRadius: 12,
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            border: `1px solid rgba(0,0,0,0.03)`,
                        }}
                    >
                        <img
                            src="https://via.placeholder.com/720x480.png?text=Myle+Photography+Hero"
                            alt="Myle Photography hero"
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </div>
                    <div style={styles.footerNote}>Placeholder image — replace with your favorite shot</div>
                </div>
            </section>

            <section style={styles.gallery}>
                {categories.map((cat) => (
                    <div key={cat.id}>
                        <div style={styles.categoryHeader}>
                            <div style={styles.categoryTitle}>{cat.title}</div>
                            <div style={{ color: "#9a9a9a", fontSize: 13 }}>{cat.items.length} shoots</div>
                        </div>

                        <div style={styles.grid}>
                            {cat.items.map((item) => {
                                const isHovered = hoveredCard === item.id;
                                return (
                                    <Link key={item.id} href={`/shoots/${item.id}`}>
                                        <article
                                            style={styles.card(isHovered)}
                                            onMouseEnter={() => setHoveredCard(item.id)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                            aria-labelledby={`${item.id}-title`}
                                        >
                                            <div style={styles.imgWrap}>
                                                <img src={item.img} alt={item.title} style={styles.img} />
                                            </div>
                                            <div style={styles.cardBody}>
                                                <div id={`${item.id}-title`} style={styles.cardTitle}>{item.title}</div>
                                                <div style={styles.cardDesc}>A short placeholder description for this shoot.</div>
                                            </div>
                                        </article>
                                    </Link>

                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>

            <section id="about-us" style={{ marginTop: 8, color: "#7a7a7a", fontSize: 13 }}>
                <strong>About Us</strong>
                <p style={{ marginTop: 6 }}>
                    Myle Photography is a small studio focused on soft color palettes and intimate storytelling.
                    This is a minimal landing layout with placeholder content — replace with your real images and copy.
                </p>
            </section>
        </main>
    );
}