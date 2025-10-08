"use client";

import { useState } from "react";

export default function Keisha() {
  const photos = [
    "/photos/keisha 1.jpg",
    "/photos/keisha 2.jpg",
    "/photos/keisha 3.jpg",
  ];

  // simple SVG data-URIs as filler placeholders (safe: no external fetch)
  const portraitPlaceholder = `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'>
      <defs>
        <linearGradient id='g' x1='0' x2='1'>
          <stop offset='0' stop-color='#ffeef6'/>
          <stop offset='1' stop-color='#f0d5ff'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)' rx='20' ry='20'/>
      <g fill='#c24a73' font-family='Montserrat, sans-serif' font-weight='600' font-size='32' text-anchor='middle'>
        <text x='50%' y='48%'>Placeholder</text>
        <text x='50%' y='57%' font-size='20' fill='#a85c7a'>portrait</text>
      </g>
    </svg>
  `)}`;

  const landscapePlaceholder = `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='900' height='600' viewBox='0 0 900 600'>
      <defs>
        <linearGradient id='g2' x1='0' x2='1'>
          <stop offset='0' stop-color='#fff0f8'/>
          <stop offset='1' stop-color='#e8d7ff'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g2)' rx='18' ry='18'/>
      <g fill='#c471a3' font-family='Montserrat, sans-serif' font-weight='600' font-size='34' text-anchor='middle'>
        <text x='50%' y='50%'>Placeholder</text>
        <text x='50%' y='61%' font-size='20' fill='#a85c7a'>landscape</text>
      </g>
    </svg>
  `)}`;

  // Prepare rows:
  // - first row: 4 portraits
  // - second row: 3 landscapes (2-3 allowed; using 3 for balanced layout)
  // - third row: 4 portraits
  const portraitRowA = [
    photos[0] ?? portraitPlaceholder,
    photos[1] ?? portraitPlaceholder,
    portraitPlaceholder,
    portraitPlaceholder,
  ];
  const landscapeRow = [
    photos[2] ?? landscapePlaceholder,
    landscapePlaceholder,
    landscapePlaceholder,
  ];
  const portraitRowB = [
    photos[1] ?? portraitPlaceholder,
    photos[0] ?? portraitPlaceholder,
    portraitPlaceholder,
    portraitPlaceholder,
  ];

  // layout math: make the 4-portrait row match the total width of the landscape row
  const GAP_PX = 18; // matches ~1.15rem used elsewhere (adjust if you prefer)
  const LANDSCAPE_W = 320;
  const LANDSCAPE_COUNT = landscapeRow.length;
  const LANDSCAPE_TOTAL_W = LANDSCAPE_W * LANDSCAPE_COUNT + GAP_PX * (LANDSCAPE_COUNT - 1);

  const PORTRAIT_COUNT = 4;
  const PORTRAIT_W = Math.floor((LANDSCAPE_TOTAL_W - GAP_PX * (PORTRAIT_COUNT - 1)) / PORTRAIT_COUNT);
  const PORTRAIT_H = Math.round(PORTRAIT_W * (300 / 210)); // preserve original portrait aspect ratio

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

  // Helper to render an image tile (portrait or landscape)
  function Tile({ src, width, height, onClick }) {
    return (
      <div
        onClick={onClick}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 6px 22px rgba(215,38,96,0.12)",
          border: "2.5px solid #d72660",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.18s cubic-bezier(.4,2,.3,1), box-shadow 0.18s",
          background: "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 18px 48px rgba(215,38,96,0.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 22px rgba(215,38,96,0.12)";
        }}
      >
        {/* plain <img> used to avoid Next/Image sizing boxing issues with data-URIs */}
        <img
          src={src}
          alt=" "
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: "14px",
          }}
          onClick={(e) => {
            // prevent parent click duplication; ensure modal opens only once
            e.stopPropagation();
            openModal(src);
          }}
        />
      </div>
    );
  }

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
      <svg
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "120px", zIndex: 0 }}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#d72660"
          fillOpacity="0.13"
          d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>

      <section
        style={{
          zIndex: 1,
          textAlign: "center",
          paddingTop: "4rem",
          paddingBottom: "2rem",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2.7rem",
            color: "#d72660",
            marginBottom: "1rem",
            letterSpacing: "-1px",
            textShadow: "0 2px 12px #fff8",
          }}
        >
          Keisha&apos;s Debut
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#a85c7a", marginBottom: "2.5rem" }}>
          A celebration of style, personality, and vibrant energy. Scroll to explore the gallery below.
        </p>
      </section>

      {/* Gallery rows */}
      <div
        style={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "2.25rem",
          width: "100%",
          maxWidth: "980px",
          margin: "0 auto",
          padding: "1rem",
          alignItems: "center",
        }}
      >
        {/* First row: 4 portrait tiles */}
        <div
          style={{
            display: "flex",
            gap: `${GAP_PX}px`,
            justifyContent: "center",
            flexWrap: "nowrap",
            width: "100%",
            maxWidth: `${LANDSCAPE_TOTAL_W}px`, // constrain to match landscape total width
          }}
        >
          {portraitRowA.map((src, i) => (
            <Tile key={`pA-${i}`} src={src} width={PORTRAIT_W} height={PORTRAIT_H} onClick={() => openModal(src)} />
          ))}
        </div>

        {/* Second row: 3 landscapes */}
        <div
          style={{
            display: "flex",
            gap: `${GAP_PX}px`,
            justifyContent: "center",
            flexWrap: "nowrap",
            width: "100%",
            maxWidth: `${LANDSCAPE_TOTAL_W}px`, // same container width as above
          }}
        >
          {landscapeRow.map((src, i) => (
            <Tile key={`l-${i}`} src={src} width={LANDSCAPE_W} height={210} onClick={() => openModal(src)} />
          ))}
        </div>

        {/* Third row: 4 portrait tiles */}
        <div
          style={{
            display: "flex",
            gap: `${GAP_PX}px`,
            justifyContent: "center",
            flexWrap: "nowrap",
            width: "100%",
            maxWidth: `${LANDSCAPE_TOTAL_W}px`, // same container width as above
          }}
        >
          {portraitRowB.map((src, i) => (
            <Tile key={`pB-${i}`} src={src} width={PORTRAIT_W} height={PORTRAIT_H} onClick={() => openModal(src)} />
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {modalOpen && (
        <div
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
            animation: "fadeIn 0.2s",
          }}
          // close only when clicking the backdrop (not when clicking the image)
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <button
            onClick={closeModal}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 28,
              right: 28,
              zIndex: 101,
              background: "#d72660",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 42,
              height: 42,
              fontSize: "1.25rem",
              cursor: "pointer",
              boxShadow: "0 4px 18px rgba(215,38,96,0.25)",
            }}
          >
            ×
          </button>

          <img
            src={modalImg}
            alt=" "
            style={{
              border: "2.5px solid #d72660", // border directly on the image edge
              borderRadius: 16,
              boxShadow: "0 18px 48px rgba(215,38,96,0.18)",
              display: "block",
              maxWidth: "80vw",
              maxHeight: "84vh",
              width: "auto",
              height: "auto",
              margin: "0 auto",
              background: "transparent",
            }}
          />
        </div>
      )}

      {/* Bottom SVG Decoration */}
      <svg
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80px", zIndex: 0 }}
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#c471a3"
          fillOpacity="0.10"
          d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>

      <footer style={{ marginTop: "2rem", fontWeight: 500, color: "#a85c7a", zIndex: 1, textAlign: "center", paddingBottom: "1.5rem" }}>
        <span>&copy; 2025 Captured by Myle</span>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </main>
  );
}
