"use client";

import useBreakpoint from "@/hooks/useBreakpoint";

type PageImageProps = {
  src: string;
  srcMobile?: string;
  alt: string;
  className?: string;
};

export default function PageImage({
                                    src,
                                    srcMobile,
                                    alt,
                                    className,
                                  }: PageImageProps) {
  const isMobile = !useBreakpoint('md');

  return (
    <img
      src={isMobile && srcMobile ? srcMobile : src}
      alt={alt}
      className={`mb-2 rounded-xl ${className}`}
    />
  );
}