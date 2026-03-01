"use client"

import { contactData } from "@/data/contactData"
import { navItems } from "@/data/navItems"
import { IconBrandInstagram, IconCup, IconMenu2, IconPhoneCall } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname()

  // Función auxiliar para determinar si el link está activo
  const isActive = (href: string) => {
    // Exact match para la mayoría de casos
    // Si tienes rutas anidadas (ej: /blog/1), puedes usar pathname.startsWith(href)
    return pathname === href
  }

  return (
    <div className="navbar bg-pink fixed z-1000">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-yellow hover:bg-yellow/10 transition-colors">
              <IconMenu2 size={40}/>
            </div>

            <ul tabIndex={-1} className="menu dropdown-content z-50 mt-3 w-64 p-3 shadow-2xl rounded-2xl bg-yellow border border-pink/10 flex flex-col gap-1">
              {navItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={idx}>
                    <Link href={item.href} className="flex items-center justify-between px-4 py-3 rounded-xl text-pink font-bold hover:bg-pink hover:text-yellow transition-all duration-200 group">
                      <span className="font-caveat text-xl">{item.title}</span>
                      <Icon width={28} height={28} className="text-pink/95 group-hover:text-yellow transition-colors" />
                    </Link>
                  </li>
                )
              })}

              {/* Separador + CTA */}
              <div className="h-px bg-pink/10 my-1" />
              <li>
                <Link href={`tel:${contactData[0].items[0].value}`} className="flex items-center justify-center px-4 py-3 rounded-xl bg-pink text-yellow font-caveat text-xl hover:opacity-90 transition-opacity">
                  Pedir ahora
                  <IconPhoneCall size={20}/>
                </Link>
              </li>
            </ul>
          </div>

          {/* <Link href="/" className="btn btn-ghost text-yellow font-caveat text-xl">
            TAGB
          </Link> */}
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-30 justify-between m-auto w-full px-4 h-14 rounded-full relative">
            <div className="flex gap-2 ">
              {navItems.slice(0, 2).map((item, idx) => {
                const Icon = item.icon
                const active = isActive(item.href)

                return (
                  <li
                    key={idx}
                    className={`
                      font-semibold text-yellow transition-all duration-300 ease-out
                      px-4 rounded-full cursor-pointer
                      ${active ? "bg-yellow text-pink!" : "hover:bg-yellow hover:text-pink"}
                    `}
                  >
                    <Link href={item.href} className="flex items-center gap-1.5">
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </div>

            <div className="w-10 h-10 grid place-items-center bg-yellow rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href={"/"} className="w-auto font-semibold text-pink transition-all duration-300 hover:scale-125">
                <IconCup />
              </Link>
            </div>

            <div className="flex gap-2">
              {navItems.slice(2, 4).map((item, idx) => {
                const Icon = item.icon
                const active = isActive(item.href)

                return (
                  <li
                    key={idx + 2}
                    className={`
                      font-semibold text-yellow transition-all duration-300 ease-out
                      px-4 rounded-full cursor-pointer
                      ${active ? "bg-yellow text-pink!" : "hover:bg-yellow hover:text-pink"}
                    `}
                  >
                    <Link href={item.href} className="flex items-center gap-1.5">
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </div>
          </ul>
        </div>

        <div className="navbar-end lg:hidden">
          {/* <Link target="_blank" href={"https://www.instagram.com/tagblade/"} className="btn bg-yellow border-none text-pink shadow-none font-bold">
            <IconBrandInstagram />
          </Link> */}

          <Link href={"/"} className="btn bg-yellow border-none text-pink shadow-none font-bold">
            <IconCup />
          </Link>
        </div>
      </div>
    </div>
  )
}
