import React from "react";
import { cn } from "../../../lib/utils";
import { CardProps } from "./types";
import Loader from "../loader";

const Card: React.FC<CardProps> = ({ className, text, header, icon, loading, error }) => {

  return (
    <div
      className={cn(
        "border relative border-offGrey shadow-md flex flex-col min-h-[80px] gap-1 p-2 w-full rounded-md",
        className
      )}
    >
      {
        error ? <div className="text-warning">{error}</div> : loading ? <div><Loader /></div> : 
        <>
      <div className="flex justify-between">
        <h1>{header}</h1>
        {icon}
      </div>
      <p>{text}</p>
      </>
      }
    </div>
  );
};

export default Card;
