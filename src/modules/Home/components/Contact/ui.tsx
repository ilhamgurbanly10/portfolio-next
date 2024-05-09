"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
import ContactInfoCard from "@/components/Cards/ContactInfoCard";
import { data } from "./data";

const UI: React.FC<Props> = ({ className }) => {
  const translated = useTranslations("Index");

  return (
    <Container>
      <div className={`${className}`}>
        <DottedTitle
          text={<span className="text-app-black">{translated("contact")}</span>}
        />

        <div className="flex flex-col flex-wrap items-center lg:items-stretch justify-strethc lg:items-start lg:flex-row justify-between mt-16">
          {data.contactInfo?.map((item, i) => (
            <ContactInfoCard
              key={i}
              label={item.label}
              value={item.value}
              subvalue={item?.subvalue}
              type={item.type}
              icon={item.icon}
              className="w-full sm:w-6/12 mb-10 last:m-0 lg:mn-10 lg:w-[31.5%]"
            />
          ))}
          <div className="w-full sm:w-6/12 mb-10 last:m-0 lg:mn-10 lg:w-[31.5%]" />
        </div>

        <div className="flex gap-4 flex-row items-center flex-wrap justify-center mt-16">
          {data.socials?.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              className="bg-app-red text-white text-lg w-[40px] h-[40px] inline-flex items-center justify-center text-center"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default memo(UI);
