'use client';

import { navItems } from "@/data/navItems"
import { IconBrandInstagram, IconCup } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  // Función auxiliar para determinar si el link está activo
  const isActive = (href: string) => {
    // Exact match para la mayoría de casos
    // Si tienes rutas anidadas (ej: /blog/1), puedes usar pathname.startsWith(href)
    return pathname === href;
  };

  return (
    <div className="navbar bg-pink fixed z-100">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-yellow btn-ghost lg:hidden text-pink">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content text-black bg-yellow rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx} className="font-bold text-pink">
                        <Link href={item.href} >
                          {item.title}
                          <Icon width={18} height={18} className="pb-0.5"/>
                        </Link>
                      </li>
                    );
                })}
            </ul>
          </div>
          <a className="btn btn-ghost text-yellow text-xl">daisyUI</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-30 justify-between m-auto w-full px-4 h-14 rounded-full relative">
            <div className="flex gap-2 ">
              {navItems.slice(0, 2).map((item, idx) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <li
                    key={idx}
                    className={`
                      font-semibold text-yellow transition-all duration-300 ease-out
                      px-4 rounded-full cursor-pointer
                      ${active 
                        ? "bg-yellow text-pink!" 
                        : "hover:bg-yellow hover:text-pink"
                      }
                    `}
                  >
                    <Link href={item.href} className="flex items-center gap-1.5">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </div>

            <div className="w-10 h-10 grid place-items-center bg-yellow rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href={"/"} className="w-auto font-semibold text-pink transition-all duration-300 hover:scale-125"><IconCup /></Link>
            </div>

            <div className="flex gap-2">
              {navItems.slice(2, 4).map((item, idx) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <li
                    key={idx + 2}
                    className={`
                      font-semibold text-yellow transition-all duration-300 ease-out
                      px-4 rounded-full cursor-pointer
                      ${active 
                        ? "bg-yellow text-pink!" 
                        : "hover:bg-yellow hover:text-pink"
                      }
                    `}
                  >
                    <Link href={item.href} className="flex items-center gap-1.5">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>

        <div className="navbar-end lg:hidden">
          <Link href={""} className="btn bg-yellow border-none text-pink shadow-none font-bold">
              <IconBrandInstagram />
          </Link>
        </div>
      </div>
    </div>
  )
}
