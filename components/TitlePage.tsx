interface TitleProps {
  title?: string;
  subtitle?: string;
}


export const TitlePage = ({title, subtitle}: TitleProps) => {
    return (
        <section className="bg-pink w-full overflow-hidden h-120 py-20 grid place-items-center px-10">
        <div className="hero-offer flex flex-col gap-4">
          <h1 className="font-caveat xs:text-8xl text-7xl text-yellow text-center">{title}</h1>
          <p className="text-center text-yellow text-base">{subtitle}</p>
        </div>
      </section>
    )
}