"use client";
import React, { memo } from "react";
import { Props } from "./type";
import AboutMe from "./components/AboutMe";
import Hero from "@/components/Sections/Hero";
import ForClients from "./components/ForClients";
const UI: React.FC<Props> = ({}) => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <ForClients className="mt-20" />
    </div>
  );
};

export default memo(UI);
