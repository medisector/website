import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Fahrten zum Arzt",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-arztfahrten.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-fahrten-zum-arzt.png"
      />
      <PageTitle title="Hin- und Rückfahrten zu Ihrem Haus- oder Facharzt" />
      <PageText>
        Menschen zu helfen, dafür ein Lächeln zu bekommen, ist unsere Motivation. Für Besuche bei
        Ihrem Haus- oder Facharzt stehen wir mit Fürsorge und Fachkompetenz an Ihrer Seite. Entsprechend Ihren Bedürfnissen bringen wir Sie sicher zu Ihrer Praxis. Mit unseren hochausgestatteten Fahrzeugen können wir Ihnen auch einen sicheren Transport im Rollstuhl / Tragestuhl oder liegend garantieren.
      </PageText>
      <PageText>
        Eine lückenlose Terminierung für die Hin-und Rückfahrt ist für uns selbstverständlich. Auf
        Wunsch können Sie eine Begleitperson Ihres Vertrauens oder eine medizinische Begleitung
        (inkl. medizinischer Dokumentation) aus unserem Team für die gesamte Dauer der Fahrt und
        der Behandlung dazubuchen.
      </PageText>
      <PageText>
        Wir rechnen mit allen Krankenkassen ab. Sollten Sie allzulange auf einen Arzttermin warten
        müssen, können wir Ihnen auch hier mit der Buchung eines zeitnahen Termins helfen.
      </PageText>
    </>
  );
};

export default Page;