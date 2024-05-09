"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
import SkillCard from "@/components/Cards/SkillCard";
import { languageSkills, developmentSkills } from "./data";

const UI: React.FC<Props> = ({ className }) => {
  const translated = useTranslations("Index");

  return (
    <Container>
      <div className={`${className}`}>
        <DottedTitle
          text={<span className="text-app-black">{translated("skills")}</span>}
        />

        <div className="mt-8">
          <h3 className="font-bold text-center text-lg text-app-black">
            {translated("language")}
          </h3>
          <div className="flex mt-4 flex-wrap justify-center flex-row gap-6">
            {languageSkills?.map((item, i) => (
              <SkillCard key={i} text={item} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-center text-lg text-app-black">
            {translated("development")}
          </h3>
          <div className="flex mt-4 flex-wrap justify-center flex-row gap-6">
            {developmentSkills?.map((item, i) => (
              <SkillCard key={i} text={item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default memo(UI);
