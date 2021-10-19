import * as React from "react";

export const Footer = () => {
  const textStyle ="text-white font-sans text-lg font-semibold "

  return(      
    <div className="grid grid-cols-3 justify-items-stretch justify-between h-10 bg-gray-900 items-center">
      <span className={textStyle + "pl-8"}>POWER-X</span>
      <span className={textStyle + "text-center italic"}>WINTER IS COMING</span>
      <span className={textStyle + "text-right pr-8"}>ENDY</span>
    </div>
  );
};