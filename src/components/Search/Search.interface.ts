import { ReactNode } from "react";

export interface SearchTermProps {
  label: ReactNode;
  value: ReactNode;
}

export interface SearchProps {
  searchTerms: SearchTermProps[];
}