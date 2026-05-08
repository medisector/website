import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import Carousel from "@/components/UI/Carousel";
import PageTitle from "@/components/UI/PageTitle";

export const metadata: Metadata = {
  title: "Finca La Vita - Betreuter Seniorenurlaub",
};

const desktopImages = [
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-desktop-bild-eins.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-desktop-bild-zwei.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-desktop-bild-drei.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-desktop-bild-vier.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-desktop-bild-fuenf.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-desktop-bild-sechs.png", alt: "Finca La Vita" },
];

const mobileImages = [
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-mobil-bild-eins.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-mobil-bild-zwei.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-mobil-bild-drei.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-mobil-bild-vier.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-mobil-bild-fuenf.png", alt: "Finca La Vita" },
  { src: "/images/finca/medisector-betreuter-seniorenurlaub-finca-mobil-bild-sechs.png", alt: "Finca La Vita" },
];

const Page = () => {
  return (
    <>
      <PageNavigation navId="urlaub" />
      <div className="hidden lg:block mb-8">
        <Carousel images={desktopImages} classNames="max-h-[70vh] object-cover" />
      </div>
      <div className="-mx-6 mb-4 border-b-3 border-white lg:hidden">
        <Carousel images={mobileImages} mobile={true} />
      </div>
      <PageTitle title="Finca La Vita - Begleiteter Urlaub in einer wunderschönen Finca" />
      <PageText>
        <span className="font-bold">Begleitet reisen - in Ruhe ankommen</span><br/>
        Finca La Vita ist kein Hotel und kein Pflegeheim, es ist ein persönlicher Ort für einen Urlaub
        auf Zeit, ruhig, begleitet und individuell abgestimmt. In einer wunderschönen Finca, eingebettet
        in Natur und Stille, verbringen unsere Gäste ihren Aufenthalt in kleiner Gemeinschaft.
        Maximal vier Gäste genießen hier Ruhe, Aufmerksamkeit und Zeit – ohne Hektik, ohne Verpflichtung,
        ohne Massentourismus. Aber mit persönlicher Begleitung, diskretem Service und dem guten Gefühl,
        dass jemand da ist. Hier darf Urlaub wieder leicht werden.
      </PageText>
      <PageText>
        Rufen Sie uns an – wir hören zu und gestalten alles so, dass es für Sie stimmig ist.
        <br /><br/>
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
