import { ReactNode } from "react";

export type Menu = {
  id: string;
  title: string;
  description?: string;
  htmlTitle?: ReactNode;
  mobileTitle?: ReactNode;
  homeHtmlTitle?: ReactNode;
  path?: string;
  newTab: boolean;
  className?: string;
  hideLayoutIcons?: boolean;
  layoutIcons?: "rollstuhl";
  showMainMenu?: boolean;
  showDesktopNav?: boolean;
  submenu?: Menu[];
};
