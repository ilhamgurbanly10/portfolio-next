"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/hooks";
import { data } from "./data";
import RedButton from "@/components/Buttons/RedButton";
import ExperienceCard from "@/components/Cards/ExperienceCard";
const UI: React.FC<Props> = ({ className }) => {
  const translated = useTranslations("Index");
  const { locale } = useLanguage();

  return (
    <>
      <Container>
        <div className={`${className}`}>
          <DottedTitle
            text={
              <span className="text-app-black">{translated("experience")}</span>
            }
          />
          <div className="flex flex-col flex-wrap items-center lg:items-start lg:flex-row justify-between mt-16">
            {data?.map((item, i) => (
              <ExperienceCard
                key={i}
                icon={item.icon}
                title={item[`title_${locale}`]}
                subtitle={item.subtitle}
                description={item.description}
                className="w-full sm:w-6/12 mb-10 last:m-0 lg:mn-10 lg:w-[31.5%]"
              />
            ))}
            <div className="w-full sm:w-6/12 mb-10 last:m-0 lg:mn-10 lg:w-[31.5%]" />
          </div>
        </div>
      </Container>
      <Container className="bg-app-red flex items-center justify-center py-[70px]">
        <RedButton onClick={() => {}} label={"download_cv"} />
      </Container>
    </>
  );
};

export default memo(UI);
