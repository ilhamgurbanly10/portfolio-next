"use client";
import React from "react";
import { Props } from "./type";
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
const UI: React.FC<Props> = ({ text, className = "" }) => {
  const translated = useTranslations("Index");
  return (
    <div
      className={`app-error text-primary py-16 px-6 flex items-center w-full justify-center ${className}`}
    >
      <LoadingOutlined className="text-2xl" />
      <p className="ml-4">{text ?? translated("loading")}</p>
    </div>
  );
};

export default UI;
