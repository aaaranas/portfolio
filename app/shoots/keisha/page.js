"use client";
import Image from "next/image";


export default function Keisha() {
  const photos = [
    "/photos/keisha 1.jpg",
    "/photos/keisha 2.jpg",
    "/photos/keisha 3.jpg"
  ];

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
          Keisha Photoshoot
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#a85c7a", marginBottom: "2.5rem" }}>
          A celebration of style, personality, and vibrant energy. Scroll to explore the gallery below.
        </p>
      </section>

      <div
        style={{
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 2rem 4rem 2rem",
        }}
      >
        {photos.map((src, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 6px 32px #d7266015",
              transition: "transform 0.18s cubic-bezier(.4,2,.3,1)",
              background: "#fff",
              cursor: "pointer",
              aspectRatio: "4/5",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <Image
              src={src}
              alt={`Keisha ${index + 1}`}
              fill
              style={{objectFit: "cover", transition: "filter 0.3s", filter: "brightness(0.98)"}}
            />
            <div style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              background: "linear-gradient(0deg, #d72660cc 0%, #fff0 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              padding: "0.7rem 0",
              textAlign: "center",
              letterSpacing: "0.5px",
              opacity: "0.85",
            }}>
              Keisha {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom SVG Decoration */}
      <svg style={{position: "absolute", bottom: 0, left: 0, width: "100%", height: "80px", zIndex: 0}} viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#c471a3" fillOpacity="0.10" d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>

      <footer style={{ marginTop: "2rem", fontWeight: 500, color: "#a85c7a", zIndex: 1, textAlign: "center", paddingBottom: "1.5rem" }}>
        <span>© 2025 Captured by Myle</span>
      </footer>
    </main>
  );
}
