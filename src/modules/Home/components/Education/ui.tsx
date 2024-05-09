"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
import EducationCard from "@/components/Cards/EducationCard";
import { data } from "./data";

const UI: React.FC<Props> = ({ className }) => {
  const translated = useTranslations("Index");

  return (
    <div>
      <Container className="lg:px-0 xl:px-[0px] py-4 lg:py-6 mx-auto">
        <div className={`${className}`}>
          <DottedTitle
            text={
              <span className="text-app-black">{translated("education")}</span>
            }
          />

          <div className="flex flex-col flex-wrap mt-16">
            {data?.map((item, i) => (
              <EducationCard
                key={i}
                title={item.title}
                description={item.description}
                img={item.img}
                year={item.year}
                even={(i + 1) % 2 == 0}
                contentClassName={
                  (i + 1) % 2 == 0
                    ? `bg-app-lightgray-2 text-app-gray`
                    : "bg-app-red text-white"
                }
                lineClassName={(i + 1) % 2 == 0 ? `bg-app-gray` : "bg-white"}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default memo(UI);
