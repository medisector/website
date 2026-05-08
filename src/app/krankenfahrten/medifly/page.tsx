import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "MediFly",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="urlaub" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-medifly.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-medifly.png"
      />
      <PageTitle title="Ihre Reise - komplett organisiert mit MediFly" />
      <PageText>
        Sind Sie alleine? Möchten Sie mal richtig ausspannen und einen sorgenfreien betreuten Urlaub an Ihrem Lieblingsort genießen? Oder möchten Sie gerne einmal etwas anderes sehen,
        neue Eindrücke gewinnen, für eine Weile den Alltag hinter sich lassen und neue Kraft schöpfen? Dann geben Sie uns einfach Bescheid.
      </PageText>
      <PageText>
        Wohin Sie auch reisen möchten, wir planen Ihre Rundum-Sorglos-Ferien für Sie komplett.
        Von der Abfahrt an Ihrer Haustür bis zur sicheren Rückreise in Ihr Zuhause begleiten wir Sie
        und sorgen, ganz nach Ihrem Gesundheitszustand, für Ihre medizinische Sicherheit.
      </PageText>
      <PageText>
        Schauen Sie sich auch gerne unsere bereits ausgearbeiteten Reise-Vorschläge an:
      </PageText>
      <PageText>
        <a
          href="/images/finca/medisector-betreute-reise-castell-son-claret-und-st-regis-flyer.pdf"
          download
          className="font-bold italic underline"
        >
          Hier können Sie per Klick unsere Reise-Vorschläge downloaden.
        </a>
        <br />
        <a
          href="/images/finca/medisector-betreute-reise-finca-la-vita-broschuere-g.pdf"
          download
          className="font-bold italic underline"
        >
          Hier können Sie per Klick alle Informationen zur Finca La Vita downloaden.
        </a>
      </PageText>
    </>
  );
};

export default Page;