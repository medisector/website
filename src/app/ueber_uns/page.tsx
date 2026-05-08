import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageTitle from "@/components/UI/PageTitle";
import PageText from "@/components/UI/PageText";
import InlineLink from "@/components/UI/InlineLink";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Über uns",
};

const UeberUns = () => {
  return (
    <>
      <PageNavigation navId="ueber_uns" />
      <Hero
        images={[
          {
            src: "/images/bilder/destop/medisector-ana.png",
            srcMobile: "/images/bilder/mobil/medisector-mobil-ana.png",
            alt: "Ana",
          },
          {
            src: "/images/bilder/destop/medisector-sidney.png",
            srcMobile: "/images/bilder/mobil/medisector-mobil-sidney.png",
            alt: "Sidney",
          },
        ]}

        classNames="border-black border-[0.8pt]"
      />

      <PageTitle title={"Herzlich willkommen bei MediSector"} />
      <PageText leadingText="Ihr medizinischer Krankentransfer mit Herz">
        Wir sind ein junges qualifiziertes Unternehmen, das sich mit großer
        Verantwortung und sehr viel Einfühlungsvermögen auf medizinische
        Krankentransporte im Inland und ins Ausland spezialisiert hat. Aber auch
        in Ihrer gewohnten Umgebung unterstützen wir Sie fachgerecht bei Ihnen
        zu Hause.
      </PageText>
      <PageText>
        Auf einen hohen Qualitätsstandard legen wir großen Wert. Unsere Fahrten
        können nach Bedarf von medizinischem Fachpersonal, wie
        Rettungsdienstler, medizinische Fachangestellte und Krankenschwestern,
        begleitet werden. Bei uns steht Ihr Wohl an erster Stelle
      </PageText>
      <PageText leadingText="Medizinische Krankenfahrten und medizinisch begleitete Flüge">
        Wir befördern Sie entsprechend Ihres Gesundheitszustandes auch im
        Rollstuhl, im Tragestuhl oder in liegender Position. Unsere Kundinnen und Kunden
        sollen sich bei uns wohl und gut aufgehoben fühlen. Eine vertrauensvolle
        und fachkundige Betreuung hat für uns ebenso wie Ihre Sicherheit oberste
        Priorität!
      </PageText>
      <PageText leadingText="Medizinisches Fachpersonal">
        Wir verfügen über alle notwendigen Zertifikate, um Krankentransporte
        aller Art durchführen zu können. Die medizinischen Fahrten und Flüge
        werden, entsprechend Ihrem Gesundheitszustand, Ihren Bedürfnissen
        angepasst. Unsere Mitarbeiter sind auf alle Eventualitäten während des
        Transports vorbereitet und unsere Fahrzeuge sind dementsprechend
        ausgestattet. Unsere medizinische Ausstattung entspricht den
        gesetzlichen Vorgaben und ist stets aktuell.
      </PageText>
      <PageText leadingText="Unterstützung im Alltag">
        Unser Angebot zur Unterstützung im Alltag umfasst eine breite Palette
        von Dienstleistungen, die individuell auf Ihre Bedürfnisse abgestimmt
        werden. Ganz gleich, ob Sie oder Ihre Angehörigen altersbedingt,
        krankheits- oder unfallbedingt Unterstützung benötigen – wir sind für
        Sie da!
      </PageText>
      <PageText leadingText="Ehrenamt und Wunschfahrten">
        Unser Engagement, Menschen in jeder Lebenslage zu helfen, hört bei der
        fachlich medizinische Kompetenz nicht auf. Schauen Sie unter{" "}
        <InlineLink text="Ehrenamt" path="/ehrenamt" /> und{" "}
        <InlineLink text="Wunschfahrten" path="/ehrenamt/wunschfahrt" />. Pünktlichkeit
        und Zuverlässigkeit sind für uns, ebenso wie eine lückenlose
        Terminierung ohne Wartezeiten, selbstverständlich!
      </PageText>
      <PageText>
        Bei Fragen oder sehr kurzfristigen Terminen rufen Sie uns einfach an
        <b> Telefon 02251 / 779 40 60</b> Darüber hinaus sind wir per Klick auf{" "}
        <InlineLink
          text="Kontakt /
        Buchung"
          path="/kontakt"
        />{" "}
        immer für Sie da.
      </PageText>
      <PageText leadingText="Ihre Ana Maria Frühauf, Geschäftsführerin">
        Medizinische Fachangestellte (MFA), Rettungssanitäterin, Betreuungskraft
      </PageText>
      <PageText leadingText="Ihre Sidney Frühauf, B.A. Management, Geschäftsführerin">
        Datenschutzbeauftragte, Ausbildungsstelle nach IHK Kauffrau/-mann im
        Gesundheitswesen
      </PageText>
    </>
  );
};

export default UeberUns;
