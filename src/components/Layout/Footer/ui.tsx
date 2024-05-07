"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Container from "@/components/Container";
import useModel from "./model";
import { useTranslations } from "next-intl";
const UI: React.FC<Props> = ({}) => {
  const translated = useTranslations("Index");
  const { year } = useModel();
  return (
    <footer className="bg-app-lightgray-2 mt-20">
      <Container className="flex justify-center items-center lg:px-10 xl:px-10 text-center">
        <h6 className="text-app-gray text-sm m-0 py-8">
          {translated("all_rights_reserved")} &copy; {year} Ilham Gurbanly
        </h6>
      </Container>
    </footer>
  );
};

export default memo(UI);
