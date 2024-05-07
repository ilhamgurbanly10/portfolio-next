"use client";
import React, { memo } from "react";
import { Props } from "./type";
import Link from "next/link";
import NavLink from "@/components/Buttons/NavLink";
import Container from "@/components/Container";
import { paths } from "./data";
import MobileNavbar from "../MobileNavbar";
const UI: React.FC<Props> = ({}) => {
  return (
    <header className="border-b border-app-red fixed top-0 left-0 right-0 z-40 bg-app-lightgray shadow-lg">
      <Container className="flex justify-between items-center lg:px-[32px] xl:px-[32px] py-4 lg:py-6">
        <Link href="/">
          <div>
            <span className="text-3xl lg:text-4xl font-bold text-app-black">
              I
            </span>
            <span className="text-3xl lg:text-4xl font-bold text-app-red">
              G
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {paths?.map((item, i) => (
            <NavLink
              key={i}
              label={item.label}
              icon={item.icon}
              href={item.href}
              isHomePage={item.href === "/"}
            />
          ))}
        </nav>

        <MobileNavbar />
      </Container>
    </header>
  );
};

export default memo(UI);
