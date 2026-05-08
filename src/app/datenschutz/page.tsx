import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageTitle from "@/components/UI/PageTitle";
import PageText from "@/components/UI/PageText";
import InlineLink from "@/components/UI/InlineLink";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

const Datenschutz = () => {
  return (
    <>
      <PageNavigation navId="datenschutz" />

      <PageTitle title={"Datenschutzerklärung"} />
      <PageText>
        Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie gemäß den gesetzlichen Vorgaben, insbesondere der Datenschutz-Grundverordnung (DSGVO), darüber, welche personenbezogenen Daten bei der Nutzung unserer
        Website erhoben werden und wie wir diese verarbeiten.
      </PageText>
      <PageText leadingText="1. Verantwortlicher">
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
      </PageText>
      <PageText>
        MediSector Ana Maria Frühauf<br />
        Thomas-Eßer-Straße 86<br />
        53879 Euskirchen<br />
        Deutschland
      </PageText>
      <PageText>
        Telefon: 02251 / 779 40 60<br />
        E-Mail: info@medi-sector.de
      </PageText>
      <PageText leadingText="2. Datenschutzbeauftragte">
        Unsere Datenschutzbeauftragte ist:
      </PageText>
      <PageText>
        Sidney Frühauf<br />
        Thomas-Eßer-Straße 86<br />
        53879 Euskirchen<br />
        E-Mail: sidney.fruehauf@medi-sector.de
      </PageText>
      <PageText>
        Sie können sich jederzeit mit Fragen oder Anliegen zum Datenschutz direkt an unsere Datenschutzbeauftragte wenden.
      </PageText>

      <PageText leadingText="3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der Verwendung">
        <span className="font-medium">a) Beim Besuch der Website</span><br />
        Beim Aufrufen unserer Website werden durch den Browser Ihres Endgerätes automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in sogenannten Logfiles gespeichert.<br />
      </PageText>
      <PageText>
        <span className="font-medium">Erfasst werden insbesondere:</span><br />
        - IP-Adresse des anfragenden Endgerätes<br />
        - Datum und Uhrzeit des Zugriffs<br />
        - Name und URL der abgerufenen Datei<br />
        - Website, von der aus der Zugriff erfolgt (Referrer-URL)<br />
        - verwendeter Browser und ggf. das Betriebssystem Ihres Endgerätes
      </PageText>
      <PageText>
        <span className="font-medium">Die Verarbeitung dieser Daten erfolgt zu folgenden Zwecken:</span><br />
        - Gewährleistung eines reibungslosen Verbindungsaufbaus<br />
        - Gewährleistung einer komfortablen Nutzung der Website<br />
        - Auswertung der Systemsicherheit und -stabilität<br />
        - administrative Zwecke
      </PageText>
      <PageText>
        Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
      </PageText>
      <PageText>
        <span className="font-medium">b) Kontaktaufnahme</span><br />
        Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über die angegebenen Kontaktmöglichkeiten (Telefon, E-Mail oder Kontaktformular) Kontakt aufzunehmen.
      </PageText>
      <PageText>
        Dabei werden die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Anliegen) gespeichert, um Ihre Anfrage zu bearbeiten.
      </PageText>
      <PageText>
        <span className="font-medium">Rechtsgrundlage der Datenverarbeitung</span>:<br />
        - Art. 6 Abs. 1 lit. b DSGVO bei Anfragen zur Vertragsanbahnung<br />
        - Art. 6 Abs. 1 lit. f DSGVO bei sonstigen Anfragen
      </PageText>
      <PageText>
        Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
      </PageText>

      <PageText leadingText="4. Weitergabe von Daten">
        Eine Übermittlung Ihrer persönlichen Daten an Dritte findet grundsätzlich nicht statt, außer:<br />
        - Sie haben Ihre ausdrückliche Einwilligung erteilt (Art. 6 Abs. 1 lit. a DSGVO)<br />
        - die Weitergabe ist zur Vertragserfüllung erforderlich (Art. 6 Abs. 1 lit. b DSGVO)<br />
        - es besteht eine gesetzliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)<br />
        Eine Übermittlung in Drittstaaten erfolgt nicht.
      </PageText>

      <PageText leadingText="5. Cookies">
        Unsere Website verwendet Cookies, kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.<br />
        Wir verwenden:<br />
        technisch notwendige Cookies, um den Betrieb der Website sicherzustellen<br />
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.<br />
        Weitere Cookies (z. B. Analyse- oder Marketing-Cookies) werden nur nach Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO eingesetzt.
      </PageText>

      <PageText leadingText="6. Ihre Rechte als betroffene Person">
        Sie haben das Recht:<br />
        - gemäß Art. 15 DSGVO Auskunft über Ihre verarbeiteten personenbezogenen Daten zu verlangen<br />
        - gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger Daten zu verlangen<br />
        - gemäß Art. 17 DSGVO die Löschung Ihrer gespeicherten personenbezogenen Daten zu verlangen<br />
        - gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung zu verlangen<br />
        - gemäß Art. 20 DSGVO Ihre Daten in einem strukturierten, gängigen Format zu erhalten<br />
        - gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung einzulegen<br />
        - gemäß Art. 7 Abs. 3 DSGVO eine erteilte Einwilligung jederzeit zu widerrufen<br />
        Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte Datenschutzbeauftragte.
      </PageText>

      <PageText leadingText="7. Beschwerderecht bei der Aufsichtsbehörde">
        Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist insbesondere:<br />
        Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)
      </PageText>

      <PageText leadingText="8. Datensicherheit">
        Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen Manipulationen, Verlust, Zerstörung oder unbefugten Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
      </PageText>

      <PageText leadingText="9. Aktualität und Änderung dieser Datenschutzerklärung">
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026.<br />
        Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann eine Anpassung dieser Datenschutzerklärung erforderlich werden. Die Datenschutzerklärung wird nochmals angepasst, sobald die Seite online ist.
      </PageText>
    </>
  );
};

export default Datenschutz;