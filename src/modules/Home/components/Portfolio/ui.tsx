"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
import Link from "next/link";
import RedButton from "@/components/Buttons/RedButton";
// import { useLanguage } from "@/hooks";
// import { data } from "./data";
// import IconicCard from "@/components/Cards/IconicCard";
const UI: React.FC<Props> = ({ className }) => {
  const translated = useTranslations("Index");
  // const { locale } = useLanguage();

  return (
    <>
      <Container>
        <div className={`${className}`}>
          <DottedTitle
            text={
              <div className="flex flex-col items-center">
                <span className="text-app-black">{translated("recent")}</span>
                <span className="text-app-red text-3xl mt-1">
                  {translated("projects")}
                </span>
              </div>
            }
          />
          {/* <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between mt-16">
          {data?.map((item, i) => (
            <IconicCard
              key={i}
              icon={item.icon}
              title={item[`title_${locale}`]}
              description={item[`description_${locale}`]}
              className="w-full sm:w-6/12 mt-10 first:mt-0 lg:mt-0 lg:w-[31.5%]"
            />
          ))}
        </div> */}
        </div>
      </Container>
      <Container className="bg-app-red flex items-center justify-center py-[90px]">
        <Link href="/contact">
          <RedButton label={"hire_me"} />
        </Link>
      </Container>
    </>
  );
};

export default memo(UI);
