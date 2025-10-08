"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const shoots = [
    { name: "Keisha", path: "/shoots/keisha", icon: "/globe.svg" },
    { name: "Cassy", path: "/shoots/cassy", icon: "/window.svg" },
    // Add more shoots as needed
  ];

  const [search, setSearch] = useState("");
  const filteredShoots = shoots.filter(shoot =>
    shoot.name.toLowerCase().includes(search.toLowerCase())
  );

  // Dynamic floating nav animation
  const navRef = useRef(null);
  useEffect(() => {
    let lastX = 32, lastY = 24;
    function handleMouseMove(e) {
      if (navRef.current) {
        const x = Math.max(24, Math.min(window.innerWidth - 340, e.clientX - 120));
        const y = Math.max(24, Math.min(window.innerHeight - 80, e.clientY - 24));
        navRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
        lastX = x; lastY = y;
      }
    }
    function handleMouseLeave() {
      if (navRef.current) {
        navRef.current.style.transform = `translate(${lastX}px, ${lastY}px) scale(1)`;
      }
    }
    if (navRef.current) {
      navRef.current.addEventListener("mousedown", () => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", () => {
          window.removeEventListener("mousemove", handleMouseMove);
          handleMouseLeave();
        }, { once: true });
      });
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

      {/* Floating sidebar features */}
      <aside
        style={{
          position: "fixed",
          top: "80px",
          right: "32px",
          zIndex: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "1.2rem",
          background: "rgba(255,255,255,0.85)",
          borderRadius: "22px",
          boxShadow: "0 8px 32px #d7266022",
          padding: "1.2rem 1.2rem",
          backdropFilter: "blur(8px)",
          opacity: 1,
          animation: "fadeIn 1.2s cubic-bezier(.4,2,.3,1)",
          transition: "box-shadow 0.18s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = "0 16px 48px #d7266033";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = "0 8px 32px #d7266022";
        }}
      >
        <button style={{
          background: "linear-gradient(90deg,#d72660 60%,#c471a3 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "0.7rem 1.2rem",
          fontWeight: 600,
          fontSize: "1.08rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px #d7266022",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          transition: "transform 0.18s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        ><span>📅</span> Book With Us</button>
        <button style={{
          background: "linear-gradient(90deg,#c471a3 60%,#e0c3fc 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "0.7rem 1.2rem",
          fontWeight: 600,
          fontSize: "1.08rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px #c471a322",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          transition: "transform 0.18s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        ><span>💬</span> Chat With Us</button>
        <button style={{
          background: "linear-gradient(90deg,#fbeaf3 60%,#d72660 100%)",
          color: "#d72660",
          border: "none",
          borderRadius: "10px",
          padding: "0.7rem 1.2rem",
          fontWeight: 600,
          fontSize: "1.08rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px #d7266012",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          transition: "transform 0.18s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        ><span>👤</span> About Us</button>
        <div style={{display: "flex", alignItems: "center", gap: "0.5rem", width: "100%"}}>
          <span style={{fontSize: "1.3rem"}}>🔍</span>
          <input
            type="text"
            placeholder="Search shoots..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              border: "2px solid #c471a3",
              fontSize: "1.05rem",
              width: "160px",
              outline: "none",
              boxShadow: "0 2px 8px #c471a322",
              background: "rgba(255,255,255,0.7)",
              transition: "box-shadow 0.18s",
            }}
            onFocus={e => e.currentTarget.style.boxShadow = "0 4px 16px #c471a344"}
            onBlur={e => e.currentTarget.style.boxShadow = "0 2px 8px #c471a322"}
          />
        </div>
      </aside>

      <div
        style={{
          zIndex: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2.5rem",
          width: "100%",
          maxWidth: "900px",
          margin: "5rem auto 0 auto",
        }}
      >
        {/* Hero / Title block — improved placement, scale and typography */}
        <header
          aria-label="Site intro"
          style={{
            width: "100%",
            maxWidth: "820px",
            margin: "0 auto 1.6rem auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
            alignItems: "center",
            padding: "0 1rem",
            animation: "fadeInDown 1.1s cubic-bezier(.4,2,.3,1)",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "min(4.2rem, 9.5vw)",
              lineHeight: 1.03,
              color: "linear-gradient(90deg,#d72660,#c471a3)",
              margin: 0,
              letterSpacing: "-1px",
              fontWeight: 700,
              // subtle layered text effect
              textShadow: "0 6px 28px rgba(215,38,96,0.06)",
              color: "#d72660"
            }}
          >
            Myle Photography
            <span style={{ display: "block", fontSize: "0.36em", color: "#a85c7a", fontWeight: 600, marginTop: "6px", fontFamily: "Montserrat, sans-serif" }}>
              Portfolio
            </span>
          </h1>

          <p
            style={{
              margin: "0",
              marginTop: "0.6rem",
              fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
              color: "#8f4a63",
              maxWidth: "68ch",
              lineHeight: 1.6,
              fontFamily: "Montserrat, sans-serif",
              background: "linear-gradient(180deg, rgba(255,255,255,0.0), rgba(255,255,255,0.02))",
              padding: "0 0.2rem",
            }}
          >
            Capturing moments, emotions and stories through a warm, editorial lens. Browse shoots below — the gallery is the main focus.
          </p>

          {/* small CTA row beneath title for emphasis */}
          <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.9rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.92rem", color: "#c24a73", fontWeight: 600, padding: "0.45rem 0.85rem", borderRadius: "999px", background: "rgba(215,38,96,0.06)" }}>Featured Shoots</span>
            <span style={{ fontSize: "0.9rem", color: "#9f6e84", opacity: 0.9 }}>Use search (top-right) to filter</span>
          </div>
        </header>

        {filteredShoots.map((shoot, idx) => (
          <Link
            key={shoot.path}
            href={shoot.path}
            style={{
              background: "rgba(255,255,255,0.96)",
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
              backdropFilter: "blur(2px)",
              animation: `fadeInUp 0.8s ${0.2 + idx * 0.1}s cubic-bezier(.4,2,.3,1) both`,
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
            <div style={{
              width: "64px",
              height: "64px",
              marginBottom: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #fbeaf3 0%, #e0c3fc 100%)",
              borderRadius: "50%",
              boxShadow: "0 2px 8px #d7266022",
              animation: "spinIcon 2.5s linear infinite",
            }}>
              <Image src={shoot.icon} width={38} height={38} alt=" " />
            </div>
            <span style={{fontSize: "1.3rem", fontFamily: "Playfair Display, serif", marginBottom: "0.5rem"}}>{shoot.name}</span>
            <span style={{fontSize: "1rem", color: "#a85c7a"}}>View Photoshoot &#8594;</span>
            {/* Animated accent */}
            <svg style={{position: "absolute", bottom: 0, right: 0, width: "48px", height: "48px", opacity: 0.13}} viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#c471a3" /></svg>
          </Link>
        ))}
      </div>
      {/* Decorative bottom SVG */}
      <svg style={{position: "absolute", bottom: 0, left: 0, width: "100%", height: "120px", zIndex: 0}} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#c471a3" fillOpacity="0.10" d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
      {/* Keyframes for fadeIn/fadeInUp/spinIcon */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-16px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-32px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes spinIcon {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </main>
  );
}
