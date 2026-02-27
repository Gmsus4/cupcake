import { Navbar } from "@/components/Navbar";
import { TitlePage } from "@/components/ui/TitlePage";
import { Titles } from "@/data/titles";
import { Footer } from "@/components/Footer";
import { TermsAndConditions } from "@/components/legal/Terms";

export default function Terms() {
    return (
        <>
            <Navbar />
            {/* <TitlePage title={Titles.terms.title} subtitle={Titles.terms.subtitle}/> */}
            <TermsAndConditions />
            <Footer />
        </>
    )
}