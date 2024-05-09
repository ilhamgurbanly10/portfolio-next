"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
import Link from "next/link";
import RedButton from "@/components/Buttons/RedButton";
import ProjectCard from "@/components/Cards/ProjectCard";
import { data } from "./data";
import { Image } from "antd";

const UI: React.FC<Props> = ({ className }) => {
  const translated = useTranslations("Index");

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
          <Image.PreviewGroup>
            <div className="flex flex-col flex-wrap items-center lg:items-start lg:flex-row justify-between mt-16">
              {data?.map((item, i) => (
                <ProjectCard
                  key={i}
                  title={item.title}
                  href={item.href}
                  githubHref={item.githubHref}
                  description={item.description}
                  img={item.img}
                  className="w-full sm:w-6/12 mb-10 last:m-0 lg:mn-10 lg:w-[31.5%]"
                />
              ))}
              <div className="w-full sm:w-6/12 mb-10 last:m-0 lg:mn-10 lg:w-[31.5%]" />
            </div>
          </Image.PreviewGroup>
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
