import React from "react";

interface SidebarGroupItemProps {
  groupTitle: string;
  children: React.ReactNode;
  isOpen: boolean;
}

export function SidebarGroupItem({
  children,
  groupTitle,
  isOpen,
}: SidebarGroupItemProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <span
        className={`text-blue-violet-100 text-center ${!isOpen && "scale-0 hidden"} duration-200`}
      >
        {groupTitle}
      </span>

      <div className="flex flex-col gap-y-1">{children}</div>
    </div>
  );
}
