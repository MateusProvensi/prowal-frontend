/* eslint-disable jsx-a11y/control-has-associated-label */
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";

import { cn } from "../../../app/utils/cn";

import { SidebarGroupItem } from "./components/SidebarGroupItem";
import { SidebarItem } from "./components/SidebarItem";
import { useSideBar } from "./useSideBar";

export function SideBar() {
  const { groupsSideBar, handleChangeOpenSideBar, isSideBarOpen } =
    useSideBar();

  const { pathname } = useLocation();

  return (
    <div
      className={cn(
        "bg-blue-violet-950 py-5 pr-5 pt-8 relative duration-300 w-20 flex flex-col",
        isSideBarOpen && "w-72",
      )}
    >
      <button
        type="button"
        className={cn(
          "flex justify-center items-center absolute z-10 cursor-pointer -right-3 top-9 w-7 border-blue-violet-950 border-2 rounded-full transition-all duration-500 bg-white text-blue-violet-900",
          isSideBarOpen && "rotate-180",
        )}
        onClick={handleChangeOpenSideBar}
      >
        <ArrowRightIcon height={25} width={40} />
      </button>

      <div className="flex gap-x-4 items-center ml-2">
        <img
          alt="Logo"
          src="./src/assets/logo.png"
          className={cn(
            "cursor-pointer duration-500 text-blue-violet-100",
            isSideBarOpen && "rotate-[360deg]",
          )}
        />

        <h1
          className={cn(
            "text-blue-violet-100 origin-left font-medium text-xl duration-200",
            !isSideBarOpen && "scale-0",
          )}
        >
          ProWal
        </h1>
      </div>

      <div className="flex flex-col pt-6 gap-y-5">
        {groupsSideBar.map((group) => (
          <SidebarGroupItem
            key={group.title}
            groupTitle={group.title}
            isOpen={isSideBarOpen}
          >
            {group.itens.map((item) => (
              <SidebarItem
                isSideOpen={isSideBarOpen}
                icon={item.icon}
                title={item.title}
                active={pathname === item.url}
                to={item.url}
              />
            ))}
          </SidebarGroupItem>
        ))}
      </div>
    </div>
  );
}
