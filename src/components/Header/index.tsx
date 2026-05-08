"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import menuData, { socialIcons } from "./menuData";

import SocialIcon from "@/components/Header/SocialIcon";
import { Menu } from "@/types/menu";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // check if click was outside nav area
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        // close menu if open
        if (navbarOpen) {
          navbarToggleHandler();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, navbarToggleHandler]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [navbarOpen]);

  const usePathName = usePathname();

  // Determine which top-level menu item should be marked active.
  // If a path appears in multiple submenus (e.g. /krankenfahrten/finca is in
  // both "Urlaub" and "Krankenfahrten"), only the first match wins so that
  // both items aren't underlined at the same time.
  const activeMenuId = (() => {
    const visible = menuData.filter((m) => m.showMainMenu ?? true);
    const direct = visible.find((m) => m.path === usePathName);
    if (direct) return direct.id;
    const viaSubmenu = visible.find(
      (m) =>
        m.path !== "/" &&
        m.submenu?.some((s: any) => s.path === usePathName),
    );
    return viaSubmenu?.id;
  })();

  return (
    <>
      {/* Mobile Header */}
      <header
        className={`header fixed top-0 left-0 z-999999 flex w-full flex-col lg:hidden`}
        ref={navRef}
      >
        <div className="flex w-full items-center justify-between bg-white">
          <a href="/" className={`header-logo ml-[5vw] w-[45vw]`}>
            <Image
              src="/images/medisector/logo.svg"
              alt="Logo MediSector"
              width={150}
              height={50}
              className="w-full"
            />
          </a>
          <div
            className="mt-auto flex w-[30vw] items-center justify-end p-2 pr-[4vw]"
            aria-label="Social Media Links"
          >
            {socialIcons.map((icon, index) => (
              <SocialIcon
                key={index}
                icon={icon.icon}
                size={icon.size ? icon.size : "lg"}
                href={icon.href}
                label={icon.label}
                backgroundColor={"bg-primary opacity-70"}
                height={7}
              />
            ))}
          </div>
        </div>
        <div className="bg-header flex w-full border-b-3 border-white">
          <button
            onClick={navbarToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="ring-primary mr-3 ml-auto block h-11 w-11 rounded-lg px-3 py-[3px] focus:ring"
          >
            <span
              className={`relative block h-0.5 bg-black/80 transition-all duration-300 ${
                navbarOpen
                  ? "top-[5px] left-0.5 my-1 w-[20px] rotate-45"
                  : "my-1.5 w-[30px]"
              }`}
            />
            <span
              className={`relative my-1 block h-0.5 w-[30px] bg-black/80 transition-all duration-300 ${
                navbarOpen ? "opacity-0" : "my-1.5"
              }`}
            />
            <span
              className={`relative my-1 block h-0.5 bg-black/80 transition-all duration-300 ${
                navbarOpen
                  ? "top-[-7px] left-0.5 w-[20px] -rotate-45"
                  : "my-1.5 w-[30px]"
              }`}
            />
          </button>
          <nav
            id="navbarCollapse"
            className={`navbar bg-primary inset-shadow-md overflow-y-auto absolute top-full right-0 z-100 w-[89vw] h-[85dvh] py-4 pl-6 shadow-lg shadow-black inset-shadow-black duration-300 ${
              navbarOpen
                ? "visibility translate-x-0 opacity-100"
                : "invisible translate-x-full opacity-0"
            }`}
          >
            <ul className="block lg:flex">
              {menuData.filter((menuItem) => menuItem.showMainMenu ?? true).map((menuItem, index) => {
                const isActive = menuItem.id === activeMenuId;

                return (
                  <li key={index} className="group relative">
                    {/* First Level */}
                    <Link
                      href={menuItem.path}
                      onClick={navbarToggleHandler}
                      className={`flex truncate border-b border-white py-2.5 text-base text-white transition-all duration-150 ${
                        isActive
                          ? "font-medium"
                          : "font-light hover:text-white/90"
                      }`}
                    >
                      {menuItem.mobileTitle ??
                        menuItem.htmlTitle ??
                        menuItem.title}
                    </Link>

                    {/* Second Level (falls vorhanden) */}
                    {menuItem.submenu && isActive && usePathName != "/" && (
                      <ul className="mt-1 space-y-1">
                        {menuItem.submenu.map(
                          (subItem: Menu, subIndex: number) => {
                            const isSubActive = usePathName === subItem.path;

                            if (subItem.path !== menuItem.path) {
                              return (
                                <li
                                  key={subIndex}
                                  className="group relative before:absolute before:top-1/2 before:left-2 before:-translate-y-1/2 before:text-white before:content-['•']"
                                >
                                  <Link
                                    href={subItem.path}
                                    onClick={navbarToggleHandler}
                                    className={`flex truncate border-b border-white py-2.5 pl-8 text-base text-white transition-all duration-150 ${
                                      isSubActive
                                        ? "font-medium"
                                        : "font-light hover:text-white/90"
                                    }`}
                                  >
                                    {subItem.mobileTitle ??
                                      subItem.htmlTitle ??
                                      subItem.title}
                                  </Link>
                                </li>
                              );
                            }
                          },
                        )}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      {/* Desktop Header */}
      <header
        className={`header sticky top-0 left-0 z-999999 hidden h-[5vh] w-full items-center-safe lg:flex`}
      >
        <Link
          href="/"
          className={`header-logo absolute top-[10vh] left-[2vw] w-[15vw]`}
        >
          <Image
            src="/images/medisector/logo.svg"
            alt="Logo MediSector"
            width={140}
            height={30}
            className="w-full"
          />
        </Link>
        <div className="flex w-full">
          <div className="bg-header w-[70vw] border-b-4 border-white pl-[3vw]">
            <div className="flex w-full items-center justify-between px-4">
              <nav
                id="navbarDestop"
                className="navbar border-body-color/50 static right-0 z-30 w-auto rounded border-[.5px] border-none !bg-transparent p-0 px-6 opacity-100 duration-300"
              >
                <ul className="flex space-x-7">
                  {menuData.filter((menuItem) => (menuItem.showMainMenu ?? true) && (menuItem.showDesktopNav ?? true)).map((menuItem, index) => (
                    <li key={index} className={`group relative`}>
                      {menuItem.path && (
                        <Link
                          href={menuItem.path}
                          className={`mr-0 inline-flex truncate px-0 py-6 text-base ${
                            menuItem.id === activeMenuId
                              ? "text-dark font-semibold underline"
                              : "text-primary hover:text-dark font-light"
                          }`}
                        >
                          {menuItem.htmlTitle
                            ? menuItem.htmlTitle
                            : menuItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div
            className="flex w-[30vw] items-center justify-end p-2 pr-[4vw]"
            aria-label="Social Media Links"
          >
            {socialIcons.map((icon, index) => (
              <SocialIcon
                key={index}
                icon={icon.icon}
                size={icon.size}
                href={icon.href}
                label={icon.label}
              />
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
