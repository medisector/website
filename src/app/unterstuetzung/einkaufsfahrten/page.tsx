import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Einkaufsfahrten für Senioren",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-einkaufsfahrten.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-einkaufsfahrten.png"
      />
      <PageTitle title="Wir nehmen Sie auch bei Ihren Einkäufen gerne an die Hand" />
      <PageText>
        Einkäufe können stressig sein, das wissen wir. Aber sie sind notwendig. Muss man zusätzlich
        mit körperlichen Einschränkungen zurechtkommen, ist man oft auf Unterstützung angewiesen. Ab Pflegegrad 1 übernimmt Ihre Pflegekasse einen monatlichen Entlastungsbeitrag, den
        Sie für unterstützende Leistungen beim Einkaufen einsetzen können. Wir helfen Ihnen bei
        der Beantragung.
      </PageText>
      <PageText className="font-bold">
        Wir nehmen uns sehr gerne Zeit für Sie.
      </PageText>
    </>
  );
};

export default Page;