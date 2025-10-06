"use client";
import Link from "next/link";


import Image from "next/image";

export default function Home() {
  const shoots = [
    { name: "Keisha", path: "/shoots/keisha", icon: "/globe.svg" },
    { name: "Cassy", path: "/shoots/cassy", icon: "/window.svg" },
    // Add more shoots as needed
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "linear-gradient(135deg, #fbeaf3 0%, #e0c3fc 100%)",
        color: "#a85c7a",
        fontFamily: "Montserrat, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative SVG */}
      <svg style={{position: "absolute", top: 0, left: 0, width: "100%", height: "180px", zIndex: 0}} viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#d72660" fillOpacity="0.12" d="M0,96L60,101.3C120,107,240,117,360,128C480,139,600,149,720,144C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>

      <section style={{
        zIndex: 1,
        marginTop: "3rem",
        textAlign: "center",
        maxWidth: "600px",
      }}>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "3.2rem",
            color: "#d72660",
            marginBottom: "1rem",
            letterSpacing: "-2px",
            textShadow: "0 2px 12px #fff8",
          }}
        >
          Myle Photography Portfolio
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#a85c7a", marginBottom: "2.5rem" }}>
          Capturing moments, emotions, and stories through the lens. Explore featured shoots below.
        </p>
      </section>

      <div
        style={{
          zIndex: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2.5rem",
          width: "100%",
          maxWidth: "900px",
          margin: "2rem auto 0 auto",
        }}
      >
        {shoots.map((shoot, idx) => (
          <Link
            key={shoot.path}
            href={shoot.path}
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 4px 24px rgba(215, 38, 96, 0.10)",
              textDecoration: "none",
              color: "#d72660",
              fontWeight: 600,
              fontSize: "1.15rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2.2rem 1.2rem 1.2rem 1.2rem",
              transition: "transform 0.18s cubic-bezier(.4,2,.3,1), box-shadow 0.18s",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              border: "2.5px solid #d72660",
              outline: "4px solid #fbeaf3",
              outlineOffset: "-6px",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.045)";
              e.currentTarget.style.boxShadow = "0 8px 32px #d7266015";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(215, 38, 96, 0.10)";
            }}
          >
            <div style={{width: "64px", height: "64px", marginBottom: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #fbeaf3 0%, #e0c3fc 100%)", borderRadius: "50%", boxShadow: "0 2px 8px #d7266022"}}>
              <Image src={shoot.icon} alt={shoot.name + " icon"} width={38} height={38} />
            </div>
            <span style={{fontSize: "1.3rem", fontFamily: "Playfair Display, serif", marginBottom: "0.5rem"}}>{shoot.name}</span>
            <span style={{fontSize: "1rem", color: "#a85c7a"}}>View Photoshoot →</span>
            {/* Animated accent */}
            <svg style={{position: "absolute", bottom: 0, right: 0, width: "48px", height: "48px", opacity: 0.13}} viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#c471a3" /></svg>
          </Link>
        ))}
      </div>

      {/* Removed featured moments section as requested */}

      <footer style={{ marginTop: "4rem", fontWeight: 500, color: "#a85c7a", zIndex: 1 }}>
        <span style={{marginRight: "0.5rem"}}>© 2025 Captured by Myle</span>
        <a href="https://vercel.com" target="_blank" rel="noopener" style={{color: "#d72660", textDecoration: "underline", fontWeight: 400}}>Powered by Vercel</a>
      </footer>

      {/* Decorative bottom SVG */}
      <svg style={{position: "absolute", bottom: 0, left: 0, width: "100%", height: "120px", zIndex: 0}} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#c471a3" fillOpacity="0.10" d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
    </main>
  );
}
