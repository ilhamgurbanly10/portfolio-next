"use client";
import React, { memo } from "react";
import { Props } from "./type";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UI: React.FC<Props> = ({
  className = "",
  label,
  icon,
  href,
  activeClassName,
  onClick,
  isHomePage,
}) => {
  const translated = useTranslations("Index");
  const path = usePathname();
  return (
    <Link href={href}>
      <div
        className={`text-[10px] font-bold pb-1 transition-all duration-500 border-b border-dashed flex flex-col items-center cursor-pointer ${className} ${
          path === href ||
          (isHomePage &&
            ["/en", "/de", "/az"]?.some((item) => {
              return item === path;
            }))
            ? `text-app-red border-app-red hover:text-app-black hover:border-app-black ${activeClassName}`
            : "text-app-black border-app-black hover:text-app-red hover:border-app-red"
        }`}
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        <span className="text-sm">{icon}</span>
        <span className="mt-2">{translated(`${label}`)}</span>
      </div>
    </Link>
  );
};

export default memo(UI);
