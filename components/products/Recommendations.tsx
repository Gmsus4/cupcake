import { IconClockHour3Filled, IconSnowflake, IconTemperatureSun } from "@tabler/icons-react"

export const Recommendations = () => {
    return (
        <>
            <h2 className="text-center md:text-7xl text-5xl font-caveat text-pink mb-10">Recomendaciones generales <br />para tus postres</h2>
            <div className="relative max-w-6xl mx-auto bg-amber-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="grid place-items-center gap-2 rounded-3xl p-10 border-pink/30 bg-pink/5 border-1">
                    <IconTemperatureSun className="text-pink mb-2" height={30} width={30}/>
                    <h3 className="text-pink font-bold font-caveat mb-2 text-3xl text-center">Evita el sol directo</h3>
                    <p className="text-pink text-center">Protege tus postres del sol directo para conservar su frescura y apariencia.</p>
                </div>
                <div className="grid place-items-center gap-2 rounded-3xl p-10 border-pink/30 bg-pink/5 border-1">
                    <IconSnowflake className="text-pink mb-2" height={30} width={30}/>
                    <h3 className="text-pink font-bold font-caveat mb-2 text-3xl text-center">Refrigera, no congeles</h3>
                    <p className="text-pink text-center">Siempre mantener tu producto en refrigeración  nunca congelación.</p>
                </div>
                <div className="grid place-items-center gap-2 rounded-3xl p-10 border-pink/30 bg-pink/5 border-1">
                    <IconClockHour3Filled className="text-pink mb-2" height={30} width={30}/>
                    <h3 className="text-pink font-bold font-caveat mb-2 text-3xl text-center">Prepáralo antes del evento</h3>
                    <p className="text-pink text-center">Para tu evento sacar del refrigerador el producto de 20 a 30 minutos antes </p>
                </div>
                <div className="rounded-3xl overflow-hidden md:col-span-3 col-span-1">
                    <img src="image2.webp" alt="" />
                </div>
            </div>
        </>
    )
}