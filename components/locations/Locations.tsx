"use client"
import { useState } from "react"
import { IconPhone, IconClock, IconMapPin, IconX } from "@tabler/icons-react"

interface Location {
  id: number
  name: string
  address: string
  phone: string
  hours: string
  image: string
  mapUrl: string
  embedUrl: string
}

const locations: Location[] = [
  {
    id: 1,
    name: "Estadio 3 de Marzo",
    address: "Av. Patria 1201, Uag, 45110 Zapopan, Jal.",
    phone: "+52 (332) 236-4324",
    hours: "Lun–Sáb: 9:00am – 8:00pm",
    image: "https://cdn.milenio.com/uploads/media/2024/04/30/estadio-marzo-une-sedes-mundial.jpeg",
    mapUrl: "https://maps.app.goo.gl/vzVeXZuMAfdURUFk8",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.4048199609742!2d-103.42101651390193!3d20.693779649897476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428aef02189d57b%3A0x4dd9996d73ca3908!2sEstadio%203%20de%20Marzo!5e0!3m2!1ses!2smx!4v1772244958409!5m2!1ses!2smx",
  },
]

export const Locations = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <div className="bg-pink px-4 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {locations.map((loc) => {
          const isOpen = openId === loc.id

          return (
            <div key={loc.id} className="relative w-full h-96 overflow-hidden rounded-3xl shadow-lg">

              {/* Mapa siempre interactivo */}
              <iframe
                src={loc.embedUrl}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Botón toggle — siempre visible encima del mapa */}
              <button
                onClick={() => setOpenId(isOpen ? null : loc.id)}
                className="absolute top-4 right-4 cursor-pointer z-20 bg-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1 hover:opacity-90 transition-opacity"
              >
                {/* {loc.name} */} Ver más
                {isOpen
                  ? <IconX size={12} />
                  : <IconMapPin size={12} />
                }
              </button>

              {/* Info panel — sube desde abajo al hacer click */}
              <div
                className={`absolute bottom-0 left-0 right-0 z-10 transition-transform duration-300 ease-out ${
                  isOpen ? "translate-y-0" : "translate-y-full"
                }`}
              >
                {/* Overlay para cerrar al hacer click fuera */}
                {isOpen && (
                  <div
                    className="fixed inset-0 z-0"
                    onClick={() => setOpenId(null)}
                  ></div>
                )}

                <div className="relative z-10 m-4 rounded-2xl bg-white/95 backdrop-blur-sm p-5 flex gap-4 shadow-xl">
                  <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col gap-1.5 justify-center">
                    <h3 className="text-xl font-caveat font-bold text-pink">{loc.name}</h3>

                    <div className="flex items-start gap-2 text-sm text-pink/80">
                      <IconMapPin size={14} className="mt-0.5 shrink-0 text-pink" />
                      <span>{loc.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-pink/80">
                      <IconPhone size={14} className="shrink-0 text-pink" />
                      <span>{loc.phone}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-pink/80">
                      <IconClock size={14} className="shrink-0 text-pink" />
                      <span>{loc.hours}</span>
                    </div>

                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-xs font-semibold text-pink underline underline-offset-2 hover:opacity-70 transition-opacity"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}