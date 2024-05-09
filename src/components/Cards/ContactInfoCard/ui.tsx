"use client";
import React, { memo } from "react";
import { Props } from "./type";
import { useTranslations } from "next-intl";

const UI: React.FC<Props> = ({
  className = "",
  label,
  value,
  subvalue,
  icon,
  type,
}) => {
  const translated = useTranslations("Index");

  const types: Record<string, React.ReactNode> = {
    address: (
      <div>
        <p className="text-app-gray text-sm leading-6">{value}</p>
        {subvalue && (
          <p className="text-app-gray text-sm mt-2 leading-6">{subvalue}</p>
        )}
      </div>
    ),
    email: (
      <div>
        <a
          className="block text-app-red border-b border-app-red pb-1 border-dashed text-sm mt-2 leading-6"
          href={`mailto:${value}`}
        >
          {value}
        </a>
        {subvalue && (
          <a
            className="block text-app-red border-b mt-3 border-app-red pb-1 border-dashed text-sm mt-2 leading-6"
            href={`mailto:${subvalue}`}
          >
            {subvalue}
          </a>
        )}
      </div>
    ),
    phone: (
      <div>
        <a
          className="block text-app-red border-b border-app-red pb-1 border-dashed text-sm mt-2 leading-6"
          href={`tel:${value}`}
        >
          {value}
        </a>
        {subvalue && (
          <a
            className="block text-app-red border-b mt-3 border-app-red pb-1 border-dashed text-sm mt-2 leading-6"
            href={`tel:${subvalue}`}
          >
            {subvalue}
          </a>
        )}
      </div>
    ),
  };

  return (
    <div
      className={`text-center border-b-[3px] relative top-0 hover:-top-3 transition-all duration-500 hover:border-app-yellow border-app-red flex flex-col items-center p-6 bg-app-lightgray-2 ${className}`}
    >
      <span className="text-lg text-app-black">{icon}</span>
      <h6 className="text-app-black font-bold text-sm tracking-widest mt-3">
        {translated(label)}
      </h6>
      <span className="h-0.5 w-[70px] bg-app-gray mt-4 mb-6 opacity-50"></span>
      {types[type]}
    </div>
  );
};

export default memo(UI);
