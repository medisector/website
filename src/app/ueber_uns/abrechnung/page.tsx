import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Abrechnung mit allen Kassen",
};

const UeberUns_Abrechnung = () => {
  return (
    <>
      <PageNavigation navId="ueber_uns" />
      <Hero
        images={[
          {
            src: "/images/bilder/destop/medisector-kassenabrechnung.png",
            srcMobile: "/images/bilder/mobil/medisector-mobil-kassenabrechnung.png",
            alt: "Abrechnung"
          }
        ]}
      />
      <PageTitle title="Hilfe bei Krankenkassen und Behörden" />
      <PageText>
        Wir unterstützen Patienten aktiv beim Ausfüllen von Anträgen, begleiten Familienangehörige, und sind auch persönlich bei Terminen mit Behörden dabei. Wir übernehmen die Vorbereitung und Einreichung der Anträge und lassen niemanden mit bürokratischen Hürden allein.
      </PageText>
      <PageText leadingText="Abrechnung & Kostenübernahme">
        Wir rechnen mit allen gesetzlichen Krankenkassen sowie privaten Krankenkassen ab. Lassen
        Sie sich von uns beraten, wir unterstützen Sie auch bei der Klärung der Kostenübernahme.
      </PageText>
    </>
  );
};

export default UeberUns_Abrechnung;
