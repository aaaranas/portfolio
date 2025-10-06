"use client";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

export default function Home() {
  const sections = ["solo", "group", "candid", "landscape"];
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState("solo");
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      let current = "solo";
      for (const s of sections) {
        const el = sectionRefs.current[s];
        if (el && window.scrollY + 100 >= el.offsetTop) {
          current = s;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll(".solo-gallery img").forEach((img) => {
      const applyClass = () => {
        if (img.naturalHeight > img.naturalWidth) {
          img.classList.add("portrait-img");
        } else {
          img.classList.add("landscape-img");
        }
      };
      if (img.complete) applyClass();
      else img.onload = applyClass;
    });
  }, []);

  const images = {
    solo: [
      { src: "/photos/keisha 1.jpg", alt: "Keisha Photo 1" },
      { src: "/photos/keisha 2.jpg", alt: "Keisha Photo 2" },
      { src: "/photos/keisha 3.jpg", alt: "Keisha Photo 3" },
    ],
    group: [
      { src: "/photos/cassy rose 1.jpg", alt: "Group Shot - Cassy Rose 1" },
      { src: "/photos/cassy rose 2.jpg", alt: "Group Shot - Cassy Rose 2" },
      { src: "/photos/cassy rose 3.jpg", alt: "Group Shot - Cassy Rose 3" },
    ],
    candid: [
      { src: "/photos/candid1.jpg", alt: "Candid Shot 1" },
      { src: "/photos/candid2.jpg", alt: "Candid Shot 2" },
      { src: "/photos/candid3.jpg", alt: "Candid Shot 3" },
    ],
    landscape: [
      { src: "/photos/landscape1.jpg", alt: "Landscape 1" },
      { src: "/photos/landscape2.jpg", alt: "Landscape 2" },
      { src: "/photos/landscape3.jpg", alt: "Landscape 3" },
    ],
  };

  return (
    <>
      <Head>
        <title>Photography Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Montserrat', Arial, sans-serif;
          margin: 0;
          background: #fbeaf3;
          color: #a85c7a;
        }
        .navbar {
          position: sticky; top: 0; background: #fce4ec;
          box-shadow: 0 2px 8px rgba(200, 113, 163, 0.07);
          z-index: 100; display: flex; justify-content: center; gap: 2rem;
          padding: 1rem 0; font-family: 'Montserrat', Arial, sans-serif;
        }
        .navbar a {
          color: #c471a3; text-decoration: none; font-weight: 600;
          font-size: 1.1rem; padding: 0.5rem 1rem; border-radius: 6px;
          transition: background 0.2s, color 0.2s;
        }
        .navbar a:hover, .navbar a.active { background: #f8bbd0; color: #d72660; }
        .fade-in { opacity: 0; transform: translateY(30px); animation: fadeInUp 1s forwards; }
        @keyframes fadeInUp { to { opacity: 1; transform: none; } }
        .lightbox {
          display: flex; position: fixed; z-index: 9999;
          left: 0; top: 0; width: 100vw; height: 100vh;
          background: rgba(248, 187, 208, 0.95);
          justify-content: center; align-items: center;
        }
        .lightbox.hidden { display: none; }
        .lightbox img {
          max-width: 80vw; max-height: 80vh; border-radius: 16px;
          box-shadow: 0 8px 32px rgba(200, 113, 163, 0.25);
        }
        header {
          background: linear-gradient(90deg, #f8bbd0 0%, #fce4ec 100%);
          color: #a85c7a; padding: 2rem 0; text-align: center;
          box-shadow: 0 2px 8px rgba(248, 187, 208, 0.15);
        }
        h1 {
          margin: 0; font-size: 2.5rem; letter-spacing: 2px;
          color: #d72660; font-family: 'Playfair Display', serif;
        }
        .section-title {
          font-family: 'Playfair Display', serif; font-size: 2rem;
          color: #c471a3; margin-top: 2rem; margin-bottom: 1rem;
          text-align: center; background: #fce4ec; border-radius: 8px;
          padding: 0.5rem 0; box-shadow: 0 2px 8px rgba(200, 113, 163, 0.07);
        }
        .gallery {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem; padding: 2rem; max-width: 1200px; margin: auto;
          background: #fce4ec; border-radius: 16px;
          box-shadow: 0 2px 12px rgba(248, 187, 208, 0.12);
        }
        .gallery img {
          width: 100%; height: auto; max-height: 350px; object-fit: contain;
          border-radius: 12px; box-shadow: 0 4px 16px rgba(248, 187, 208, 0.15);
          border: 3px solid #f8bbd0; transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .gallery img:hover { transform: scale(1.05); box-shadow: 0 8px 24px rgba(200, 113, 163, 0.25); border-color: #c471a3; }
        .solo-gallery { display: flex; justify-content: center; gap: 1.5rem; }
        .portrait-img {
          border: 4px solid #c471a3; border-radius: 24px; box-shadow: 0 8px 32px rgba(200, 113, 163, 0.18);
          max-width: 350px; max-height: 90vh; object-fit: contain;
        }
        .landscape-img {
          border: 4px solid #c471a3; border-radius: 12px; box-shadow: 0 4px 16px rgba(200, 113, 163, 0.15);
          max-width: 90vw; max-height: 250px; object-fit: contain;
        }
        footer {
          text-align: center; padding: 1rem 0;
          background: linear-gradient(90deg, #f8bbd0 0%, #fce4ec 100%);
          color: #a85c7a; margin-top: 2rem; font-weight: 500;
        }
      `}</style>

      <header>
        <h1>Myle Photography Portfolio</h1>
        <p style={{ fontFamily: "'Montserrat', Arial, sans-serif", fontSize: "1.2rem" }}>
          Capturing moments from gigs and events
        </p>
      </header>

      <nav className="navbar">
        {sections.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className={activeSection === s ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              sectionRefs.current[s].scrollIntoView({ behavior: "smooth" });
            }}
          >
            {s.charAt(0).toUpperCase() + s.slice(1) + (s === "solo" ? " Shots" : s === "group" ? " Shots" : s === "candid" ? " Shots" : "")}
          </a>
        ))}
      </nav>

      <main>
        {/* SOLO SECTION */}
        <section
          id="solo"
          className="fade-in"
          ref={(el) => (sectionRefs.current["solo"] = el)}
        >
          <div className="section-title">Solo Shots</div>
          <div className="gallery solo-gallery">
            {images.solo.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                onClick={() => setLightboxImg(img.src)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </section>

        {/* GROUP SECTION */}
        <section
          id="group"
          className="fade-in"
          ref={(el) => (sectionRefs.current["group"] = el)}
        >
          <div className="section-title">Group Shots</div>
          <div className="gallery">
            {images.group.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                onClick={() => setLightboxImg(img.src)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </section>

        {/* CANDID SECTION */}
        <section
          id="candid"
          className="fade-in"
          ref={(el) => (sectionRefs.current["candid"] = el)}
        >
          <div className="section-title">Candid Shots</div>
          <div className="gallery">
            {images.candid.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                onClick={() => setLightboxImg(img.src)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </section>

        {/* LANDSCAPE SECTION */}
        <section
          id="landscape"
          className="fade-in"
          ref={(el) => (sectionRefs.current["landscape"] = el)}
        >
          <div className="section-title">Landscape</div>
          <div className="gallery">
            {images.landscape.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                onClick={() => setLightboxImg(img.src)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </section>

        {/* LIGHTBOX POPUP */}
        <div
          className={`lightbox${lightboxImg ? "" : " hidden"}`}
          onClick={() => setLightboxImg(null)}
        >
          {lightboxImg && <img src={lightboxImg} alt="Lightbox" />}
        </div>
      </main>

      <footer>© 2025 Captured by Myle</footer>
    </>
  );
}
