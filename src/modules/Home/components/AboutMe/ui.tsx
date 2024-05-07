"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { selectAbout } from "@/lib/features/About/aboutSlice";
import { AboutState } from "@/lib/features/About/type";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { useLanguage } from "@/hooks";
import useModel from "./model";
const UI: React.FC<Props> = ({}) => {
  const translated = useTranslations("Index");
  const data: AboutState = useSelector(selectAbout);
  const { locale } = useLanguage();
  useModel();

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
        {data.loading ? (
          <Loading className="text-white" />
        ) : data.error ? (
          <Error className="text-white" />
        ) : (
          <p className="text-white text-sm leading-7 mt-10 text-center mx-auto lg:max-w-[65%]">
            {data.data ? data.data[`description_${locale}`] : ""}
          </p>
        )}
      </div>
    </Container>
  );
};

export default memo(UI);
