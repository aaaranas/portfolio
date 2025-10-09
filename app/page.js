"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const shoots = [
    {
      name: "Keisha",
      path: "/shoots/keisha",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#d72660" />
              <stop offset="1" stopColor="#c471a3" />
            </linearGradient>
          </defs>
          <circle cx="19" cy="19" r="18" fill="url(#g1)" />
          <path d="M12 24c4 0 6-6 14-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9"/>
        </svg>
      ),
    },
    {
      name: "Cassy",
      path: "/shoots/cassy",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="5" y="5" width="28" height="28" rx="6" fill="#c471a3" />
          <circle cx="19" cy="14" r="4.2" fill="#fff" opacity="0.95" />
          <rect x="13" y="20" width="12" height="6" rx="2" fill="#d72660" />
        </svg>
      ),
    },
    {
      name: "Lina",
      path: "/shoots/lina",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <polygon points="19,6 32,32 6,32" fill="#e0c3fc" />
          <circle cx="19" cy="20" r="5.5" fill="#d72660" opacity="0.95"/>
        </svg>
      ),
    },
    {
      name: "Maya",
      path: "/shoots/maya",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0" stopColor="#fbeaf3" />
              <stop offset="1" stopColor="#c471a3" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#g2)" strokeWidth="2.5">
            <path d="M6 20c6-8 8-8 13-8s7 0 13 8" strokeLinecap="round" />
            <circle cx="19" cy="20" r="6" fill="#d72660" />
          </g>
        </svg>
      ),
    },
    {
      name: "Aria",
      path: "/shoots/aria",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="6" y="6" width="26" height="26" rx="13" fill="#c471a3" />
          <path d="M12 24c3-5 5-7 7-7s4 2 7 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
    {
      name: "Noel",
      path: "/shoots/noel",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="19" cy="19" r="18" fill="#fbeaf3"/>
          <path d="M10 22c4-6 14-6 18 0" stroke="#c471a3" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
    {
      name: "Rico",
      path: "/shoots/rico",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="4" y="8" width="30" height="22" rx="4" fill="#d72660"/>
          <circle cx="19" cy="17" r="4" fill="#fff"/>
        </svg>
      ),
    },
    {
      name: "Elliot",
      path: "/shoots/elliot",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <polygon points="19,6 28,32 10,32" fill="#c471a3"/>
          <circle cx="19" cy="18" r="3.6" fill="#fbeaf3"/>
        </svg>
      ),
    },
    {
      name: "Summer",
      path: "/shoots/summer",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="sun" x1="0" x2="1">
              <stop offset="0" stopColor="#ffd166"/>
              <stop offset="1" stopColor="#f79da8"/>
            </linearGradient>
          </defs>
          <circle cx="19" cy="15" r="6" fill="url(#sun)"/>
          <rect x="8" y="24" width="22" height="6" rx="3" fill="#e0c3fc"/>
        </svg>
      ),
    },
    {
      name: "Brook",
      path: "/shoots/brook",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6 24c6-10 20-10 26 0" stroke="#c471a3" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <circle cx="19" cy="16" r="4.2" fill="#d72660"/>
        </svg>
      ),
    },
    {
      name: "Rowan",
      path: "/shoots/rowan",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="7" y="7" width="24" height="24" rx="6" fill="#e0c3fc"/>
          <circle cx="19" cy="19" r="5" fill="#c471a3"/>
        </svg>
      ),
    },
    // new shoot
    {
      name: "Nia",
      path: "/shoots/nia",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="19" cy="19" r="18" fill="#c471a3" />
          <path d="M13 24c3-5 11-5 14 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
  ];

  const [search, setSearch] = useState("");
  const filteredShoots = shoots.filter(shoot =>
    shoot.name.toLowerCase().includes(search.toLowerCase())
  );

  // Dynamic floating nav animation
  const navRef = useRef(null);
  // New refs for background layers + particle canvas
  const bgRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const particleRef = useRef(null);

  useEffect(() => {
    let lastX = 32, lastY = 24;
    function handleMouseMove(e) {
      if (navRef.current) {
        const x = Math.max(24, Math.min(window.innerWidth - 340, e.clientX - 120));
        const y = Math.max(24, Math.min(window.innerHeight - 80, e.clientY - 24));
        navRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
        lastX = x; lastY = y;
      }

      // Parallax background blobs (subtle)
      const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReduce) {
        const cx = e.clientX / window.innerWidth - 0.5;
        const cy = e.clientY / window.innerHeight - 0.5;
        if (blob1Ref.current) blob1Ref.current.style.transform = `translate(${cx * 18}px, ${cy * 12}px) rotate(-6deg)`;
        if (blob2Ref.current) blob2Ref.current.style.transform = `translate(${cx * -10}px, ${cy * -8}px) rotate(8deg)`;
        if (bgRef.current) bgRef.current.style.transform = `translate(${cx * -6}px, ${cy * -4}px)`;
      }
    }
    function handleMouseLeave() {
      if (navRef.current) {
        navRef.current.style.transform = `translate(${lastX}px, ${lastY}px) scale(1)`;
      }
      if (blob1Ref.current) blob1Ref.current.style.transform = '';
      if (blob2Ref.current) blob2Ref.current.style.transform = '';
      if (bgRef.current) bgRef.current.style.transform = '';
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

    // global pointer move for parallax
    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener("pointerleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("pointerleave", handleMouseLeave);
    };
  }, []);

  // Lightweight particle system (very subtle)
  useEffect(() => {
    const canvas = particleRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = null;
    const dpr = window.devicePixelRatio || 1;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) {
      ctx.clearRect(0, 0, width, height);
      return;
    }

    const particles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.6 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: 0.06 + Math.random() * 0.08
    }));

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resize);

    function tick() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
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
        // remove inline single gradient and rely on layered background below
        background: "transparent",
        color: "#a85c7a",
        fontFamily: "Montserrat, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background enhancements: animated gradient + soft blobs + subtle particles */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* animated radial gradient layer */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(1200px 600px at 10% 10%, rgba(215,38,96,0.10), transparent 15%), radial-gradient(900px 500px at 90% 90%, rgba(196,74,115,0.08), transparent 12%)",
          mixBlendMode: "screen",
          animation: "bgShift 18s linear infinite",
          filter: "saturate(1.05) blur(12px)",
          transform: "translateZ(0)"
        }} />

        {/* soft blurred color blobs */}
        <div ref={blob1Ref} style={{
          position: "absolute",
          width: "520px",
          height: "420px",
          left: "-8%",
          top: "-6%",
          background: "radial-gradient(circle at 30% 30%, rgba(215,38,96,0.16), rgba(196,71,163,0.08) 45%, transparent 60%)",
          filter: "blur(72px)",
          transformOrigin: "center",
          transition: "transform 220ms cubic-bezier(.2,.9,.3,1)",
          pointerEvents: "none",
        }} />

        <div ref={blob2Ref} style={{
          position: "absolute",
          width: "420px",
          height: "360px",
          right: "-6%",
          bottom: "-8%",
          background: "radial-gradient(circle at 70% 70%, rgba(252,199,166,0.12), rgba(224,195,252,0.06) 40%, transparent 60%)",
          filter: "blur(64px)",
          transformOrigin: "center",
          transition: "transform 260ms cubic-bezier(.2,.9,.3,1)",
          pointerEvents: "none",
        }} />

        {/* subtle grain + vignette via pseudo elements (kept simple here) */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }} />

        {/* particles canvas */}
        <canvas
          ref={particleRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.85,
            mixBlendMode: "soft-light"
          }}
        />
      </div>

      {/* Decorative SVG (kept on top of background) */}
      <svg style={{position: "absolute", top: 0, left: 0, width: "100%", height: "180px", zIndex: 1}} viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#d72660" fillOpacity="0.12" d="M0,96L60,101.3C120,107,240,117,360,128C480,139,600,149,720,144C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>

      {/* Floating sidebar features */}
      <aside
        ref={navRef}
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
              {/* render either an image src string or inline SVG JSX */}
              {typeof shoot.icon === "string" ? (
                <img
                  src={shoot.icon}
                  width={38}
                  height={38}
                  alt={`${shoot.name} icon`}
                  style={{ width: 38, height: 38, display: "block" }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "data:image/svg+xml;utf8," +
                      encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38"><circle cx="19" cy="19" r="18" fill="#c471a3"/></svg>');
                  }}
                />
              ) : (
                <div style={{ width: 38, height: 38, display: "block", lineHeight: 0 }} aria-hidden="true">
                  {shoot.icon}
                </div>
              )}
            </div>
            <span style={{fontSize: "1.3rem", fontFamily: "Playfair Display, serif", marginBottom: "0.5rem"}}>{shoot.name}</span>
            <span style={{fontSize: "1rem", color: "#a85c7a"}}>View Photoshoot &#8594;</span>
            {/* Animated accent */}
            <svg style={{position: "absolute", bottom: 0, right: 0, width: "48px", height: "48px", opacity: 0.13}} viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#c471a3" /></svg>
          </Link>
        ))}
      </div>

      {/* Decorative bottom SVG */}
      <svg style={{position: "absolute", bottom: 0, left: 0, width: "100%", height: "120px", zIndex: 1}} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#c471a3" fillOpacity="0.10" d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>

      {/* Keyframes for background motion, fadeIn/fadeInUp/spinIcon */}
      <style>{`
        /* background shift is very slow and subtle */
        @keyframes bgShift {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }

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

        /* respect prefers-reduced-motion: disable most motion */
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion, canvas { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
