"use client";

import Image from "next/image";
import { useState } from "react";



export default function Keisha() {
  const photos = [
    "/photos/keisha 1.jpg", 
    "/photos/keisha 2.jpg",
    "/photos/keisha 3.jpg"
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (src) => {
    setModalImg(src);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #fbeaf3 0%, #e0c3fc 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "0",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* Top SVG Decoration */}
      <svg style={{position: "absolute", top: 0, left: 0, width: "100%", height: "120px", zIndex: 0}} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#d72660" fillOpacity="0.13" d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>

      <section style={{
        zIndex: 1,
        textAlign: "center",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        maxWidth: "700px",
        margin: "0 auto",
      }}>
        <h1 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "2.7rem",
          color: "#d72660",
          marginBottom: "1rem",
          letterSpacing: "-1px",
          textShadow: "0 2px 12px #fff8",
        }}>
          Keisha&apos;s Debut
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#a85c7a", marginBottom: "2.5rem" }}>
          A celebration of style, personality, and vibrant energy. Scroll to explore the gallery below.
        </p>
      </section>

      <div
        style={{
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem 1rem 4rem 1rem",
          border: "none",
          borderRadius: "0",
          boxShadow: "none",
          background: "transparent",
        }}
      >
        {photos.map((src, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 4px 18px #d7266015",
              transition: "transform 0.18s cubic-bezier(.4,2,.3,1)",
              background: "transparent",
              cursor: "pointer",
              width: "220px",
              height: "275px",
              border: "2.5px solid #d72660",
              margin: "0.5rem 0",
              aspectRatio: "4/5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.045)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            onClick={() => openModal(src)}
          >
            <Image
              src={src}
              alt=" "
              fill
              style={{objectFit: "cover", transition: "filter 0.3s", filter: "brightness(0.97) saturate(1.08)", borderRadius: "16px"}}
            />
            {/* Decorative corner accent */}
            <div style={{position: "absolute", top: 0, right: 0, width: "32px", height: "32px", background: "radial-gradient(circle at top right, #c471a3 60%, #fff0 100%)", borderBottomLeftRadius: "16px", opacity: 0.18}} />
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {modalOpen && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(40, 10, 40, 0.65)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            animation: "fadeIn 0.2s",
          }}
        >
          <span style={{position: "absolute", top: "32px", right: "32px", zIndex: 101}}>
            <button
              onClick={closeModal}
              style={{
                background: "#d72660",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "38px",
                height: "38px",
                fontSize: "1.5rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #d7266022",
              }}
              aria-label="Close"
            >
              ×
            </button>
          </span>
          <Image
            src={modalImg}
            alt=" "
            width={600}
            height={750}
            style={{
              border: "2.5px solid #d72660",
              borderRadius: "16px",
              boxShadow: "0 8px 32px #d7266015, 0 2px 16px #d7266022",
              background: "transparent",
              display: "block",
              maxWidth: "60vw",
              maxHeight: "80vh",
              width: "auto",
              height: "auto",
              objectFit: "unset",
              margin: "0 auto",
              padding: 0
            }}
          />
        </div>
      )}

      {/* Bottom SVG Decoration */}
      <svg style={{position: "absolute", bottom: 0, left: 0, width: "100%", height: "80px", zIndex: 0}} viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#c471a3" fillOpacity="0.10" d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>

      <footer style={{ marginTop: "2rem", fontWeight: 500, color: "#a85c7a", zIndex: 1, textAlign: "center", paddingBottom: "1.5rem" }}>
        <span>&copy; 2025 Captured by Myle</span>
      </footer>
    </main>
  );
}
