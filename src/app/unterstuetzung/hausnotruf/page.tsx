import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Hausnotruf",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-hausnotruf.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-hausnotruf.png"
      />
      <PageTitle title="Ein kleiner Knopf für Ihre Sicherheit" />
      <PageText>
        Mit einem Hausnotruf können Sie im Notfall selbstständig und direkt Hilfe anfordern.
        Dadurch wird Ihnen ermöglicht, dass Sie in Ihrer Wohnung leben und dennoch Sicherheit haben. Auslöser des Alarms ist üblicherweise ein tragbarer Notrufsender, kann aber auch
        ein Sensor sein, der auf Stürze reagiert.
      </PageText>
      <img src="/images/medisector/senionex.png"
           className="w-50 mt-2 mb-5" />
      <PageText>
        Senionex ist ein Notrufarmband mit Sturzerkennung, GPS-Ortung und Benachrichtigungsfunktion an Angehörige per SMS oder Telefon.
      </PageText>
      <PageText className="font-bold">
        Für beide Modelle stehen wir Ihnen zur Beratung und zur Bestellung zur Verfügung.
      </PageText>
    </>
  );
};

export default Page;