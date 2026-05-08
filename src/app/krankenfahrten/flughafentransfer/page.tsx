import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Flughafentransfer",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-flughafentransfer.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-flughafentransfer.png"
      />
      <PageTitle title="Flughafentransfer mit MediSector" />
      <PageText>
        Ein Beinbruch reicht und Sie sind evtl. schon auf Unterstützung angewiesen. Wir bieten einen pünktlichen Flughafentransfer für mobilitätseingeschränkte Personen und Senioren an.
        Egal, ob Sie zum Flughafen gebracht werden müssen oder eine Abholung benötigen – wir stehen Ihnen zur Verfügung. Damit vermeiden Sie die Unannehmlichkeiten eines nicht behindertengerecht ausgestatteten Beförderungsmittels und können Ihre Beförderung bequem und
        termingerecht genießen.
      </PageText>
      <PageText leadingText="Unsere Leistungen im Überblick">
        <ul className="list-disc pl-5">
          <li>Exklusiver Komfort</li>
          <li>Professionelle Fahrer*innen mit Empathie</li>
          <li>Flexible Terminplanung</li>
          <li>Diskretion und Privatsphäre</li>
          <li>Auf Wunsch medizinische Begleitung bis ins Ausland</li>
          <li>Rundum-Sorglos-Service</li>
        </ul>
      </PageText>
    </>
  );
};

export default Page;