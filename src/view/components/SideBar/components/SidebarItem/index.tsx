import { Link } from "react-router-dom";

import { cn } from "../../../../../app/utils/cn";
import { SideBarIcon } from "../../../icons/sidebar/SideBarIcon";

interface SidebarItemProps {
  icon: string;
  title: string;
  to: string;
  isSideOpen: boolean;
  active: boolean;
}

export function SidebarItem({
  icon,
  title,
  to,
  isSideOpen,
  active,
}: SidebarItemProps) {
  return (
    <div className="flex flex-row gap-x-2">
      <div
        className={`p-0 w-2 border-r-8 rounded-r-md ${active ? `border-blue-violet-600` : "border-transparent"}`}
      />

      <Link
        to={to}
        className={cn(
          "flex-1 flex flex-row p-2 cursor-pointer items-center gap-x-4 rounded-md hover:bg-blue-violet-50/20 text-gray-300 text-sm",
          active && "bg-blue-violet-50/20 pointer-events-none",
        )}
      >
        <SideBarIcon tipo={icon} />

        <span
          className={cn("origin-left duration-200", !isSideOpen && "hidden")}
        >
          {title}
        </span>
      </Link>
    </div>
  );
}
