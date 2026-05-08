import Hero from "@/components/Hero";

type SimpleHeroProps = {
  src: string;
  srcMobile?: string;
  alt: string;
  className?: string;
};

const SimpleHero = ({
                      src,
                      srcMobile,
                      alt,
                      className,
                    }: SimpleHeroProps) => {
  return (
    <Hero
      images={[
        {
          src: src,
          srcMobile: srcMobile,
          alt: alt,
        },
      ]}

      classNames={className}
    />
  );
};

export default SimpleHero;