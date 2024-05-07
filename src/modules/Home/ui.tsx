"use client";
import React, { memo } from "react";
import { Props } from "./type";
import AboutMe from "./components/AboutMe";
import Hero from "@/components/Sections/Hero";
const UI: React.FC<Props> = ({}) => {
  return (
    <div>
      <Hero />
      <AboutMe />
    </div>
  );
};

export default memo(UI);
