"use client";

import { useSidebarStore } from "@/stores/useSidebarStore";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import React from "react";

import classNames from "classnames";
import { Pacifico } from "next/font/google";
import SearchDocument from "../search-document";

const pacifico = Pacifico({ weight: "400", subsets: ["vietnamese"] });

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = React.memo(() => {
  const { showInMobile, toggle } = useSidebarStore();

  return (
    <header className="w-full bg-white flex fixed top-0 justify-center text-black1 z-50 border-b border-gray-200">
      <div className="lg:max-w-[1440px] h-14 lg:h-20 flex w-full items-center justify-between md:gap-x-4 lg:gap-x-8 px-2 md:px-4 lg:px-5">
        <div className="w-full flex items-center justify-between lg:gap-x-8">
          <div className="mr-auto block lg:hidden">
            <Button
              onClick={() => toggle()}
              isIconOnly
              className="bg-blue-100 rounded-md"
            >
              {showInMobile ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </Button>
          </div>
          <div className="lg:mr-auto">
            <h1
              className={classNames(
                "text-base md:text-2xl font-bold text-blue-500 select-none",
                pacifico.className
              )}
            >
              ĐTĐM Nhóm 01
            </h1>
          </div>
          <div className="flex-1 lg:flex items-center justify-center hidden max-w-xl gap-x-4">
            <SearchDocument />
          </div>
        </div>
      </div>
    </header>
  );
});

export default Navbar;

Navbar.displayName = "Navbar";
