import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Unser Team",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="ueber_uns" />
      <SimpleHero
        alt="Unser Team"
        src="/images/bilder/destop/medisector-unser-team.png" // TODO: Missing image‚
        srcMobile="/images/bilder/mobil/medisector-mobil-unser-team.png"
      />
      <PageTitle title="Wir sehen den Menschen hinter seiner Lebensgeschichte" />
      <PageText>
        Mit Empathie, Vertrauen, Erfahrung, fachlicher Qualifikation und
        diskreter Unterstützung realisieren wir Ihren medizinischen Transport,
        unterstützen Sie im Alltag und schaffen Raum für beratende Gespräche.
        Unser fachlich hochqualifiziertes Team verfügt über alle notwendigen
        Zertifikate und steht zuverlässig für Sie bereit.
      </PageText>
      <PageText>
        Unser Leistungsspektrum, das wir in den letzten Jahren um viele
        Dienstleistungen erweitert haben, ist umfangreich und wird
        kontinuierlich weiter expandieren. Es ist uns wichtig, dass Sie sich gut
        umsorgt fühlen. Wir sind für Sie da, unabhängig von Herkunft, Lebenslage
        oder gesundheitlicher Situation.
      </PageText>
    </>
  );
};

export default Page;