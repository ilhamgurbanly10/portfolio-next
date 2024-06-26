"use client";
import React, { memo } from "react";
import { Props } from "./type";
import { DownOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";

const UI: React.FC<Props> = ({ className = "" }) => {
  const translated = useTranslations("Index");
  return (
    <button
      type="button"
      className={`text-white flex flex-col items-center cursor-pointer absolute bottom-4 ${className}`}
      onClick={() => {
        const header = document.querySelector("header");
        const height: number = header?.offsetHeight ?? 0;
        document.documentElement.scrollTop = window.innerHeight - height;
      }}
    >
      <span>{translated("see_more")}</span>
      <span className="animate-bounce">
        <DownOutlined className="text-4xl mt-6 opacity-50" />
      </span>
    </button>
  );
};

export default memo(UI);
