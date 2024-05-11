"use client";
import React, { memo } from "react";
import { Props } from "./type";
import { DownOutlined } from "@ant-design/icons";
import useModel from "./model";
import { Dropdown, Space } from "antd";
import { useLanguage } from "@/hooks";

const UI: React.FC<Props> = ({ className = "" }) => {
  const { items } = useModel();
  const { locale } = useLanguage();
  return (
    <div className={`locale-switcher ${className}`}>
      <Dropdown menu={{ items }}>
        <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
          <Space>
            {locale?.toUpperCase()}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default memo(UI);
