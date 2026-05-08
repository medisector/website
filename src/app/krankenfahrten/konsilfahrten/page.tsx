import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Konsilfahrten",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-konsilfahrten.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-konsilfahrten.png"
      />
      <PageTitle title="Konsilfahrten" />
      <PageText>
        Konsilfahrten zu spezialisierten Fachärzten oder medizinischen Einrichtungen leisten einen
        entscheidenden Beitrag zur schnellen und zielgerichteten Diagnostik. Durch eine zeitnahe
        fachärztliche Beurteilung kann die weitere Behandlung effizient abgestimmt und unnötige
        Verzögerungen vermieden werden.
      </PageText>
      <PageText>
        Auch wenn diese Fahrten für Patientinnen und Patienten mit einer erhöhten Belastung verbunden sein können, stellen sie in vielen Fällen die sinnvollste und zugleich wirtschaftlichste
        medizinische Vorgehensweise dar. MediSector übernimmt Konsilfahrten regional, überregional sowie ins Ausland – stets verantwortungsvoll, sicher und mit umfassender Betreuung.
      </PageText>
      <PageText>
        Wir begleiten Ihre Patientinnen und Patienten mit medizinischer Fachkompetenz und sorgen
        für einen reibungslosen Ablauf im Sinne einer nahtlosen Versorgung. MediSector – Ihr Partner für Konsiltransporte mit Herz.
      </PageText>
    </>
  );
};

export default Page;