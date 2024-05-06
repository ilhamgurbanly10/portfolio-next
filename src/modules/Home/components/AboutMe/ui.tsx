/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
const UI: React.FC<Props> = ({}) => {
  const translated = useTranslations("Index");
  return (
    <Container className="bg-app-orange">
      <div className="py-16">
        <DottedTitle
          text={
            <>
              {translated("about_title_1")}{" "}
              <span className="text-app-yellow">
                {translated("about_title_2")}
              </span>{" "}
              {translated("about_title_3")}
            </>
          }
        />
        <p className="text-white text-sm leading-7 mt-10 text-center mx-auto lg:max-w-[65%]">
          I am enough of an artist to draw freely upon my imagination. The point
          is that when I see a sunset or a waterfall or something, for a split
          second it's so great, because for a little bit I'm out of my brain,
          and it's got nothing to do with me. I'm not trying to figure it out,
          you know what I mean? And I wonder if I can somehow find a way to
          maintain that mind stillness.
        </p>
      </div>
    </Container>
  );
};

export default UI;
