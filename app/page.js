"use client";
import Link from "next/link";


import Image from "next/image";

export default function Home() {
  const shoots = [
    { name: "Keisha", path: "/shoots/keisha", img: "/photos/keisha 1.jpg" },
    { name: "Cassy", path: "/shoots/cassy", img: "/photos/cassy rose 1.jpg" },
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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "900px",
          margin: "2rem auto 0 auto",
        }}
      >
        {shoots.map((shoot) => (
          <Link
            key={shoot.path}
            href={shoot.path}
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 4px 24px rgba(215, 38, 96, 0.08)",
              textDecoration: "none",
              color: "#d72660",
              fontWeight: 600,
              fontSize: "1.15rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1.5rem 1rem 1rem 1rem",
              transition: "transform 0.18s cubic-bezier(.4,2,.3,1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{width: "100%", height: "180px", position: "relative", marginBottom: "1rem", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px #d7266022"}}>
              <Image src={shoot.img} alt={shoot.name + " preview"} fill style={{objectFit: "cover"}} />
            </div>
            <span style={{fontSize: "1.3rem", fontFamily: "Playfair Display, serif", marginBottom: "0.5rem"}}>{shoot.name}</span>
            <span style={{fontSize: "1rem", color: "#a85c7a"}}>View Photoshoot →</span>
          </Link>
        ))}
      </div>

      {/* Gallery preview section */}
      <section style={{
        zIndex: 1,
        margin: "3rem auto 0 auto",
        maxWidth: "900px",
        width: "100%",
        textAlign: "center",
      }}>
        <h2 style={{fontFamily: "Playfair Display, serif", color: "#c471a3", fontSize: "2rem", marginBottom: "1.2rem"}}>Featured Moments</h2>
        <div style={{display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap"}}>
          <Image src="/photos/keisha 2.jpg" alt="Keisha" width={180} height={120} style={{borderRadius: "10px", boxShadow: "0 2px 8px #d7266022"}} />
          <Image src="/photos/cassy rose 2.jpg" alt="Cassy" width={180} height={120} style={{borderRadius: "10px", boxShadow: "0 2px 8px #d7266022"}} />
          <Image src="/photos/keisha 3.jpg" alt="Keisha" width={180} height={120} style={{borderRadius: "10px", boxShadow: "0 2px 8px #d7266022"}} />
        </div>
      </section>

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
