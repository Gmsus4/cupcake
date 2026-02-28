"use client"
import { useRef, useEffect } from "react"
import { IconCake, IconCup, IconSparkles, IconBrandCakephp, IconStar, IconHeart } from "@tabler/icons-react"

const items = [
  { icon: <IconCake size={20} />, text: "Pasteles a la Medida" },
  { icon: <IconCup size={20} />, text: "Mesa de Postres" },
  { icon: <IconSparkles size={20} />, text: "Sabores que Enamoran" },
  { icon: <IconBrandCakephp size={20} />, text: "Detalles que Marcan" },
  { icon: <IconStar size={20} />, text: "Calidad Artesanal" },
  { icon: <IconHeart size={20} />, text: "Hecho con Amor" },
]

export const MarqueeStrip = () => {
  return (
    <div className="w-full overflow-hidden bg-pink flex">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        // .marquee-track:hover {
        //   animation-play-state: paused;
        // }
      `}</style>

      <div className="marquee-track bg-yellow/90 py-4">
        {/* Renderiza dos veces para el loop infinito */}
        {[...Array(2)].map((_, copyIdx) => (
          <div key={copyIdx} className="flex items-center">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-8 text-pink whitespace-nowrap"
              >
                <span className="text-pink">{item.icon}</span>
                <span className="font-caveat text-xl">{item.text}</span>
                <span className="ml-8 text-pink/30">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}