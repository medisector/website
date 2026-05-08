import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Urlaubsbegleitung",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="urlaub" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-medizinische-urlaubsbegleitung.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-medizinische-urlaubsbegleitung.png"
      />
      <PageTitle title="Auf entspannte Reisen brauchen Sie nicht zu verzichten" />
      <PageText>
        Ist es Ihnen aufgrund gesundheitlicher Einschränkungen zurzeit nicht möglich, alleine zu
        verreisen? Gerne begleiten wir Sie verantwortungsbewusst und professionell! Mit MediSector
        oder MediFly können Sie barrierefrei Ihre Wunschziele erreichen, ob im Inland oder im Ausland. Buchen Sie einfach Ihre nächste Tour bei uns! Für eine problemlose An- und Abreise mit
        qualifizierter Betreuung stehen wir für Sie bereit - auf Wunsch auch mit medizinischer Pflege
        rund um die Uhr während der gesamten Reise. Wir helfen Ihnen gerne bei der Antragstellung
        für eine finanzielle Unterstützung durch die Pflegekassen. Rufen Sie uns einfach an, wir freuen
        uns auf Sie. Schauen Sie sich auch gerne unsere bereits ausgearbeiteten Reisevorschläge an:
      </PageText>
      <PageText>
        <a
          href="/images/finca/medisector-betreute-reise-castell-son-claret-und-st-regis-flyer.pdf"
          download
          className="font-bold italic underline"
        >
          Hier können Sie per Klick unsere Reisevorschläge downloaden.
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