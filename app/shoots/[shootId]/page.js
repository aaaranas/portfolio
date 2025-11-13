"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

// Shoot galleries
const shoots = {
  "Keisha": [
    "/photos/keisha 1.jpg",
    "/photos/keisha 2.jpg",
    "/photos/keisha 3.jpg",
  ],
  "Cassy Rose": [
    "/photos/cassy rose 1.jpg",
    "/photos/cassy rose 2.jpg",
    "/photos/cassy rose 3.jpg",
  ],
};

export default function ShootPage() {
  const { shootId } = useParams();
  const decodedId = decodeURIComponent(shootId);
  const gallery = shoots[decodedId] || [];

  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const colors = {
    primary: "#ffd1da",
    softBg: "#fff5f7",
    muted: "#f7e9ec",
    accent: "#ff98b0",
    text: "#2b2b2b", // black text
  };

  const styles = {
    page: {
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      color: colors.text,
      background: colors.softBg,
      minHeight: "100vh",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    header: {
      fontSize: 28,
      fontWeight: 800,
      marginBottom: 16,
      color: colors.text, // black header text
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      justifyContent: "center",
    },
    card: {
      flex: "1 1 240px",
      maxWidth: 320,
      borderRadius: 12,
      overflow: "hidden",
      background: colors.muted,
      boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
      cursor: "pointer",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },
    img: {
      width: "100%",
      display: "block",
      objectFit: "cover",
    },
    lightboxOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    },
    lightboxImg: {
      maxWidth: "90%",
      maxHeight: "90%",
      borderRadius: 12,
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    },
    lightboxClose: {
      position: "absolute",
      top: 20,
      right: 30,
      fontSize: 28,
      color: "#fff",
      cursor: "pointer",
    },
  };

  return (
    <main style={styles.page}>
      <h1 style={styles.header}>{decodedId} Shoot</h1>

      <div style={styles.grid}>
        {gallery.map((img, i) => (
          <div
            key={i}
            style={styles.card}
            onClick={() => setLightbox({ open: true, index: i })}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={img} alt={`${decodedId} ${i + 1}`} style={styles.img} />
          </div>
        ))}
      </div>

      {lightbox.open && (
        <div style={styles.lightboxOverlay} onClick={() => setLightbox({ open: false, index: 0 })}>
          <span style={styles.lightboxClose}>&times;</span>
          <img
            src={gallery[lightbox.index]}
            alt={`${decodedId} ${lightbox.index + 1}`}
            style={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
