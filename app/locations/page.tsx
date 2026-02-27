import { Footer } from "@/components/Footer";
import { Locations } from "@/components/locations/Locations";
import { Navbar } from "@/components/Navbar";
import { TitlePage } from "@/components/ui/TitlePage";
import { Titles } from "@/data/titles";

export default function Events() {
    return (
        <>
            <Navbar />
            <TitlePage title={Titles.locations.title} subtitle={Titles.locations.subtitle}/>
            <Locations />
            <Footer />
        </>
    )
}