import { Navbar } from "@/components/Navbar";
import { TitlePage } from "@/components/ui/TitlePage";
import { Titles } from "@/data/titles";
import { Footer } from "@/components/Footer";
import { Privacy } from "@/components/legal/Privacy";

export default function Terms() {
    return (
        <>
            <Navbar />
            {/* <TitlePage title={Titles.privacy.title} subtitle={Titles.privacy.subtitle}/> */}
            <Privacy />
            <Footer />
        </>
    )
}