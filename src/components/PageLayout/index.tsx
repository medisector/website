"use client";
import { usePathname } from "next/navigation";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useEffect, useState } from "react";
import ContactButton from "@/components/UI/ContactButton";
import Footer from "@/components/Footer";
import menuData from "@/components/Header/menuData";
import { Menu } from "@/types/menu";

function findMenuItemByPath(
  items: Menu[],
  pathname: string
): Menu | undefined {
  for (const item of items) {
    if (item.path === pathname) return item;

    if (item.submenu) {
      const found = findMenuItemByPath(item.submenu, pathname);
      if (found) return found;
    }
  }
}


export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname?.();
  const rootPaths = ["/", ""];
  const isRoot = rootPaths.includes(pathname);
  const isLargeScreen = useBreakpoint("lg");
  const [mounted, setMounted] = useState(false);

  const activeMenuItem = findMenuItemByPath(menuData, pathname);

  const hideIcons = activeMenuItem?.hideLayoutIcons ?? false;
  const onlyRollstuhl = activeMenuItem?.layoutIcons === "rollstuhl";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Normale Seite */}
      {mounted && !isLargeScreen && (
        <div>
          <section className="bg-footer min-h-[96vh] p-6 pt-37">
            {children}
            <ContactButton />
          </section>
          <Footer />
        </div>
      )}
      {mounted && isLargeScreen && !isRoot && (
        <section className="relative h-screen overflow-hidden">
          <div className="h-[80vh] w-[70vw] bg-[url(/images/medisector/bg2.png)] bg-cover bg-no-repeat"></div>
          <div className="bg-footer h-[15vh] w-full border-t-4 border-white"></div>
          <div className="fixed inset-0 top-[13vh] left-[7vw] h-full w-full bg-[url(/images/medisector/overlay.svg)] bg-cover bg-no-repeat"></div>
          <div className={""}>
            {!hideIcons && (
              <>
                <img
                  src={"/images/medisector/pictogramme/rollstuhl.svg"}
                  alt={"Rollstuhl"}
                  width={"80px"}
                  className={`absolute left-[15vw] ${onlyRollstuhl ? "bottom-[25vh]" : "bottom-[35vh]"}`}
                />
                {!onlyRollstuhl && (
                  <>
                    <img
                      src={"/images/medisector/pictogramme/tragestuhl.svg"}
                      alt={"Tragestuhl"}
                      width={"80px"}
                      className={"absolute bottom-[25vh] left-[14vw]"}
                    />
                    <img
                      src={"/images/medisector/pictogramme/liege.svg"}
                      alt={"Liege"}
                      width={"80px"}
                      className={"absolute bottom-[15vh] left-[13vw]"}
                    />
                  </>
                )}
              </>
            )}
          </div>
          <div
            className="absolute top-[17vh] left-[23vw] h-[80vh] max-w-[43vw] overflow-auto pr-1 pb-10"
            id="page-content"
          >
            {children}
          </div>
          <Footer />
        </section>
      )}
      {/* Startseite */}
      {mounted && isLargeScreen && isRoot && (
        <section>
          {children}
          <Footer />
        </section>
      )}
    </>
  );
}
