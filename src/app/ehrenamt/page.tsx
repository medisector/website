import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Ehrenamt",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="ehrenamt" />
      <SimpleHero
        alt="Ehrenamt"
        src="/images/bilder/destop/medisector-ehrenamt.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-ehrenamt.png"
      />
      <PageTitle title="Unser Ehrenamt - Engagement mit Herz" />
      <PageText>
        Helfen endet für uns nicht dort, wo Verträge oder Leistungen aufhören. Als Unternehmen,
        das täglich mit Menschen in herausfordernden Lebenssituationen arbeitet, wissen wir, wie
        wichtig Unterstützung gerade dann ist, wenn sie nicht selbstverständlich ist. Deshalb engagieren wir uns regelmäßig und aus voller Überzeugung auch ehrenamtlich.
      </PageText>
      <PageText>
        Ob in akuten Krisensituationen, bei familiären Schicksalen oder bei Projekten, die Menschen
        in Not dringend entlasten – wir stehen bereit, wenn Hilfe schnell, unbürokratisch und mit
        Herz gebraucht wird. Ein Beispiel dafür ist unsere Beteiligung an der Aktion <b>„Helft Celina“</b>,
        einer Hilfsinitiative für eine schwer belastete Familie aus dem Raum Euskirchen. In dieser Situation haben wir koordiniert, begleitet und dort unterstützt, wo es im Alltag nicht mehr alleine ging.
      </PageText>
      <PageText>
        Solche Einsätze gehören für uns zu unserem Selbstverständnis. Wenn Menschen in Not geraten, möchten wir nicht wegsehen, sondern aktiv Verantwortung übernehmen. Unser Ehrenamt ist Ausdruck unserer Haltung: füreinander da sein, Solidarität leben und ein Stück Stabilität schaffen, wenn das Leben aus dem Gleichgewicht gerät.
      </PageText>
      <PageText className="font-bold">
        MediSector – Hilfe, die weitergeht, als man erwartet. Mit Herz. Immer.
      </PageText>
    </>
  );
};

export default Page;