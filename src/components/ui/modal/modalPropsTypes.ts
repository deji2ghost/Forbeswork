import { JSX, ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  header: JSX.Element;
  content: JSX.Element;
  footer: JSX.Element;
  className: string;
}