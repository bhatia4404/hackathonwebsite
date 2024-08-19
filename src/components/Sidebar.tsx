import overviewIcon from "../img/overview.svg";
import blueOverviewIcon from "../img/blueOverview.svg";
import resourcesIcon from "../img/resources.svg";
import blueResourcesIcon from "../img/blueResources.svg";
import prizesIcon from "../img/prizes.svg";
import bluePrizesIcon from "../img/bluePrizes.svg";
import themesIcon from "../img/themes.svg";
import blueThemesIcon from "../img/blueThemes.svg";
import moreIcon from "../img/more.svg";
import blueMoreIcon from "../img/blueMore.svg";
import sponsorImg from "../img/sponsor.svg";
import blueSponsorIcon from "../img/blueSponsors.svg";
import { HorizontalSideBarElement, SideBarElement } from "./SideBarElement";
export function SideBar() {
  return (
    <div className=" py-4 rounded-2xl bg-white h-fit max-lg:hidden">
      <div className="flex flex-col gap-4">
        <SideBarElement text="Overview" svg={overviewIcon} />
        <SideBarElement text="Resources" svg={resourcesIcon} />
        <SideBarElement text="Prizes" svg={prizesIcon} />
        <SideBarElement text="Themes" svg={themesIcon} />
        <SideBarElement text="More" svg={moreIcon} />
        <SideBarElement text="Sponsors" svg={sponsorImg} />
      </div>
    </div>
  );
}

export function HorizontalSideBar({ visible }: { visible: boolean }) {
  return (
    <div className={`py-4 h-fit lg:hidden ${!visible ? "hidden" : ""}`}>
      <div className="flex flex-col gap-4">
        <HorizontalSideBarElement text="Overview" svg={blueOverviewIcon} />
        <HorizontalSideBarElement text="Resources" svg={blueResourcesIcon} />
        <HorizontalSideBarElement text="Prizes" svg={bluePrizesIcon} />
        <HorizontalSideBarElement text="Themes" svg={blueThemesIcon} />
        <HorizontalSideBarElement text="More" svg={blueMoreIcon} />
        <HorizontalSideBarElement text="Sponsors" svg={blueSponsorIcon} />
      </div>
    </div>
  );
}
