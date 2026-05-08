import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Rehefahrten und Tages-Rehafahrten",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-rehafahrten.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-rehafahrten.png"
      />
      <PageTitle title="Rehafahrten und Tages-Rehafahrten" />
      <PageText>
        Eine Rehabilitationsmaßnahme ist ein wichtiger Schritt, um körperliche, psychische oder berufliche Fähigkeiten zu stabilisieren oder wiederzuerlangen. Damit Sie sich vollständig auf
        Ihre Genesung konzentrieren können, übernehmen wir für Sie die sichere und zuverlässige
        Beförderung zu Ihrer Reha-Einrichtung – im Rahmen von regelmäßigen Tages-Reha-Fahrten
        ebenso wie bei stationären Aufenthalten.
      </PageText>
      <PageText>
        Unsere Transporte werden individuell an Ihren Gesundheitszustand angepasst. Je nach Bedarf befördern wir Sie im Rollstuhl, im Tragestuhl oder in liegender Position. Unser geschultes medizinisches Fachpersonal sorgt dafür, dass Sie während der gesamten Fahrt gut betreut sind und sich sicher fühlen.
      </PageText>
      <PageText>
        Pünktlichkeit und eine lückenlose Koordination der Hin- und Rückfahrten sind für uns selbstverständlich. Auf Wunsch begleiten wir Sie nicht nur während der Fahrt, sondern bleiben
        auch während der Behandlung vor Ort an Ihrer Seite.
      </PageText>
      <PageText>
        Wir arbeiten mit allen gesetzlichen und privaten Krankenkassen zusammen und unterstützen
        Sie bei der Klärung der Kostenübernahme.
      </PageText>
      <PageText className="font-bold">MediSector – damit Rehabilitationswege sicher, verlässlich und mit Herz beginnen.</PageText>
    </>
  );
};

export default Page;