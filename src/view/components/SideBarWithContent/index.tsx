import { Outlet } from "react-router-dom";

import { SideBar } from "../SideBar";

export function SideBarWithContent() {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex-grow overflow-x-hidden">
        <div className="mb-[30000px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
