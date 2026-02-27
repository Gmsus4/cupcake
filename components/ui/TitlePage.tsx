"use client"
import { useEffect, useState } from "react"

interface TitleProps {
  title?: string
  subtitle?: string
}

export const TitlePage = ({ title, subtitle }: TitleProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-pink w-full overflow-hidden h-80 py-20 pb-6 grid place-items-center px-10">
      <div className="flex flex-col gap-4">
        <h1
          className={`font-caveat xs:text-8xl text-7xl text-yellow text-center transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-center text-yellow text-base transition-all duration-700 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}