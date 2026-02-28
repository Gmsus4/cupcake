import { contactData } from "@/data/contactData"
import { socialMedia } from "@/data/socialMedia"
import { IconBrandInstagram, IconBrandWhatsapp, IconBuildingStore, IconPhone } from "@tabler/icons-react"
import Link from "next/link"

export const OrderOnline = () => {
    return (
        <div className="lg:py-30 py-10 bg-yellow flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4">
                <IconBuildingStore size={40} className="text-pink"/>
                <div className="grid gap-2">
                    <h2 className="text-pink font-caveat text-center text-4xl md:text-5xl">Ordena en línea</h2>
                    <p className="text-center text-pink">Get your favorites delivered fast.</p>
                </div>
            </div>
            <div className="flex justify-center gap-3">
                <Link href={`tel:${contactData[0].items[0].value}`} className="bg-pink aspect-square w-18 h-18 grid place-items-center rounded-2xl cursor-pointer hover:bg-pink/93">
                    <IconPhone size={40} className="text-yellow"/>
                </Link>
                <Link href={socialMedia[0].href} className="bg-pink aspect-square w-18 h-18 grid place-items-center rounded-2xl cursor-pointer hover:bg-pink/93">
                    <IconBrandInstagram size={40} className="text-yellow"/>
                </Link>
                <Link href={`https://wa.me/${contactData[0].items[0].value}`} className="bg-pink aspect-square w-18 h-18 grid place-items-center rounded-2xl cursor-pointer hover:bg-pink/93">
                    <IconBrandWhatsapp size={40} className="text-yellow"/>
                </Link>
            </div>
        </div>
    )
}