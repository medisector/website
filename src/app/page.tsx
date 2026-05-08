import { Metadata } from "next";
import PageNavigation from "@/components/PageNavigation";
import Hero from "@/components/Hero";
import menuData from "@/components/Header/menuData";
import { ReactNode } from "react";
import HomeButton from "@/components/Common/HomeButton";

export const metadata: Metadata = {
  title: "MediSector Krankenfahrten Euskirchen",
};

export default function Home() {
  const navItems = menuData.find((item) => item.id === "home")?.submenu || [];

  return (
    <>
      <section className="hidden lg:block">
        <div className="h-[80vh] w-[70%] bg-[url(/images/medisector/bg.jpeg)] bg-cover bg-no-repeat"></div>
        <div className="bg-footer h-[15vh] w-full border-t-4 border-white">
          <h1 className="text-primary absolute bottom-1/11 left-1/20 text-5xl leading-[5.9vh]">
            Menschen zu helfen, dafür ein Lächeln
            <br />
            zu bekommen, ist unsere Motivation
          </h1>
        </div>
      </section>
      <section className="block lg:hidden">
        <Hero
          images={[
            { src: "images/medisector/bg.jpeg", alt: "Startseite Bild" },
          ]}
        />
        <h1 className="text-primary relative -mt-1 mb-6 text-lg leading-[3.2vh] text-shadow-md">
          Menschen zu helfen, dafür ein Lächeln
          <br />
          zu bekommen, ist unsere Motivation
        </h1>
        <div className="mt-2 grid w-full grid-cols-3 gap-3">
          {navItems.filter((item) => item.id !== "wunschfahrt").map((item, index) => {
            const extraClass = index % 2 == 0 ? 'bg-primary text-white' : '';
            return (
              <HomeButton
                key={index}
                text={item.homeHtmlTitle ?? item.title}
                href={item.path}
                className={"h-20 " + extraClass + " " + item.className}
              />
            );
          })}
          <HomeButton
            text="Unsere umfassenden Leistungen"
            onClickId={"navbarToggler"}
            className="col-span-3 p-4"
          />
        </div>
      </section>
      <PageNavigation navId="home" descriptionMenu={true} isHomePage={true} />
    </>
  );
}
