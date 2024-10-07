import { ReactPortal } from "react";


export interface HeaderTabsProps {
 items : HeaderTabItem[];
}

export type HeaderTabItem  = {
  title: string;
  subTitle?: string
  component: React.ReactNode;
}