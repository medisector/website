import { Menu } from "@/types/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { SocialIconProps } from "@/components/Header/SocialIcon";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const socialIcons: SocialIconProps[] = [
  {
    href: "mailto:info@medi-sector.de",
    icon: faPaperPlane,
    size: "md",
    label: "E-Mail senden",
  },
  {
    href: "https://www.facebook.com/MediSector/?locale=de_DE",
    icon: faFacebook,
    label: "Facebook",
  },
];

const menuData: Menu[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: "medizinischer_krankentransport",
        title: "Medizinischer Krankentransfer",
        path: "/krankenfahrten",
        newTab: false,
        description:
          "Medizinisch betreute Personenbeförderung im Inland und ins Ausland\n" +
          "für Erwachsene und Kinder.",
        className: "bg-primary text-white",
      },
      {
        id: "unterstuetzung",
        title: "Unterstützung im Alltag",
        path: "/unterstuetzung",
        newTab: false,
        description:
          "Bei der Bewältigung von alltäglichen Aufgaben oder pflegebedingten Anforderungen sind wir mit Herz an Ihrer Seite.",
      },
      {
        id: "24_stunden_betreuung",
        title: "24-Stunden-Betreuung",
        path: "/unterstuetzung/24-stunden-betreuung",
        newTab: false,
        description:
          "Grundpflege, Haushaltsführung, Begleitung im Alltag und soziale Unterstützung rund um die Uhr bei Ihnen zu Hause.",
      },
      {
        id: "mit_herz",
        title: "Mit Herz",
        mobileTitle: "Mit Herz",
        path: "/mit_herz",
        homeHtmlTitle: (
          <span>
            Mit{" "}
            <FontAwesomeIcon
              icon={faCirclePlay}
              className="h-5"
              style={{ color: "#C4C4C6" }}
            />{" "}
            Herz
          </span>
        ),
        htmlTitle: (
          <span>
            Mit{" "}
            <FontAwesomeIcon
              icon={faCirclePlay}
              className="h-5"
              style={{ color: "#BABBBD" }}
            />{" "}
            Herz | Video &#60; 2 min
          </span>
        ),
        newTab: false,
        description:
          "Schauen Sie unseren Imagefilm an und erfahren Sie, was uns ausmacht und was uns antreibt.",
      },
      {
        id: "beratungsstelle",
        title: "Beratungsstelle gem. § 37 Abs. 3",
        homeHtmlTitle: (
          <span>
            Beratungsstelle gem. § 37
            <br />
            Abs. 3
          </span>
        ),
        path: "/ueber_uns/beratungsstelle",
        newTab: false,
        description:
          "Durchführung von Beratungsbesuchen nach §37 Abs. 3 SGB XI bundesweit. Beratung auch per Video-Call.",
      },
      {
        id: "abrechnung",
        title: "Abrechnung mit allen Krankenkassen",
        homeHtmlTitle: (
          <span>
            Abrechnung
            <br />
            mit allen
            <br />
            Krankenkassen
          </span>
        ),
        path: "/ueber_uns/abrechnung",
        newTab: false,
        description:
          "Die Abrechnung von medizinischen Leistungen, Verordnungen, Pflege und Rezepten übernehmen wir für Sie.",
      },
      {
        id: "pflegebox",
        title: "Pflegebox",
        path: "/unterstuetzung/pflegebox",
        newTab: false,
        description:
          "Bereits ab Pflegegrad 1 erhalten Sie hochwertige Pflegehilfsmittel gratis. Wir unterstützen Sie gerne bei der Bestellung.",
      },
      {
        id: "urlaubsbegleitung",
        title: "Urlaubsbegleitung",
        path: "/krankenfahrten/urlaubsbegleitung",
        newTab: false,
        layoutIcons: "rollstuhl",
        description:
          "Auf entspannte Reisen brauchen Sie nicht zu verzichten, wir begleiten Sie verantwortungsbewusst und professionell! ",
      },
      {
        id: "flughafentransfer",
        title: "Flughafentransfer",
        path: "/krankenfahrten/flughafentransfer",
        newTab: false,
        description:
          "Mobilitätseingeschränkte Personen bringen wir professionell und pünktlich bis zum Flugzeug.",
      },
      {
        id: "medifly",
        title: "MediFly",
        path: "/krankenfahrten/medifly",
        newTab: false,
        layoutIcons: "rollstuhl",
        description:
          "Lassen Sie sich für Ihren Urlaub von unseren Reisebeispielen inspirieren - wir betreuen und begleiten Sie mit Herz. ",
      },
      {
        id: "finca_la_vita",
        title: "Finca La Vita - Begleiteter Urlaub in einer wunderschönen Finca",
        homeHtmlTitle: (
          <span>
            Finca La Vita
            <br />
            Begleiteter Urlaub
          </span>
        ),
        path: "/krankenfahrten/finca",
        newTab: false,
        layoutIcons: "rollstuhl",
        description:
          "Begleiteter Urlaub in einer wunderschönen Finca – begleitet reisen, in Ruhe ankommen.",
      },
      {
        id: "wunschfahrt",
        title: "Wunschfahrt",
        path: "/ehrenamt/wunschfahrt",
        newTab: false,
        description:
          "Wir möchten jedem von Herzen den Wunsch erfüllen, einen geliebten Ort eine letztes Mal zu besuchen.",
      },
      {
        id: "notfallreinigung",
        title: "Notfallreinigung",
        path: "/unterstuetzung/notfallreinigung",
        newTab: false,
        description:
          "Ist Ihnen krankheitsbedingt ‘alles über den Kopf gewachsen‘? Wir reinigen Ihre Wohnung kurzfristig, schnell und diskret. ",
      },
    ],
  },
  {
    id: "ueber_uns",
    title: "Über uns",
    path: "/ueber_uns",
    newTab: false,
    submenu: [
      {
        id: "ueber_uns",
        title: "Über uns",
        path: "/ueber_uns",
        newTab: false,
      },
      {
        id: "aktuelles",
        title: "Aktuelles",
        path: "/ueber_uns/aktuelles",
        newTab: false,
        hideLayoutIcons: true,
      },
      {
        id: "abrechnung",
        title: "Abrechnung mit allen Krankenkassen",
        path: "/ueber_uns/abrechnung",
        newTab: false,
        hideLayoutIcons: true,
      },
      {
        id: "beratungsstelle",
        title: "Beratungsstelle gem. § 37 Abs. 3",
        path: "/ueber_uns/beratungsstelle",
        newTab: false,
        hideLayoutIcons: true,
      },
      {
        id: "team",
        title: "Unser Team",
        path: "/ueber_uns/team",
        newTab: false,
        hideLayoutIcons: true,
      },
      {
        id: "meinungen",
        title: "Das sagen unsere Kunden",
        path: "/ueber_uns/meinungen",
        newTab: false,
        hideLayoutIcons: true,
      },
    ],
  },
  {
    id: "mit_herz",
    title: "Mit Herz",
    htmlTitle: (
      <span>
        Mit{" "}
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="h-5"
          style={{ color: "#C4C4C6" }}
        />{" "}
        Herz
      </span>
    ),
    mobileTitle: (
      <span>
        Mit{" "}
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="h-5"
          style={{ color: "#C4C4C6" }}
        />{" "}
        Herz | Video &lt; 2min
      </span>
    ),
    path: "/mit_herz",
    newTab: false,
    hideLayoutIcons: true,
    submenu: [
      {
        id: "mit_herz_video",
        title: "Mit Herz Video",
        htmlTitle: (
          <span>
            Mit{" "}
            <FontAwesomeIcon
              icon={faCirclePlay}
              className="h-5"
              style={{ color: "#BABBBD" }}
            />{" "}
            Herz | Video &#60; 2 min
          </span>
        ),
        path: "/mit_herz",
        newTab: false,
        hideLayoutIcons: true,
      },
    ],
  },
  {
    id: "urlaub",
    title: "Urlaub",
    path: "/krankenfahrten/finca",
    newTab: false,
    submenu: [
      {
        id: "finca_la_vita_urlaub",
        title: "Finca La Vita - Begleiteter Urlaub",
        path: "/krankenfahrten/finca",
        newTab: false,
        layoutIcons: "rollstuhl",
      },
      {
        id: "urlaubsbegleitung_urlaub",
        title: "Urlaubsbegleitung",
        path: "/krankenfahrten/urlaubsbegleitung",
        newTab: false,
        layoutIcons: "rollstuhl",
      },
      {
        id: "medifly_urlaub",
        title: "MediFly",
        path: "/krankenfahrten/medifly",
        newTab: false,
        layoutIcons: "rollstuhl",
      },
    ],
  },
  {
    id: "krankenfahrten",
    title: "Krankenfahrten",
    path: "/krankenfahrten",
    newTab: false,
    submenu: [
      {
        id: "krankenfahrten",
        title: "Krankenfahrten",
        path: "/krankenfahrten",
        newTab: false,
      },
      {
        id: "arzt",
        title: "Fahrten zum Arzt",
        path: "/krankenfahrten/arzt",
        newTab: false,
      },
      {
        id: "dialysefahrten",
        title: "Dialysefahrten",
        path: "/krankenfahrten/dialysefahrten",
        newTab: false,
      },
      {
        id: "chemofahrten",
        title: "Chemofahrten",
        path: "/krankenfahrten/chemofahrten",
        newTab: false,
      },
      {
        id: "kurfahrten",
        title: "Kurfahrten",
        path: "/krankenfahrten/kurfahrten",
        newTab: false,
      },
      {
        id: "rehafahrten",
        title: "Rehafahrten und Tages-Rehafahrten",
        path: "/krankenfahrten/rehafahrten",
        newTab: false,
      },
      {
        id: "tagespflege",
        title: "Fahrten zur Tagespflege",
        path: "/krankenfahrten/tagespflege",
        newTab: false,
      },
      {
        id: "konsilfahrten",
        title: "Konsilfahrten",
        path: "/krankenfahrten/konsilfahrten",
        newTab: false,
      },
      {
        id: "verlegefahrten",
        title: "Verlegefahrten",
        path: "/krankenfahrten/verlegefahrten",
        newTab: false,
      },
      {
        id: "finca_la_vita",
        title: "Finca La Vita - Begleiteter Urlaub in einer wunderschönen Finca",
        path: "/krankenfahrten/finca",
        newTab: false,
        layoutIcons: "rollstuhl",
      },
      {
        id: "urlausbegleitung",
        title: "Urlaubsbegleitung",
        path: "/krankenfahrten/urlaubsbegleitung",
        newTab: false,
        layoutIcons: "rollstuhl",
      },
      {
        id: "flughafentransfer",
        title: "Flughafentransfer",
        path: "/krankenfahrten/flughafentransfer",
        newTab: false,
      },
      {
        id: "medifly",
        title: "MediFly",
        path: "/krankenfahrten/medifly",
        newTab: false,
        layoutIcons: "rollstuhl",
      },
    ],
  },
  {
    id: "unterstuetzung",
    title: "Alltagsunterstützung",
    path: "/unterstuetzung",
    newTab: false,
    submenu: [
      {
        id: "unterstuetzung",
        title: "Alltagsunterstützung",
        path: "/unterstuetzung",
        newTab: false,
      },
      {
        id: "24-stunden-betreuung",
        title: "24-Stunden-Betreuung | Live-In-Pflege",
        path: "/unterstuetzung/24-stunden-betreuung",
        newTab: false,
      },
      {
        id: "begleitung",
        title: "Unterstützende Begleitung",
        path: "/unterstuetzung/begleitung",
        newTab: false,
      },
      {
        id: "pflegebox",
        title: "Pflegebox",
        path: "/unterstuetzung/pflegebox",
        newTab: false,
        hideLayoutIcons: true,
      },
      {
        id: "arzt",
        title: "Begleitung zum Arzt",
        path: "/unterstuetzung/arzt",
        newTab: false,
      },
      {
        id: "einkaufsfahrten",
        title: "Einkaufsfahrten für Senioren",
        path: "/unterstuetzung/einkaufsfahrten",
        newTab: false,
        layoutIcons: "rollstuhl",
      },
      {
        id: "seniorenfahrten",
        title: "Seniorenfahrten",
        path: "/unterstuetzung/seniorenfahrten",
        newTab: false,
        layoutIcons: "rollstuhl",
      },
      {
        id: "hausnotruf",
        title: "Hausnotruf",
        path: "/unterstuetzung/hausnotruf",
        newTab: false,
        hideLayoutIcons: true,
      },
      {
        id: "zuhause",
        title: "Bedarfsgerechte Umbauten für Zuhause",
        path: "/unterstuetzung/zuhause",
        newTab: false,
      },
      {
        id: "notfallreinigung",
        title: "Notfallreinigung",
        path: "/unterstuetzung/notfallreinigung",
        newTab: false,
        hideLayoutIcons: true,
      },
    ],
  },
  {
    id: "ehrenamt",
    title: "Ehrenamt",
    path: "/ehrenamt",
    newTab: false,
    submenu: [
      {
        id: "ehrenamt",
        title: "Ehrenamt",
        path: "/ehrenamt",
        newTab: false,
      },
      {
        id: "wunschfahrt",
        title: "Wunschfahrt",
        path: "/ehrenamt/wunschfahrt",
        newTab: false,
      },
      {
        id: "celina",
        title: "Celina",
        path: "/ehrenamt/celina",
        newTab: false,
        hideLayoutIcons: true,
      },
      {
        id: "flutkatastrophe",
        title: "Flutkatastrophe in Euskirchen | 14. Juli 2021",
        path: "/ehrenamt/flutkatastrophe",
        newTab: false,
        hideLayoutIcons: true,
      },
    ],
  },
  {
    id: "jobs",
    title: "Jobs",
    path: "/jobs",
    hideLayoutIcons: true,
    showDesktopNav: false,
    newTab: false,
    submenu: [
      {
        id: "wir_suchen_sie",
        title: "Wir suchen Sie",
        path: "/jobs",
        newTab: false,
        hideLayoutIcons: true,
      },
      {
        id: "fahrer",
        title: "Fahrer*innen für den Taxi- und Mietwagenverkehr | m/w/d",
        path: "/jobs/fahrer",
        newTab: false,
        hideLayoutIcons: true,
      },
      {
        id: "office_manager",
        title: "Office Managerin | m/w/d",
        path: "/jobs/office_manager",
        newTab: false,
        hideLayoutIcons: true,
      },
    ],
  },
  {
    id: "kontakt",
    title: "Kontakt",
    path: "/kontakt",
    newTab: false,
    submenu: [
      {
        id: "wir_sind_fuer_sie_da",
        title: "Wir sind für Sie da",
        path: "/kontakt",
        newTab: false,
      },
      {
        id: "kontaktformular_wunschtermin",
        title: "Kontaktformular | Wunschtermin",
        path: "/kontakt/wunschtermin",
        newTab: false,
      },
    ],
  },
  {
    id: "impressum",
    title: "Impressum",
    path: "/impressum",
    hideLayoutIcons: true,
    showMainMenu: false,
    newTab: false,
    submenu: [
      {
        id: "impressum",
        title: "Impressum",
        path: "/impressum",
        hideLayoutIcons: true,
        newTab: false,
      },
    ],
  },
  {
    id: "datenschutz",
    title: "Datenschutzerklärung",
    path: "/datenschutz",
    hideLayoutIcons: true,
    showMainMenu: false,
    newTab: false,
    submenu: [
      {
        id: "datenschutz",
        title: "Datenschutzerklärung",
        path: "/datenschutz",
        hideLayoutIcons: true,
        newTab: false,
      },
    ],
  },
];
export default menuData;
