"use client";
import React, { memo } from "react";
import { Props } from "./type";
import { useTranslations } from "next-intl";

const UI: React.FC<Props> = ({
  className = "",
  label,
  onClick,
  asLink,
  href,
  download,
}) => {
  const translated = useTranslations("Index");
  return (
    <>
      {asLink ? (
        <a
          href={href}
          download={download}
          className={`red-btn cursor-pointer text-center duration-500 border py-6 px-10 border-app-yellow font-bold text-app-yellow bg-app-red hover:text-app-red hover:bg-app-yellow tracking-widest ${className}`}
        >
          {translated(label)}
        </a>
      ) : (
        <span
          onClick={() => {
            if (onClick) onClick();
          }}
          className={`red-btn cursor-pointer text-center duration-500 border py-6 px-10 border-app-yellow font-bold text-app-yellow bg-app-red hover:text-app-red hover:bg-app-yellow tracking-widest ${className}`}
        >
          {translated(label)}
        </span>
      )}
    </>
  );
};

export default memo(UI);
