"use client";

import { ReactNode } from "react";
const HomeButton = ({
                      text,
                      href,
                      onClickId,
                      className,
                    }: {
  text: string | ReactNode;
  href?: string;
  onClickId?: string;
  className?: string;
}) => {

  const handleClick = () => {
    console.log("TEST!");
    if (onClickId) {
      const element = document.getElementById(onClickId);
      element?.click(); // Klick auf das Element
    }
  };

  if(onClickId) {
    return (
      <div
        onClick={handleClick}
        className={`${className ? className : "h-20"} bg-home-btns hover:bg-primary flex items-center justify-center overflow-clip rounded-md p-2 text-center text-xs font-light text-black shadow-sm hover:drop-shadow-lg`}
      >
        {text}
      </div>
    );
  }

  return (
    <a
      href={href}
      className={`${className ? className : "h-20"} bg-home-btns hover:bg-primary flex items-center justify-center overflow-clip rounded-md p-2 text-center text-xs font-light text-black shadow-sm hover:drop-shadow-lg`}
    >
      {text}
    </a>
  );
};

export default HomeButton;