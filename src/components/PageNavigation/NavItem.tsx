"use client";

import {
  faChevronCircleRight,
  faChevronCircleDown,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

type NavItemProps = {
  background: "primary" | "normal" | "transparent";
  title: ReactNode;
  description?: string;
  path?: string;
  isOpen?: boolean;
  onToggle?: (id: number) => void;
  descriptionMenu: boolean;
  isLastEntry?: boolean;
  isFirstEntry?: boolean;
};

const NavItem = ({
  background,
  title,
  description,
  path,
  isOpen,
  onToggle,
  descriptionMenu,
  isLastEntry = false,
  isFirstEntry = false,
}: NavItemProps) => {
  const backgroundClass = (() => {
    switch (background) {
      case "primary":
        return "text-white bg-primary";
      case "normal":
        return "text-black bg-secondary";
      case "transparent":
        return "text-black border border-black/20 bg-transparent";
      default:
        return "";
    }
  })();

  const buttonColor = background === "transparent" ? "brightness-80" : "";

  return (
    <>
      <div className={`mb-2 ${isFirstEntry ? "mt-2" : ""}`}>
        <a
          className={`${backgroundClass} flex cursor-pointer flex-row items-center justify-between rounded-4xl py-1.5 pr-5 pl-10 font-light transition-colors duration-100 select-none`}
          {...(!descriptionMenu
            ? { href: path }
            : { onClick: () => onToggle?.(this) })}
        >
          <span className="min-w-0 flex-1 truncate">{title}</span>
          {(descriptionMenu || background !== "primary") && (
            <button className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={isOpen ? faChevronCircleDown : faChevronCircleRight}
                className={`text-xl text-white/80 ${buttonColor}`}
              />
            </button>
          )}
        </a>
        {descriptionMenu && (
          <div
            className={`mr-6 ml-6 flex flex-col items-start overflow-hidden rounded-b-xl border border-t-0 border-black/20 bg-white text-sm font-light transition-all duration-100 ${isOpen ? "mb-3 max-h-40 p-2 opacity-100" : "max-h-0 opacity-0"}`}
          >
            {description}
            <a className="mr-2 self-end text-black/60 italic" href={path}>
              Weitere Informationen
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="ml-1 text-black/50"
              />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default NavItem;
