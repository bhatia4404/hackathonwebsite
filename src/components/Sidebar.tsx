import overviewIcon from "../img/overview.svg";
import resourcesIcon from "../img/resources.svg";
import prizesIcon from "../img/prizes.svg";
import themesIcon from "../img/themes.svg";
import moreIcon from "../img/more.svg";
import sponsorImg from "../img/sponsor.svg";
import { SideBarElement } from "./SideBarElement";
export function SideBar() {
  return (
    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-white h-fit">
      <SideBarElement text="Overview" svg={overviewIcon} />
      <SideBarElement text="Resources" svg={resourcesIcon} />
      <SideBarElement text="Prizes" svg={prizesIcon} />
      <SideBarElement text="Themes" svg={themesIcon} />
      <SideBarElement text="More" svg={moreIcon} />
      <SideBarElement text="Sponsors" svg={sponsorImg} />
    </div>
  );
}
