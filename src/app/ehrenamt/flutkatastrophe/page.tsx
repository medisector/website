import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Flutkatastrophe in Euskirchen | 14. Juli 2021",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="ehrenamt" />
      <SimpleHero
        alt="Ehrenamt"
        src="/images/bilder/destop/medisector-flutrettung.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-flutrettung.png"
      />
      <PageTitle title="Einsatz während der Flutkatastrophe 2021 – Hilfe, die keine Pause kennt" />
      <PageText>
        Die Flutkatastrophe vom 14. Juli 2021 hat Euskirchen und die gesamte Region schwer getroffen. In diesen Tagen und Wochen standen unzählige Menschen plötzlich vor existenziellen Herausforderungen – ohne Strom, ohne Sicherheit, ohne Orientierung. Für uns war sofort
        klar: Jetzt zählt jeder Handgriff, jede Stunde und jede helfende Person.
      </PageText>
      <PageText>
        MediSector war von Beginn an <b>ununterbrochen im Einsatz</b>, um Betroffene zu unterstützen.
        Wir halfen bei Evakuierungen, organisierten Transporte aus überfluteten Wohngebieten,
        brachten Menschen in sichere Unterkünfte, kümmerten uns um medizinische Bedürfnisse,
        begleiteten Angehörige und standen dort bereit, wo Hilfe dringend und ohne Verzögerung gebraucht wurde.
      </PageText>
      <PageText>
        Viele der Einsätze waren herausfordernd – körperlich wie emotional. Doch in solchen Momenten zeigt sich, was Zusammenhalt bedeutet. Für uns war es selbstverständlich, alles zu
        geben. Nicht aus Pflicht, sondern aus Menschlichkeit.
      </PageText>
      <PageText>
        Die Flut hat Spuren hinterlassen. Aber sie hat auch gezeigt, wie stark diese Region ist – und
        wie wichtig es ist, in Ausnahmesituationen füreinander da zu sein. Der Einsatz von MediSector während dieser Katastrophe bleibt für uns ein prägender Moment unseres Ehrenamts:
        ein Einsatz, der uns daran erinnert, warum wir tun, was wir tun – Menschen helfen, wenn sie uns am
        meisten brauchen.
      </PageText>
      <PageText className="font-bold">
        MediSector – für die Menschen da, in jeder Lage. Mit Herz. Ohne Zögern.
      </PageText>
    </>
  );
};

export default Page;