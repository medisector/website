import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import SimpleHero from "@/components/UI/SimpleHero";
import InlineLink from "@/components/UI/InlineLink";
import PageTitle from "@/components/UI/PageTitle";

export const metadata: Metadata = {
  title: "24-Stunden-Betreuung",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-live-in-pflege.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-live-in-pflege.png"
      />
      <img src="/images/medisector/logo24.png" className="w-50 md:w-80 mb-4 mt-8" />
      <PageTitle title="24-Stunden-Betreuung - weil Vertrauen und Fürsorge keine Kompromisse kennen" />
      <PageText>
        <b>Wir möchten Menschen, die in einer schwierigen Lebensphase sind, verständnisvoll unterstützen und ihnen Erleichterung im Alltag verschaffen.</b>
        <div className="h-3" />
        <b>Wir möchten ihnen Kraft, Zuversicht und Würde schenken,
        denn &apos;Lachen ist zeitlos, Phantasie hat kein Alter und Träume sind für immer&apos;.</b>
        <br /><br />
        Mit diesem Zitat von Walt Disney möchten wir Ihr Herz gewinnen und mit Kompetenz für Sie
        da sein, wenn Ihr Alltag alleine nicht mehr zu meistern ist. Sie bleiben in Ihrem eigenen Zuhause,
        werden rund um die Uhr in Ihrer vertrauten Umgebung betreut und erhalten damit weitgehend Ihre Selbstbestimmung.
      </PageText>
      <PageText>
        Von der behutsamen Grundpflege über die Unterstützung im Haushalt bis hin zur liebevollen
        Alltagsbegleitung ist eine Pflegekraft Ihres Vertrauens an Ihrer Seite. Medizinische Aufgaben,
        wie Verbände anlegen oder Injektionen verabreichen, übernimmt ein ambulanter Pflegedienst oder ein Arzt.
      </PageText>
      <PageText leadingText="MediSector 24 steht für:">
        <ul className="list-disc pl-5 space-y-1">
          <li>Fester persönlicher Ansprechpartner statt anonymer Agentur</li>
          <li>Schnelle Vermittlung – oft innerhalb von 3 Tagen</li>
          <li>Kostenloses Kennenlernen passender Pflegekräfte</li>
          <li>Transparente Angebote und faire Verträge</li>
          <li>Angehörige werden entlastet, weil immer jemand vor Ort ist</li>
          <li>Mehr Lebensqualität durch dauerhafte Übernahme von Betreuung und Grundpflege</li>
          <li>Für den Notfall wird schnelle Hilfe gewährleistet</li>
        </ul>
      </PageText>
      <PageText leadingText="Unser Leistungsangebot für Sie in ihrem Zuhause:">
        <b>Grundpflege:</b>
        <br />
        Unterstützung bei der Körperpflege (Waschen, Duschen, An- und Auskleiden, Zahnpflege),
        der Ernährung (Hilfe bei der Nahrungsaufnahme, ggf. nach Diätvorgaben) und der Mobilität
        (Aufstehen, Zubettgehen, Gehen, Treppensteigen)
      </PageText>
      <PageText>
        <b>Haushaltsführung:</b>
        <br />
        Unterstützung bei allen Aufgaben im Haushalt wie z.B. Essen zubereiten, Haushaltsreinigung,
        Wäsche waschen und bügeln
      </PageText>
      <PageText>
        <b>Begleitung im Alltag:</b>
        <br />
        Unterstützung bei Arztbesuchen, begleitete Spaziergänge, gemeinsame Gesellschaftsspiele,
        Zeit für Unterhaltungen und zum Vorlesen
      </PageText>
      <PageText>
        <b>Gesellschaftliche und soziale Unterstützung:</b>
        <br />
        Aktive Förderung sozialer Kontakte gegen die Einsamkeit
      </PageText>
      <PageText>
        Nicht nur die zu pflegende Person braucht Hilfe und Unterstützung, sondern vor allem auch
        die Menschen, die unter Einsatz all ihrer Kräfte versuchen ihren Eltern oder Liebsten ein würdiges
        Leben zu ermöglichen. Wir kennen die Wünsche pflegebedürftiger Menschen und auch die der Angehörigen.
        Nach einer Bedarfsanalyse werden wir eine Pflegekraft individuell für Sie an ihre Seite stellen.
        Den größten Teil der Kosten übernimmt die Krankenkasse, Ihr Eigenanteil ist relativ gering.
        Wir helfen Ihnen bei der Beantragung und stehen mit unserem Leistungsangebot ab dem ersten Kontakt an ihrer Seite.
      </PageText>
      <PageText>
        <b>MediSector – Hilfe, die weitergeht als man erwartet. Mit Herz. Immer.</b>
      </PageText>
      <PageText>
        Bei Fragen oder sehr kurzfristigen Terminen rufen Sie uns einfach an:{" "}
        <a href="tel:022517794060" className="font-bold">
          02251 / 779 40 60
        </a>
        <br />
        Darüber hinaus sind wir per Klick auf <InlineLink text="Kontakt" path="/kontakt" /> immer für Sie da.
      </PageText>
    </>
  );
};

export default Page;
