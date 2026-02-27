import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TitlePage } from "@/components/TitlePage";
import { Titles } from "@/data/titles";

export default function Events() {
    return (
        <>
            <Navbar />
            <TitlePage title={Titles.events.title} subtitle={Titles.events.subtitle}/>
            <Footer />
        </>
    )
}