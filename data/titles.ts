export interface TitleProps {
    title: string;
    subtitle: string;
}

export const Titles: Record<string, TitleProps> = {
    aboutUs: {
        title: "Acerca de nosotros :)",
        subtitle: "Aprenda quienes somos y para que elaboramos postres."
    },
    events: {
        title: "Nuestros Eventos",
        subtitle: "Descubre los eventos especiales donde puedes disfrutar de nuestros postres."
    },
    products: {
        title: "Nuestros Productos",
        subtitle: "Explora nuestra variedad de postres artesanales hechos con los mejores ingredientes."
    },
    contact: {
        title: "Contáctanos",
        subtitle: "Estamos aquí para ayudarte con tu pedido o resolver cualquier duda."
    },
}