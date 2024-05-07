"use client";
import React, { memo } from "react";
import { Props } from "./type";
import { DownOutlined } from "@ant-design/icons";

export const Dot = () => {
  return <span className="block w-0.5 h-0.5 bg-gray-400 rounded-full" />;
};

const UI: React.FC<Props> = ({ text, className = " " }) => {
  const dots: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={`dotted-title`}>
      <h2
        className={`text-white text-lg font-bold tracking-widest text-center ${className}`}
      >
        {text}
      </h2>
      <div className="flex justify-between items-center mx-auto w-[220px] mt-2">
        <div className="flex items-center gap-1.5">
          {dots?.map((item) => (
            <Dot key={item} />
          ))}
        </div>

        <div>
          <DownOutlined className="text-gray-600" />
        </div>

        <div className="flex items-center gap-1.5">
          {dots?.map((item) => (
            <Dot key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(UI);
