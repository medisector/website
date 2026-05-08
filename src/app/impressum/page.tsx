import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageTitle from "@/components/UI/PageTitle";
import PageText from "@/components/UI/PageText";
import InlineLink from "@/components/UI/InlineLink";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Impressum",
};

const Impressum = () => {
  return (
    <>
      <PageNavigation navId="impressum" />

      <PageTitle title={"Impressum"} />
      <PageText className="font-bold">
        MediSector Ana Maria Frühauf und Sidney Frühauf<br />
        Office Park Euskirchen<br />
        Thomas-Eßer-Straße 86<br />
        53879 Euskirchen<br />
      </PageText>
      <PageText leadingText="Kontakt">
        Telefon: +49 (0) 2251 779 40 60<br />
        E-Mail: info@medi-sector.de
      </PageText>
      <PageText leadingText="Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:">
        DE 326833405
      </PageText>
      <PageText leadingText="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        Ana Maria Frühauf
      </PageText>
      <PageText leadingText="EU-Streitschlichtung">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
        https://ec.europa.eu/consumers/odr.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </PageText>
      <PageText leadingText="Verbraucherstreitbeilegung/Universalschlichtungsstelle">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </PageText>
      <PageText leadingText="Website-Entwicklung / Copyright">
        A-design Elisabeth Aschke, Mechernich 2026<br />
        © Elisabeth Aschke
      </PageText>
    </>
  );
};

export default Impressum;