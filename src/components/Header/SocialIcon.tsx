import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SocialIconProps = {
  href: string;
  icon: IconDefinition; // z. B. faWhatsapp
  size?: string;
  backgroundColor?: string;
  height?: number;
  label: string;
};

const SocialIcon = ({
  href,
  icon,
  size = "xl",
  backgroundColor = "bg-secondary",
  height = 9,
  label,
}: SocialIconProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`${backgroundColor} hover:bg-primary mr-3 flex items-center justify-center rounded-md p-1 duration-100`}
      style={{ width: `${height * 4}px`, height: `${height * 4}px` }}
    >
      <FontAwesomeIcon icon={icon} className={`text-${size} text-white`} />
    </a>
  );
};

export default SocialIcon;
