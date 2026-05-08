"use client";

import NavItem from "@/components/PageNavigation/NavItem";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import menuData from "@/components/Header/menuData";
import useBreakpoint from "@/hooks/useBreakpoint";

export type PageNavigationProps = {
  navId: string;
  descriptionMenu?: boolean;
  topPos?: number;
  bottomPos?: number;
  isHomePage?: boolean;
};

const PageNavigation = ({
  navId,
  descriptionMenu = false,
  topPos = 14,
  bottomPos,
  isHomePage = false,
}: PageNavigationProps) => {
  const navItems = menuData.find((item) => item.id === navId)?.submenu || [];

  const [openItem, setOpenItem] = useState<number | null>(null);
  const handleToggle = (id: number) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const usePathName = usePathname();
  const isLargeScreen = useBreakpoint("lg");
  const isXLScreen = useBreakpoint("xl");
  const is2XLScreen = useBreakpoint("2xl");

  // Positionierung: Startseite am unteren Rand, Unterseiten oben
  let positionStyle: React.CSSProperties;

  if (bottomPos !== undefined || isHomePage) {
    // Navigation am unteren Rand für Startseite
    const adjustedBottomPos = bottomPos !== undefined
      ? bottomPos
      : is2XLScreen
        ? 13
        : isXLScreen
          ? 8
          : 6;
    positionStyle = { bottom: `${adjustedBottomPos}vh` };
  } else {
    // Navigation oben für Unterseiten
    const adjustedTopPos = is2XLScreen
      ? topPos + 8
      : isXLScreen
        ? topPos + 5
        : topPos;
    positionStyle = { top: `${adjustedTopPos}vh` };
  }

  return (
    <>
      {/* Desktop: fixed sidebar */}
      {navItems.length > 0 && isLargeScreen && (
        <section
          id="pageNavigation"
          className="fixed left-[67vw] w-[30vw] rounded-4xl bg-white/50 p-5 backdrop-blur-xs max-h-[85vh] overflow-y-auto"
          style={positionStyle}
        >
          {navItems.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === navItems.length - 1;

            let background: "primary" | "transparent" | "normal";
            if (descriptionMenu) {
              background = openItem === index ? "primary" : isFirst && openItem == null ? "primary" : "normal";
            } else {
              background = item.path === usePathName ? "primary" : "normal";
            }

            return (
              <NavItem
                key={index}
                title={item.htmlTitle || item.title}
                description={item.description}
                path={item.path}
                background={background}
                isOpen={openItem === index}
                onToggle={() => handleToggle(index)}
                descriptionMenu={descriptionMenu}
                isLastEntry={isLast}
                isFirstEntry={isFirst}
              />
            );
          })}
          {navId !== "kontakt" && (
            <NavItem
              title={
                !descriptionMenu ? "Wir sind für Sie da" : "Wir sind für Sie da"
              }
              path="/kontakt"
              background={"/kontakt" === usePathName ? "primary" : "transparent"}
              descriptionMenu={false}
            />
          )}
        </section>
      )}

    </>
  );
};

export default PageNavigation;
