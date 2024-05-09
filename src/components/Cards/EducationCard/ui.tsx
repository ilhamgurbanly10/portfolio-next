"use client";
import React, { memo } from "react";
import { Props } from "./type";

const UI: React.FC<Props> = ({
  className = "",
  title,
  description,
  img,
  year,
  even,
  contentClassName = "",
  lineClassName = "",
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-stretch ${className}`}>
      <div
        style={{
          backgroundImage: `url("${img}")`,
        }}
        className={`w-full lg:w-6/12 min-h-[350px] bg-cover bg-center bg-no-repeat ${
          even ? "lg:order-last" : ""
        }`}
      ></div>
      <div className={`w-full lg:w-6/12 p-8 ${contentClassName}`}>
        <h3 className="font-bold text-sm tracking-widest">{title}</h3>
        <div className={`h-0.5 w-16 mt-3.5 mb-6 ${lineClassName}`}></div>
        <p className="text-sm leading-6">{description}</p>
        <p className="mt-8">{year}</p>
      </div>
    </div>
  );
};

export default memo(UI);
