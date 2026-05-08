import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Das sagen unser Kunden",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="ueber_uns" />
      <SimpleHero
        alt="Meinungen"
        src="/images/bilder/destop/medisector-kundenbewertung.png" // TODO: Missing image‚
        srcMobile="/images/bilder/mobil/medisector-mobil-kundenbewertung.png"
      />
      <PageTitle title="Weil Vertrauen der erste Schritt ist" />
      <PageText leadingText="Lena O">
        ch bin (WBL) Wohnbereichsleitung im Seniorenzentrum Haus Otterbach Bad Münstereifel
        und wir kooperieren mit dem medizinischen Krankentransfer MediSector. Noch nie haben wir
        ein so zuverlässiges Unternehmen wie dieses kennen und schätzen gelernt.
        Mit vollem Vertrauen und einem guten Gefühl geben wir unsere Bewohnerinnen und Bewohner in die Obhut von MediSector.
        <br />
        Es ist eine immense Arbeitserleichterung für uns, mit diesem Unternehmen zusammenarbeiten zu können, da wir uns jederzeit und vollumfänglich auf das ganze Team verlassen können. Für die tolle Zusammenarbeit bedanke ich mich / wir uns ganz herzlich, insbesondere
        bei Frau Frühauf, die zu hundert Prozent hinter ihrem Team steht. Danke!
      </PageText>
      <PageText leadingText="Svetlana">
        Ein Unternehmen mit Herz. Immer pünktlich zuverlässig und super freundlich. Ein Unternehmen, das man immer empfehlen kann
      </PageText>
      <PageText leadingText="Stroppolo">
        Es gibt gar nicht viel zu sagen - einfach top - Pünktlichkeit sehr gut - Kommunikation super
        persönlich - sehr sehr nettes Team - tolle Leute!
      </PageText>
      <PageText leadingText="R. Zastrow">
        Ich bedanke mich bei Frau Frühauf und ihrem Team für fast ein Jahr sehr hohe Zuverlässigkeit bei allen Fahrten. Im Rückblick merke ich, wie viel leichter und angenehmer dadurch alles war.
      </PageText>
      <PageText leadingText="F. Münch">
        Sehr geehrte Frau Frühauf, hiermit möchte ich mich für die wöchentlichen Fahrten zur Physiotherapie und die Hausarztbesuche bedanken. Insbesondere für die Einkaufsfahrten in der
        momentanen Corona-Misere. Ihr Personal ist jung, freundlich, hilfsbereit und kontaktfreudig!
        Ihre Firma und Ihre Dienstleistungen kann man bestens weiterempfehlen.
      </PageText>
    </>
  );
};

export default Page;