"use client";

import React, { useState, useRef, useEffect } from "react";

type CarouselImage = {
  src: string;
  srcMobile?: string;
  alt: string;
};

type CarouselProps = {
  images: CarouselImage[];
  height?: string | number;
  mobile?: boolean;
  classNames?: string;
  classNamesMobile?: string;
};

const Carousel = ({ images, height, mobile = false, classNames, classNamesMobile }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const length = images.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goPrev = () => setIndex((i) => (i - 1 + length) % length);
  const goNext = () => setIndex((i) => (i + 1) % length);

  useEffect(() => {
    if (!length) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, 5000);

    return () => clearInterval(interval);
  }, [length]);

  if (!length) return null;

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    const dx = touchStartX.current - touchEndX.current;
    if (dx > 40) goNext();
    if (dx < -40) goPrev();
  };

  return (
    <div
      className={`relative mx-auto w-full select-none ${mobile ? "" : "mb-2"}`}
    >
      <div
        className={`group relative overflow-hidden ${mobile ? "" : "rounded-2xl"} ${mobile ? classNamesMobile : classNames}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-1500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative min-w-full ${height ? `h-[${height}]` : ""}`}
            >
              <img
                src={img.srcMobile && mobile ? img.srcMobile : img.src}
                alt={img.alt || `slide-${i}`}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Linker Button */}
        <button
          onClick={goPrev}
          aria-label="Vorheriges Bild"
          className="absolute top-1/2 left-2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/60 p-2 opacity-0 shadow backdrop-blur-md transition duration-300 group-hover:opacity-100 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Rechter Button */}
        <button
          onClick={goNext}
          aria-label="Nächstes Bild"
          className="absolute top-1/2 right-2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/60 p-2 opacity-0 shadow backdrop-blur-md transition duration-300 group-hover:opacity-100 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indikatoren */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Gehe zu Slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${i === index ? "scale-125 bg-white" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
