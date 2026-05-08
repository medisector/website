import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageImage from "@/components/UI/PageImage";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Aktuelles",
};

const UeberUns_Aktuelles = () => {
  return (
    <>
      <PageNavigation navId="ueber_uns" />
      <SimpleHero
        alt="Aktuelles"
        src="/images/bilder/destop/medisector-aktuelles.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-aktuelles.png"
      />
      <h1 className="mt-5 mb-2 text-xl font-medium text-black">
        Seit dem, 1. August 2025<br />
        begrüßen wir Sie in unseren neuen Geschäftsräumen
      </h1>
      <PageText>
        <span className="font-bold mb-2">
          MediSector<br />
          Ana Maria Frühauf<br />
          Sidney Frühauf
        </span>
      </PageText>
      <PageText>
        Office Park Euskirchen<br />
        Thomas-Eßer-Straße 86<br />
        53879 Euskirchen
      </PageText>
    </>
  );
};

export default UeberUns_Aktuelles;
