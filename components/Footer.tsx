import { navItems } from "@/data/navItems"
import { socialMedia } from "@/data/socialMedia"
import { IconCup } from "@tabler/icons-react"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-pink w-full pb-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-6">
        {/* Bloque superior: logo + tagline a ancho completo */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-8 border-b border-yellow/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 grid place-items-center bg-yellow rounded-full shrink-0 hover:scale-110 transition-transform duration-200">
              <Link href="/" className="text-pink">
                <IconCup width={22} height={22} />
              </Link>
            </div>
            <span className="text-yellow font-bold text-xl tracking-tight">ACME</span>
          </div>
          <p className="text-yellow/60 text-sm max-w-xs sm:text-right leading-relaxed">
            Providing reliable tech since 1992. <br className="hidden sm:block" />
            Built with care, delivered with precision.
          </p>
        </div>

        {/* Grid de columnas: se adapta por breakpoint */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {/* Col 1 — Inicio */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-yellow/90 font-semibold">Inicio</span>
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <Link key={idx} href={item.href} className="group flex items-center gap-2 text-sm text-yellow font-medium hover:text-yellow transition-colors duration-150">
                    <span className="w-0 group-hover:w-2 h-px bg-yellow transition-all duration-200 rounded-full" />
                    {item.title}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Col 2 — Categorías */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-yellow/90 font-semibold">Categorías</span>
            <div className="flex flex-col gap-2">
              {["Menú del día", "Postres", "Bebidas", "Especiales"].map((label, idx) => (
                <Link key={idx} href="" className="group flex items-center gap-2 text-sm text-yellow font-medium hover:text-yellow transition-colors duration-150">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow transition-all duration-200 rounded-full" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Empresa (visible solo sm+) */}
          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-yellow/90 font-semibold">Empresa</span>
            <div className="flex flex-col gap-2">
              {["Sobre nosotros", "Trabaja con nosotros", "Blog", "Contacto"].map((label, idx) => (
                <Link key={idx} href="" className="group flex items-center gap-2 text-sm text-yellow font-medium hover:text-yellow transition-colors duration-150">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow transition-all duration-200 rounded-full" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 — Síguenos */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-yellow/90 font-semibold">Síguenos</span>
            <div className="flex flex-wrap gap-2">
              {socialMedia.map((item, idx) => {
                const Icon = item.icon
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="w-9 h-9 grid place-items-center bg-yellow/10 hover:bg-yellow rounded-full text-yellow hover:text-pink transition-all duration-200 hover:scale-110"
                  >
                    <Icon width={18} height={18} />
                  </Link>
                )
              })}
            </div>

            {/* Newsletter mini */}
            <div className="mt-2 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-yellow/90 font-semibold">Newsletter</span>
              <div className="flex overflow-hidden rounded-full border border-yellow/30 focus-within:border-yellow transition-colors duration-200">
                <input type="email" placeholder="tu@email.com" className="bg-transparent text-yellow placeholder-yellow/30 text-xs px-3 py-2 flex-1 outline-none min-w-0" />
                <button className="bg-yellow text-pink text-xs font-semibold px-3 py-2 shrink-0 hover:bg-yellow/90 transition-colors duration-150">→</button>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 pt-5 border-t border-yellow/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] text-yellow/40">
          <span>© {new Date().getFullYear()} ACME Industries Ltd. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link href="" className="hover:text-yellow/70 transition-colors">
              Privacidad
            </Link>
            <Link href="" className="hover:text-yellow/70 transition-colors">
              Términos
            </Link>
            <Link href="" className="hover:text-yellow/70 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
