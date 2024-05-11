"use client";
import React, { memo, useMemo } from "react";
import { Props } from "./type";
import { useTranslations } from "next-intl";

const UI: React.FC<Props> = ({
  className = "",
  label,
  onClick,
  type = "primary",
  btnType = "button",
  disabled,
}) => {
  const translated = useTranslations("Index");

  const types = useMemo<Record<string, string>>(() => {
    return {
      primary:
        "bg-app-orange text-white hover:text-app-orange hover:bg-app-yellow",
      danger: "bg-app-red text-white hover:text-app-red hover:bg-app-yellow",
    };
  }, []);

  return (
    <button
      type={btnType}
      onClick={() => {
        if (onClick && !disabled) onClick();
      }}
      className={`${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } text-center duration-500 py-2 px-4 font-normal tracking-widest ${
        disabled
          ? "bg-app-lightgray2 text-app-gray border border-app-gray"
          : types[type]
      } ${className}`}
    >
      {translated(label)}
    </button>
  );
};

export default memo(UI);
