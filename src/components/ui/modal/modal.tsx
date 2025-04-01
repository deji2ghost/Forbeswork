import React from "react";
import { ModalProps } from "./modalPropsTypes";
import { cn } from "../../../lib/utils";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, header, content, footer, className }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
          onClick={onClose}
        >
          <div
            className={cn(
              "bg-white rounded-xl p-7 max-h-[90vh] w-[583px] overflow-y-auto transform transition-transform duration-300 ease-in-out scale-95 sm:scale-100 flex flex-col gap-5",
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {header}
            {content}
            {footer}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
