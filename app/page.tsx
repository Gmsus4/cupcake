import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "https://cupcakedemo.netlify.app/"),
  title: {
    default: "Red Velvet",
    template: "%s — Red Velvet",  // ← todas las páginas usan este formato
  },
  description: "Postres artesanales hechos con amor.",
}

export default function Home() {
  return (
    <div className="">
        <Navbar />
        <Hero />
        <Footer />
    </div>
  );
}
