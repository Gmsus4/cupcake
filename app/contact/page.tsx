import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TitlePage } from "@/components/TitlePage";
import { Titles } from "@/data/titles";

export default function Contact(){
    return(
        <>
            <Navbar />
            <TitlePage title={Titles.contact.title} subtitle={Titles.contact.subtitle}/>
            <Footer />
        </>
    )
}