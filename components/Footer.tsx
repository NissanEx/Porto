"use client";

import React, { useRef, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";

// Warna background: samakan dengan section di atasnya
const BG = "#f4f4f4";

// Jumlah kartu yang mengelilingi lingkaran (gambar di bawah diulang bergantian)
const TOTAL = 18;
const STEP = 360 / TOTAL;

const CARDS = [
  {
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    bgColor: "#e64b35",
    shape: true,
  },
  { img: "/sandy.png", text: "SVS/38/04", plain: true },
  {
    img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop",
    text: "Polestar 1:1",
  },
  {
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    text: "CABIN EGO",
  },
  {
    img: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Semua ukuran diturunkan dari --cw (lebar kartu)
  const vars = {
    "--cw": "clamp(105px, 16vw, 200px)",
    "--ch": "calc(var(--cw) * 1.4)",
    "--r": "calc(var(--cw) * 2.3)", // radius lingkaran kartu
    "--cy": "calc(var(--cw) * 3.4)", // titik pusat lingkaran
    "--ring": "calc(var(--cw) * 3.4)", // diameter lingkaran teks
    "--hide": "0px",  // seberapa jauh footer lewat dari pusat
  } as React.CSSProperties;

const ringMask = "none";
const cardsMask = "linear-gradient(to bottom, #000 0%, #000 90%, transparent 100%)";
  // ====== LOGIKA GESER ======
  // posisi awal: foto utama di puncak lingkaran
  const rotation = useMotionValue(-2 * STEP);
  const controls = useRef<{ stop: () => void } | null>(null);
  const draggedRef = useRef(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [grabbing, setGrabbing] = useState(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    controls.current?.stop();
    draggedRef.current = false;
    setGrabbing(true);

    // derajat per piksel supaya kartu mengikuti jari 1:1 di puncak lingkaran
    const cwPx = cardRef.current?.offsetWidth || 160;
    const degPerPx = (180 / Math.PI) / (2.3 * cwPx);

    let lastX = e.clientX;
    let lastT = performance.now();
    let vel = 0; // derajat / detik
    let moved = 0;

    const onMove = (ev: PointerEvent) => {
      const now = performance.now();
      const dx = ev.clientX - lastX;
      const dt = Math.max(now - lastT, 1);
      moved += Math.abs(dx);
      if (moved > 5) draggedRef.current = true;

      const dDeg = dx * degPerPx;
      rotation.set(rotation.get() + dDeg);
      vel = 0.8 * vel + 0.2 * ((dDeg / dt) * 1000);

      lastX = ev.clientX;
      lastT = now;
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      setGrabbing(false);

      if (Math.abs(vel) > 5) {
        controls.current = animate(rotation, rotation.get(), {
          type: "inertia",
          velocity: vel,
          power: 0.5,
          timeConstant: 500,
        });
      }
      setTimeout(() => {
        draggedRef.current = false;
      }, 0);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  return (
    <footer
      className="relative w-full overflow-hidden select-none"
      style={{ ...vars, backgroundColor: BG, height: "calc(var(--cy) + var(--hide))" }}
    >
      <div
        className={`relative w-full max-w-[1400px] h-full mx-auto ${
          grabbing ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
      >
        {/* ============ LINGKARAN BERPUTAR (separuh bawah tersembunyi) ============ */}
        <div
          className="absolute z-0"
          style={{
            left: "50%",
            top: "var(--cy)",
            width: "var(--ring)",
            height: "var(--ring)",
            transform: "translate(-50%, -50%)",
            WebkitMaskImage: ringMask,
            maskImage: ringMask,
          }}
        >
          <motion.div
            className="relative w-full h-full cursor-pointer group"
            onClick={() => {
              if (!draggedRef.current) scrollToTop();
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]"
            >
              <path
                id="circlePath"
                d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                fill="none"
                stroke="#999"
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
              <text className="text-[8px] font-bold tracking-[0.4em] uppercase fill-gray-500">
                <textPath href="#circlePath" textLength="500" lengthAdjust="spacing">
                  PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO •
                </textPath>
              </text>
            </svg>

            <div
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-black"
              style={{ top: "calc(50% - var(--ring) * 0.27)" }}
            >
              <span className="text-xs group-hover:-translate-y-1 transition-transform">▲</span>
              <span className="text-sm md:text-base font-black tracking-widest">ME</span>
            </div>
          </motion.div>
        </div>

        {/* ============ KARTU MENGELILINGI LINGKARAN ============ */}
        {/* Layer statis: hanya untuk mask fade di bawah, tidak menangkap klik */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ WebkitMaskImage: cardsMask, maskImage: cardsMask }}
        >
          {/* Titik pusat lingkaran; elemen ini yang berputar saat digeser */}
          <motion.div
            className="absolute"
            style={{
              left: "50%",
              top: "var(--cy)",
              width: 0,
              height: 0,
              rotate: rotation,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {Array.from({ length: TOTAL }).map((_, i) => {
              const card = CARDS[i % CARDS.length];
              const angle = i * STEP;

              return (
                <div
                  key={i}
                  ref={i === 0 ? cardRef : undefined}
                  className="absolute overflow-hidden rounded-2xl shadow-xl"
                  style={{
                    width: "var(--cw)",
                    height: "var(--ch)",
                    left: "calc(var(--cw) / -2)",
                    top: "calc(var(--ch) / -2 - var(--r))",
                    // titik putar = pusat lingkaran
                    transformOrigin: "calc(var(--cw) / 2) calc(var(--ch) / 2 + var(--r))",
                    transform: `rotate(${angle}deg)`,
                    backgroundColor: card.bgColor || "#fff",
                  }}
                >
                  <img
                    src={card.img}
                    alt="Gallery Item"
                    draggable={false}
                    className={`w-full h-full object-cover ${
                      card.plain ? "" : "grayscale contrast-125 mix-blend-multiply opacity-80"
                    }`}
                  />

                  {card.text && (
                    <div className="absolute top-3 right-3 text-black font-black uppercase tracking-widest text-[8px] md:text-[10px] mix-blend-difference">
                      {card.text}
                    </div>
                  )}

                  {card.shape && (
                    <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply">
                      <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-black fill-current">
                        <path d="M50 10 C 70 10, 90 30, 90 50 C 90 70, 70 90, 50 90 C 30 90, 10 70, 10 50 C 10 30, 30 10, 50 10 Z M 50 30 C 40 30, 30 40, 30 50 C 30 60, 40 70, 50 70 C 60 70, 70 60, 70 50 C 70 40, 60 30, 50 30 Z" />
                      </svg>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/10" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}