"use client";
import React, { memo } from "react";
import { Props } from "./type";
import AboutMe from "./components/AboutMe";
import Hero from "@/components/Sections/Hero";
import ForClients from "./components/ForClients";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Education from "./components/Education";
const UI: React.FC<Props> = ({}) => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <ForClients className="mt-20" />
      <Education className="mt-20" />
      <Experience className="mt-20" />
      <Portfolio className="mt-20" />
    </div>
  );
};

export default memo(UI);
