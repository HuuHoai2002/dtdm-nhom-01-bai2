"use client";

import useClickOutside from "@/hooks/use-click-outside";
import { useMediaQueryContext } from "@/hooks/use-media-query";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import SidebarItem from "./sidebar-item";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { showInMobile, hide } = useSidebarStore();

  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const { isDesktop } = useMediaQueryContext();

  useClickOutside(sidebarRef, () => !isDesktop && showInMobile && hide());

  return (
    <aside
      className={classNames(
        "fixed top-0 left-0 z-40 w-64 h-screen pt-[68px] lg:pt-[92px] transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700",
        {
          "!translate-x-0": showInMobile,
        }
      )}
      ref={sidebarRef}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <div className="space-y-1">
          <SidebarItem isActive icon={<FontAwesomeIcon icon={faBookAtlas} />}>
            Quản lý văn bản
          </SidebarItem>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
