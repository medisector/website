"use client";

import Link from "next/link";
import Carousel from "@/components/UI/Carousel";
import useBreakpoint from "@/hooks/useBreakpoint";

type HeroImage = {
  src: string;
  srcMobile?: string;
  alt: string;
};

type HeroProps = {
  images: HeroImage[];
  classNames?: string;
  classNamesMobile?: string;
};

const Hero = ({ images, classNames, classNamesMobile }: HeroProps) => {
  const isLargeScreen = useBreakpoint("lg");

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      {isLargeScreen ? (
        <div className="mb-8">
          {images.length > 1 ? (
            <Carousel images={images} classNames={classNames} classNamesMobile={classNamesMobile} />
          ) : (
            <img
              src={images[0].src}
              alt={images[0].alt}
              className={`mb-2 w-full rounded-xl object-cover ${isLargeScreen ? classNames : classNamesMobile}`}
            />
          )}
        </div>
      ) : (
        <div className="-m-6 mb-4 border-b-3 border-white">
          {images.length > 1 ? (
            <Carousel images={images} mobile={true} classNames={classNames} classNamesMobile={classNamesMobile} />
          ) : (
            <img
              src={
                images[0].srcMobile && !isLargeScreen
                  ? images[0].srcMobile
                  : images[0].src
              }
              alt={images[0].alt}
              className={`w-full object-cover ${isLargeScreen ? classNames : classNamesMobile}`}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Hero;
