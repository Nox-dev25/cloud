"use client";

import { useRef, useState } from "react";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  button: string;
}

export default function Cards({
  imageSrc,
  title,
  description,
  button,
}: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleEnter = () => setOpacity(1);
  const handleLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="
        relative p-[1px] rounded-xl overflow-hidden
        bg-[linear-gradient(135deg,#0d0d0d,#050505)]
        border border-white/10
        transition duration-300
        cursor-pointer
      "
    >
      {/* BORDER GLOW */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200"
        style={{
          opacity,
          background: `
            radial-gradient(
              180px circle at ${pos.x}px ${pos.y}px,
              rgba(44,100,247, 1),
              transparent 70%
            )
          `,
        }}
      />

      {/* INNER CONTAINER */}
      <div
        className="
          relative z-10 rounded-xl p-6
          bg-[#09090b]/95
          backdrop-blur-sm
          overflow-hidden
        "
      >
        {/* INNER SPOTLIGHT - NOW ABOVE BACKGROUND */}
        <div
          className="
            pointer-events-none absolute inset-0
            transition-opacity duration-200
          "
          style={{
            opacity,
            background: `
              radial-gradient(
                400px circle at ${pos.x}px ${pos.y}px,
                rgba(44,100,247, 0.25),
                transparent 70%
              )
            `,
            zIndex: 0,
          }}
        />

        {/* CONTENT (above spotlight) */}
        <div className="relative z-10">
          <img
            src={imageSrc}
            alt={title}
            className="w-100 h-100 mb-4 object-contain"
          />

          <div className="w-full text-left space-y-4">
            <h3 className="text-white font-normal text-3xl">{title}</h3>
            <p className="text-gray-400 text-xl">{description}</p>

            <button
              className="
                flex items-center gap-2 text-gray-400 font-medium text-lg
                transition-all duration-300 hover:text-white
                hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]
              "
            >
              {button} <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}