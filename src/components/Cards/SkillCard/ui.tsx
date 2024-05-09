"use client";
import React, { memo } from "react";
import { Props } from "./type";

const UI: React.FC<Props> = ({ className = "", text }) => {
  return (
    <div className={`text-center px-6 py-2 bg-app-red text-white ${className}`}>
      {text}
    </div>
  );
};

export default memo(UI);
