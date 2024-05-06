"use client";
import React from "react";
import { Props } from "./type";
import useModel from "./model";
const UI: React.FC<Props> = ({ data, className = "", time }) => {
  const { activeIndex } = useModel(data, time);
  return (
    <div className={`app-fade relative ${className}`}>
      {data?.map((item, i) => (
        <div
          className={`absolute transition-all duration-1000 ${
            activeIndex === i ? "opacity-100 delay-1000" : "opacity-0 delay-0"
          }`}
          key={i}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default UI;
