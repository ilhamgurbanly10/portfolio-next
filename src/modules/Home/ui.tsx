"use client";
import React from "react";
import { Props } from "./type";
import AboutMe from "./components/AboutMe";
import Hero from "@/components/Sections/Hero";
const UI: React.FC<Props> = ({}) => {
  return (
    <div>
      Home Page
      <Hero />
      <AboutMe />
    </div>
  );
};

export default UI;
