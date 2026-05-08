import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Kurfahrten",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-kurfahrten.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-kurfahrten.png"
      />
      <PageTitle title="Kur- und Rehafahrten im In- und Ausland" />
      <PageText>
        Zur Vorsorge und Erhaltung Ihrer Gesundheit dient eine Kur oft präventiv dazu, den Ausbruch
        von Krankheiten zu verhindern oder bestehende Beschwerden zu lindern. Risikofaktoren können reduziert werden und der allgemeine Gesundheitszustand kann gestärkt werden. Wir helfen Ihnen sehr gerne bei der Beantragung Ihrer Kur. Wir arbeiten mit allen Krankenkassen zusammen, sowohl mit den gesetzlichen als auch mit den privaten.
        Unser Personal wurde auf alle Eventualitäten während der Fahrt gezielt geschult und befördert Sie mit fachlicher Qualifikation und Herz sicher ans Ziel. Dabei spielt die Entfernung keine Rolle.
      </PageText>
    </>
  );
};

export default Page;