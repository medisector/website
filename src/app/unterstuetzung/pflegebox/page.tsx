import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import InlineLink from "@/components/UI/InlineLink";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Pflegebox",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-pflegebox.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-pflegebox.png"
      />
      <PageTitle title="Kostenlose Pflegehilfsmittel bereits ab Pflegegrad 1" />
      <PageText>
        Infektionsschutz und Hygiene jederzeit und überall! Lassen Sie sich Ihre hochwertigen Pflegehilfsmittel einfach und bequem nach Hause liefern. In Ihrer Pflegebox finden Sie ausschließlich
        hochwertige Produkte namhafter deutscher Hersteller. Sie haben die Wahl zwischen verschiedenen Produkten, den jeweiligen Größen und Materialien.
      </PageText>
      <PageText>
        Ab Pflegegrad 1 dürfen Sie Ihre Pflegeartikel monatlich bis zu einem Wert von 42,- EUR bestellen. Gerne beraten wir Sie bei der Auswahl Ihrer Artikel. Die Kosten werden zu 100 Prozent
        von Ihrer Krankenkasse übernommen.
      </PageText>
      <PageText className="font-bold italic underline">
        <InlineLink text="Bestellen Sie hier Ihre Pflegebox."
                    target="_blank"
                    path="https://box.pflegebox.de/box-zusammenstellen/?utm_source=1329497&utm_medium=kooperation&utm_term=leadfunnel&utm_content=medisector&utm_campaign=medisector1329497"
        />
      </PageText>
    </>
  );
};

export default Page;