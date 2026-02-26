import { Navbar } from "@/components/Navbar"
import Link from "next/link"

export default function AboutUs() {
  return (
    <>
      <style>{`
        /* ── Entrada al hacer scroll (Intersection Observer vía CSS trick) ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50%       { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes floatSlowAlt {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50%       { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .about-tag {
          animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.1s both;
        }
        .about-title {
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.2s both;
        }
        .about-body {
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.35s both;
        }
        .about-cta {
          animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.5s both;
        }
        .about-img-main {
          animation: fadeRight 0.9s cubic-bezier(.22,1,.36,1) 0.3s both,
                     floatSlow 5s ease-in-out 1.2s infinite;
        }
        .about-img-secondary {
          animation: fadeLeft 0.8s cubic-bezier(.22,1,.36,1) 0.5s both,
                     floatSlowAlt 4.5s ease-in-out 1.5s infinite;
        }
        .about-stat {
          animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) both;
        }
        .about-stat:nth-child(1) { animation-delay: 0.4s; }
        .about-stat:nth-child(2) { animation-delay: 0.55s; }
        .about-stat:nth-child(3) { animation-delay: 0.7s; }

        .badge-spin {
          animation: spinSlow 12s linear infinite;
        }

        .shimmer-line {
          background: linear-gradient(90deg, transparent 0%, rgba(255,220,80,0.5) 50%, transparent 100%);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }

        .card-value {
          background: linear-gradient(135deg, #FFE55C 30%, #FFAA30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <Navbar />
      <section className="relative bg-pink w-full overflow-hidden py-20 px-6 sm:px-10 lg:px-20">
        {/* ── Fondos decorativos ── */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-yellow/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-yellow/8 blur-3xl" />
          {/* Líneas diagonales de fondo */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M-10 10 L10 -10 M0 40 L40 0 M30 50 L50 30" stroke="#FFE55C" strokeWidth="0.8" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* ── Layout principal: texto | imágenes ── */}
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            {/* ── Columna de texto ── */}
            <div className="flex-1 flex flex-col gap-7 lg:max-w-lg">
              {/* Tag */}
              <div className="about-tag flex items-center gap-2 w-fit">
                <span className="h-px w-8 bg-yellow/50" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-yellow/60 font-semibold">Nuestra historia</span>
              </div>

              {/* Título */}
              <h2 className="about-title font-caveat text-5xl sm:text-6xl lg:text-7xl text-yellow leading-tight">
                Horneado con amor <br className="hidden sm:block" />
                desde 2010
              </h2>

              {/* Línea shimmer decorativa */}
              <div className="shimmer-line h-px w-full rounded-full" />

              {/* Cuerpo */}
              <div className="about-body flex flex-col gap-4 text-yellow/70 text-sm sm:text-base leading-relaxed">
                <p>
                  Red Velvet nació de una receta familiar y la obsesión de hacer que cada bocado cuente. Lo que empezó como pastelitos para los vecinos del barrio, hoy es el lugar de encuentro donde
                  el café huele a mañana y los pasteles saben a abrazo.
                </p>
                <p>Trabajamos con ingredientes locales, temporada a temporada, porque creemos que la mejor repostería empieza mucho antes de llegar al horno.</p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { value: "14+", label: "Años horneando" },
                  { value: "80k", label: "Pasteles vendidos" },
                  { value: "100%", label: "Ingredientes locales" },
                ].map((stat) => (
                  <div key={stat.label} className="about-stat flex flex-col gap-0.5">
                    <span className="card-value font-caveat text-4xl font-bold">{stat.value}</span>
                    <span className="text-yellow/50 text-xs uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="about-cta flex flex-col xs:flex-row gap-3 pt-2">
                <Link href="/menu" className="btn rounded-full bg-yellow text-pink shadow-none border-none hover:scale-105 transition-transform duration-200 px-7">
                  Ver nuestro menú
                </Link>
                <Link href="/contacto" className="btn rounded-full bg-transparent border-yellow shadow-none text-yellow hover:bg-yellow/10 transition-colors duration-200 px-7">
                  Contáctanos
                </Link>
              </div>
            </div>

            {/* ── Columna de imágenes ── */}
            <div className="flex-1 relative flex items-center justify-center w-full min-h-[320px] sm:min-h-[420px]">
              {/* Imagen principal */}
              <div className="about-img-main relative z-10">
                <img src="/hero1.png" alt="Pastel Red Velvet" className="w-52 sm:w-64 lg:w-72 drop-shadow-2xl" />
                {/* Badge circular giratorio */}
                <div className="badge-spin absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20">
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    <defs>
                      <path id="circle-text" d="M 40,40 m -27,0 a 27,27 0 1,1 54,0 a 27,27 0 1,1 -54,0" />
                    </defs>
                    <text className="fill-yellow" fontSize="9.5" letterSpacing="2.2" fontWeight="600">
                      <textPath href="#circle-text">HECHO A MANO · HECHO CON AMOR ·</textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Imagen secundaria superpuesta */}
              <div className="about-img-secondary absolute -bottom-4 -left-2 sm:left-4 z-20">
                <div className="relative">
                  <img src="/hero2.png" alt="Detalle de pastelería" className="w-32 sm:w-44 drop-shadow-xl" />
                  {/* Pill encima de imagen secundaria */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-yellow text-pink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Receta original
                  </div>
                </div>
              </div>

              {/* Imagen terciaria */}
              <div className="absolute -right-2 sm:right-0 bottom-8 z-0 opacity-60" style={{ animation: "floatSlow 6s ease-in-out 2s infinite" }}>
                <img src="/hero3.png" alt="" aria-hidden="true" className="w-24 sm:w-32 rotate-6 drop-shadow-lg" />
              </div>

              {/* Tarjeta flotante de calificación */}
              <div
                className="absolute top-0 right-0 sm:-right-4 bg-yellow/10 backdrop-blur-sm border border-yellow/20 rounded-2xl px-4 py-3 flex flex-col gap-1 z-30"
                style={{ animation: "floatSlowAlt 4s ease-in-out 1s infinite" }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-yellow text-xs font-semibold">+2,400 reseñas</span>
                <span className="text-yellow/50 text-[10px]">Google · Facebook</span>
              </div>
            </div>
          </div>

          {/* ── Franja inferior: valores ── */}
          <div className="mt-20 pt-10 border-t border-yellow/20 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: "🌾", title: "Ingredientes frescos", desc: "Seleccionamos proveedores locales cada semana para garantizar la mejor calidad." },
              { emoji: "🎂", title: "Recetas artesanales", desc: "Sin mezclas industriales. Cada pastel es elaborado desde cero en nuestra cocina." },
              { emoji: "☕", title: "Café de especialidad", desc: "Granos de origen, preparados con técnica y cuidado en cada taza." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col gap-3 p-5 rounded-2xl border border-yellow/10 hover:border-yellow/30 hover:bg-yellow/5 transition-all duration-300"
                style={{ animation: `fadeUp 0.6s cubic-bezier(.22,1,.36,1) ${0.3 + idx * 0.15}s both` }}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300 w-fit">{item.emoji}</span>
                <h3 className="font-caveat text-2xl text-yellow">{item.title}</h3>
                <p className="text-yellow/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
