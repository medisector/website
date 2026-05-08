import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Bedarfsgerechte Umbauten für Ihr Zuhause",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-umbauten.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-umbauten.png"
      />
      <PageTitle title='Weil wir wissen, was „Zuhause sein“ bedeutet' />
      <PageText>
        Mit unseren Umbaumaßnahmen zur Anpassung von Wohnräumen können wir Menschen mit
        Bewegungseinschränkungen ein selbstständiges und sicheres Leben im eigenen Zuhause ermöglichen. Diese Umbauten können wir sowohl im Innen- als auch im Außenbereich vornehmen. Oft hilft bereits die Installation eines Treppenlifts oder eine Treppensteighilfe. Aber
        auch Umbauten der Badezimmer, eine rollstuhlgerechte Anpassung von Bodenbelägen oder
        verbreiterte Türen sind oft notwendig und hilfreich.
      </PageText>
      <PageText className="font-bold">
        Bei der Finanzierung können wir Sie durch eine Antragstellung bei der Pflegekasse unterstützen, es gibt verschiedene Fördermöglichkeiten.
      </PageText>
    </>
  );
};

export default Page;