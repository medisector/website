import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";
import InlineLink from "@/components/UI/InlineLink";

export const metadata: Metadata = {
  title: "Celina",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="ehrenamt" />
      <SimpleHero
        alt="Ehrenamt"
        src="/images/bilder/destop/medisector-ehrenamt-celina.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-celina.png"
      />
      <PageTitle title="Helft Celina | Solidarische Aktion für eine Familie" />
      <PageText>
        Im Rahmen unseres ehrenamtlichen Engagements hat MediSector eine solidarische Hilfsaktion für die Familie von Celina aus dem Euskirchener Stadtteil Großbüllesheim begleitet. Die
        Familie befand sich zu diesem Zeitpunkt in einer außergewöhnlich belastenden Lebenssituation, ausgelöst durch eine schwere Erkrankung eines Kindes, die den Alltag in nahezu allen
        Bereichen überschattete.
      </PageText>
      <PageText>
        Celina war schwer erkrankt und auf eine intensive medizinische Behandlung angewiesen. Für
        die Familie bedeutete dies nicht nur große emotionale Sorgen, sondern auch eine enorme organisatorische und finanzielle Belastung. Arzt- und Behandlungstermine, medizinische Anforderungen, die Sorge um Stabilität und Sicherheit im Alltag sowie die gleichzeitige Verantwortung für das familiäre Leben führten die Angehörigen an die Grenzen ihrer Belastbarkeit.
      </PageText>

      <PageText>
        In dieser Situation wurde deutlich, dass Unterstützung weit über medizinische Leistungen
        hinaus notwendig war. Es ging um Entlastung, Orientierung, konkrete Hilfe – und darum,
        nicht alleine zu bleiben. MediSector hat die Familie daher im Rahmen der Aktion „Helft Celina“
        ehrenamtlich begleitet, Hilfsmaßnahmen koordiniert und als verlässlicher Ansprechpartner
        zur Seite gestanden.
      </PageText>

      <PageText>
        Unser Ziel war es, in einer akuten Ausnahmesituation Halt zu geben, Wege zu ebnen und die
        Familie dort zu unterstützen, wo Unterstützung dringend gebraucht wurde. Dabei standen
        Menschlichkeit, Diskretion und Verlässlichkeit stets im Vordergrund. Die Aktion war geprägt
        von Solidarität, Mitgefühl und dem festen Willen, Verantwortung zu übernehmen, wenn das
        Leben plötzlich aus dem Gleichgewicht gerät.
      </PageText>

      <PageText>
        Dieses Engagement ist Ausdruck unseres Selbstverständnisses: Menschen nicht nur professionell zu begleiten, sondern auch dann da zu sein, wenn Hilfe über das Erwartbare hinaus
        notwendig wird.
      </PageText>

      <InlineLink text={`Hier ein kleiner Einblick in die Pressemeldungen zum Projekt „Helft Celina"`} path={"/images/zeitungsberichte.pdf"} target={"_blank"} />
      <p className="text-sm text-gray-500 mt-2 mb-8 text-left">
        © Zeitung Kreis Euskirchen
        © Kölner Stadt-Anzeiger
        © Kölnische Rundschau
      </p>
    </>
  );
};

export default Page;