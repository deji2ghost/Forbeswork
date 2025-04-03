import { JSX } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  content: JSX.Element;
  footer: JSX.Element;
  className?: string;
}