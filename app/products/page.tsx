import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Recommendations } from "@/components/products/Recommendations";
import { ProductsComponent } from "@/components/products/Products";
import { TitlePage } from "@/components/ui/TitlePage";
import { Titles } from "@/data/titles";
import { Events } from "@/components/products/Events";

export default function Products(){
    return (
        <>
            <Navbar />
            <TitlePage title={Titles.products.title} subtitle={Titles.products.subtitle}/>
            <ProductsComponent />
            <section className="bg-yellow w-full overflow-hidden xs:py-20 py-8 px-6 sm:px-10 lg:px-20">
                <Recommendations />
            </section>
            <section className="bg-yellow w-full overflow-hidden xs:py-20 py-8 px-6 sm:px-10 lg:px-20">
                <Events />
            </section>
            <Footer />
        </>
    )
}