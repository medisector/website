import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactButton = () => {
  return (
    <>
      <a
        className="bg-primary hover:bg-dark mt-7 flex justify-between rounded-md p-3 text-sm text-white drop-shadow-md hover:drop-shadow-lg"
        href="/kontakt"
      >
        <span>
          Kontakt <FontAwesomeIcon icon={faArrowRight} />
        </span>
        <span>Wir sind für Sie da</span>
      </a>
    </>
  );
};

export default ContactButton;
