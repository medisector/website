import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Seniorenfahrten",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-seniorenfahrten.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-seniorenfahrten.png"
      />
      <PageTitle title="Sie freuen sich auf eine Einladung?" />
      <PageText>
        Freunde haben Sie auf einen schönen Nachmittag eingeladen? Oder Sie möchten im Frühjahr einen schönen Park besuchen und den Duft der ersten Blüten einatmen? Aber wie soll
        das gehen? Alleine werden Sie den Weg aufgrund von körperlichen Beeinträchtigungen
        nicht mehr bewältigen können. Aber Sie brauchen nicht darauf zu verzichten! Ab Pflegegrad
        1 übernimmt Ihre Pflegekasse einen monatlichen Entlastungsbeitrag, den Sie für begleitete
        Seniorenfahrten einsetzen können. Wir helfen Ihnen bei der Beantragung.
      </PageText>
      <PageText className="font-bold">
        Wir nehmen uns sehr gerne Zeit für Sie.
      </PageText>
    </>
  );
};

export default Page;