"use client";
import { useEffect, useState } from "react";

function useBreakpoint(breakpoint: "sm" | "md" | "lg" | "xl" | "2xl") {
  const queries = {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  };

  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia(queries[breakpoint]).matches
      : false,
  );

  useEffect(() => {
    const media = window.matchMedia(queries[breakpoint]);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [breakpoint]);

  return matches;
}

export default useBreakpoint;
