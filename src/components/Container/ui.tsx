"use client";
import React, { memo } from "react";
import { Props } from "./type";

const UI: React.FC<Props> = ({ children, className = " ", style = {} }) => {
  return (
    <section
      className={`w-full max-w-[1536px] mx-auto px-4 md:px-6 lg:px-16 xl:px-48 py-6 ${className}`}
      style={{ ...style }}
    >
      {children}
    </section>
  );
};

export default memo(UI);
