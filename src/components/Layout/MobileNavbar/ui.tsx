"use client";
import React, { memo } from "react";
import { Props } from "./type";
import NavLink from "@/components/Buttons/NavLink";
import { paths } from "../Header/data";
import { BarsOutlined, CloseOutlined } from "@ant-design/icons";
import useModel from "./model";
const UI: React.FC<Props> = ({ className = "" }) => {
  const { show, setShow } = useModel();
  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => {
          setShow(!show);
        }}
        className={`text-3xl text-app-red ${className}`}
      >
        <BarsOutlined />
      </button>

      <div
        className={`fixed overflow-auto max-h-screen w-full h-screen bg-white z-50 top-0 transition-all duration-500 ${
          show ? "left-0" : "-left-full"
        }`}
      >
        <button
          type="button"
          onClick={() => {
            setShow(false);
          }}
          className={`text-2xl absolute top-6 right-6 text-app-black ${className}`}
        >
          <CloseOutlined />
        </button>
        <nav className="flex h-full py-6 flex-col justify-center items-center gap-4">
          {paths?.map((item, i) => (
            <NavLink
              key={i}
              label={item.label}
              icon={item.icon}
              href={item.href}
              onClick={() => {
                setShow(false);
              }}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default memo(UI);
