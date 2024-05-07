"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/hooks";
import { data } from "./data";
import IconicCard from "@/components/Cards/IconicCard";
const UI: React.FC<Props> = ({ className }) => {
  const translated = useTranslations("Index");
  const { locale } = useLanguage();

  return (
    <Container>
      <div className={`${className}`}>
        <DottedTitle
          text={
            <span className="text-app-black">{translated("for_clients")}</span>
          }
        />
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between mt-16">
          {data?.map((item, i) => (
            <IconicCard
              key={i}
              icon={item.icon}
              title={item[`title_${locale}`]}
              description={item[`description_${locale}`]}
              className="w-full sm:w-6/12 mt-10 first:mt-0 lg:mt-0 lg:w-[31.5%]"
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default memo(UI);
