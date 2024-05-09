/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { memo } from "react";
import { Props } from "./type";
import { Image } from "antd";
const UI: React.FC<Props> = ({
  className = "",
  title,
  href,
  githubHref,
  description,
  img,
}) => {
  return (
    <div
      className={`project-card inline-flex flex-col items-center ${className}`}
    >
      {
        // @ts-ignore
        <Image
          style={{ width: "100%", height: "auto" }}
          src={img}
          alt={title}
        />
      }
      <a
        href={href}
        target="_blank"
        className={`font-bold max-w-[70%] text-app-red text-lg mt-6 text-center`}
      >
        {title}
      </a>
      {githubHref ? (
        <a
          href={githubHref}
          target="_blank"
          className={`font-bold max-w-[70%] text-app-black text-lg mt-2 text-center`}
        >
          GITHUB REPO
        </a>
      ) : (
        <p className="font-bold max-w-[70%] text-app-gray text-lg mt-2 text-center cursor-not-allowed">
          GITHUB REPO
        </p>
      )}
      <div className="w-16 h-[1px] bg-app-gray mt-5 mx-auto"></div>
      <p className={`mt-5 text-sm text-app-gray leading-7 text-center`}>
        {description}
      </p>
    </div>
  );
};

export default memo(UI);
