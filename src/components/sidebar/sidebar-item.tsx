"use client";

import classNames from "classnames";
import React from "react";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  icon,
  isActive,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "rounded-md w-full px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 active:scale-[0.98] duration-150 select-none cursor-pointer",
        {
          "!bg-blue-100": isActive,
        }
      )}
      {...props}
    >
      <div
        className={classNames({
          "text-blue-500": isActive,
        })}
      >
        {icon}
      </div>
      {children}
    </div>
  );
};

export default SidebarItem;
