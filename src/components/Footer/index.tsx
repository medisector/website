import Image from "next/image";
import Link from "next/link";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useEffect, useState } from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-footer z-10 min-h-[4vh] pb-3 text-sm lg:fixed lg:right-[1vw] lg:bottom-[2vh] lg:bg-transparent">
        <div className="container flex justify-center gap-5">
          <Link
            href="/jobs"
            className={`text-primary hover:text-dark flex truncate text-base font-light`}
          >
            Jobs
          </Link>
          <Link
            href="/impressum"
            className={`text-primary hover:text-dark flex truncate text-base font-light`}
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className={`text-primary hover:text-dark flex truncate text-base font-light`}
          >
            Cookies/Datenschutz
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
