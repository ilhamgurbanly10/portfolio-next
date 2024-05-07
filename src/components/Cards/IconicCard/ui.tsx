"use client";
import React, { memo } from "react";
import { Props } from "./type";
// import { DownOutlined } from "@ant-design/icons";

const UI: React.FC<Props> = ({
  className = "",
  iconClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  icon,
  title,
  description,
}) => {
  return (
    <div
      className={`iconic-card inline-flex flex-col items-center ${className}`}
    >
      <div
        className={`border rounded-full text-5xl text-app-red bg-white transition-all duration-500 w-44 h-44 border-app-red inline-flex items-center justify-center hover:bg-app-red hover:text-white hover:text-6xl ${iconClassName}`}
      >
        {icon}
      </div>
      <h3 className={`font-bold text-lg mt-6 text-center ${titleClassName}`}>
        {title}
      </h3>
      <div className="w-16 h-[1px] bg-app-gray mt-5 mx-auto"></div>
      <p
        className={`mt-5 text-sm text-app-gray leading-7 text-center ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default memo(UI);
