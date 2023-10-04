import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode;
  link: string;
  linkTarget?: string;
  className?: string;
  variant?: string;
}
