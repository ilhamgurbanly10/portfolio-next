"use client";
import React, { memo } from "react";
import { Props } from "./type";
import AboutMe from "./components/AboutMe";
import Hero from "@/components/Sections/Hero";
import ForClients from "./components/ForClients";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
const UI: React.FC<Props> = ({}) => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <ForClients className="mt-20" />
      <Education className="mt-16" />
      <Experience className="mt-16" />
      <Skills className="mt-16" />
      <Portfolio className="mt-16" />
      <Contact className="mt-16" />
    </div>
  );
};

export default memo(UI);
