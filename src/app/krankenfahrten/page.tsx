import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Krankenfahrten",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-krankentransfer.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-krankentransfer.png"
      />
      <PageTitle title="Medizinischer Krankentransfer mit Herz" />
      <PageText>
        Wir befördern Sie entsprechend Ihres Gesundheitszustandes. Sie sollen sich bei uns wohl
        und gut aufgehoben fühlen. Unsere Mitarbeiter sorgen und kümmern sich um Sie und versuchen, Ihnen Ihre Ängste zu nehmen. Eine vertrauensvolle und fachkundige Betreuung hat für
        uns oberste Priorität, ebenso wie Ihre Sicherheit!
      </PageText>
      <PageText leadingText="Medizinische Krankenfahrten im In- und Ausland">
        Mit hochausgestatteten Fahrzeugen bringen wir Sie, begleitet von geschultem Personal, sicher zu Ihrem Zielort; Ihren Bedürfnissen entsprechend auch im Rollstuhl, liegend oder im
        Tragestuhl.
      </PageText>
      <PageText leadingText="Medizinisches Fachpersonal">
        Unser Team steht mit geschultem Fachpersonal, Krankenschwestern, medizinischen Fachangestellten und Rettungsdienstpersonal für Sie bereit.
      </PageText>
      <PageText leadingText="Lückenlose Terminierung ohne Wartezeit">
        Wir befördern Sie zuverlässig, pünktlich und Ihren Wünschen entsprechend.
      </PageText>
      <PageText leadingText="Flughafentransfer, MediFly und Medizinische Urlaubsbegleitung">
        Zur Gesundheit und zum Wohlbefinden gehören auch Auszeiten. Schauen Sie sich unter den
        nebenstehenden Links: <a href="/krankenfahrten/flughafentransfer" className="underline">Flughafentransfer</a> | <a href="/krankenfahrten/medifly" className="underline">MediFly</a> | <a href="/krankenfahrten/urlaubsbegleitung" className="underline">Medizinische Urlaubsbegleitung</a> | <a href="/krankenfahrten/finca" className="underline">Finca La Vita - betreuter Seniorenurlaub</a> unsere
        weiteren Angebote an.
      </PageText>
    </>
  );
};

export default Page;