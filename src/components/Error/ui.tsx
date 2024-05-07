"use client";
import React, { memo } from "react";
import { Props } from "./type";
import { WarningOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
const UI: React.FC<Props> = ({ text, className = "" }) => {
  const translated = useTranslations("Index");
  return (
    <div
      className={`app-error text-error py-16 px-6 flex items-center w-full justify-center ${className}`}
    >
      <WarningOutlined className="text-2xl" />
      <p className="ml-4">{text ?? translated("error")}</p>
    </div>
  );
};

export default memo(UI);
