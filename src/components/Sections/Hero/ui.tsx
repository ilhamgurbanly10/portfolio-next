"use client";
import React from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import Fade from "@/components/Animations/Fade";
import { useTranslations } from "next-intl";
import SeeMore from "@/components/Buttons/SeeMore";
const UI: React.FC<Props> = ({}) => {
  const translated = useTranslations("Index");
  const data: React.ReactNode[] = [
    <p
      key={1}
      className="text-app-red text-lg lg:text-2xl tracking-[10px] mt-2"
    >
      {translated("frontend_developer")}
    </p>,
    <p
      key={2}
      className="text-app-red text-lg lg:text-2xl tracking-[10px] mt-2"
    >
      {translated("german_teacher")}
    </p>,
    <p
      key={3}
      className="text-app-red text-lg lg:text-2xl tracking-[10px] mt-2"
    >
      {translated("spanish_teacher")}
    </p>,
  ];

  return (
    <Container
      style={{
        backgroundImage: `url("https://technext.github.io/JohnDoe/img/header-bg.jpg")`,
      }}
      className="flex flex-col items-center h-screen relative bg-center bg-cover inset-0 bg-no-repeat"
    >
      <div className="absolute text-center lg:text-start lg:right-14 top-24 lg:top-40">
        <h1 className="text-4xl lg:text-8xl text-app-black font-bold">
          I<span className="text-app-red">L</span>HAM
        </h1>
        <h1 className="text-4xl lg:text-8xl text-app-gray font-bold">
          G<span className="text-app-yellow">U</span>RBANLY
        </h1>
        <Fade data={data} />
      </div>
      <SeeMore />
    </Container>
  );
};

export default UI;
