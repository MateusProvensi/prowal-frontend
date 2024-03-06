import { DashboardIcon } from "./DashboardIcon";
import { iconsMap } from "./iconsMap";

interface SideBarIconProps {
  tipo: string;
}

export function SideBarIcon({ tipo }: SideBarIconProps) {
  const Icon =
    iconsMap[(tipo as keyof typeof iconsMap) ?? "U"] ?? DashboardIcon;

  return <Icon height={35} width={35} />;
}
