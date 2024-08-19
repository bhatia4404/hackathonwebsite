import gdsclogo from "../img/gdsc.png";
import {
  NavItem,
  ForCompaniesInstitues,
  Login,
  NavItemHorizontal,
} from "./navItems";
import menuIcon from "../img/menu.svg";
import closeIcon from "../img/close.svg";
import { useState } from "react";
export function HomepageNavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="h-[50px] bg-white justify-between flex px-8">
        <div className="flex items-center">
          <img src={gdsclogo} alt="" className="h-[30px]" />
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-6 items-center max-lg:hidden">
            <NavItem
              svglink="https://dfxy74dfhcx53.cloudfront.net/images/coaching.svg"
              heading="Saarthi"
            />
            <NavItem
              svglink="https://dfxy74dfhcx53.cloudfront.net/icons/open-innovation-icon.svg"
              heading="Open Innovation"
            />
            <NavItem
              svglink="https://dfxy74dfhcx53.cloudfront.net/icons/blogs-icon.svg"
              heading="Blogs"
            />
            <NavItem
              svglink="https://dfxy74dfhcx53.cloudfront.net/icons/drills-icon.svg"
              heading="Hackathon"
            />
            <NavItem
              svglink="https://dfxy74dfhcx53.cloudfront.net/icons/jobs-icon.svg"
              heading="Jobs"
            />
          </div>
          <ForCompaniesInstitues />
          <Login />
          <div className="lg:hidden">
            <button
              className="flex items-center"
              onClick={() => setShowMenu((showMenu) => !showMenu)}
            >
              <img src={showMenu ? closeIcon : menuIcon} className="h-[25px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className={`flex flex-col py-10 bg-white h-[100%] lg:hidden ${
            showMenu ? "" : "hidden"
          }`}
        >
          <NavItemHorizontal
            svglink="https://dfxy74dfhcx53.cloudfront.net/images/coaching.svg"
            heading="Saarthi"
          />
          <NavItemHorizontal
            svglink="https://dfxy74dfhcx53.cloudfront.net/icons/open-innovation-icon.svg"
            heading="Open Innovation"
          />
          <NavItemHorizontal
            svglink="https://dfxy74dfhcx53.cloudfront.net/icons/blogs-icon.svg"
            heading="Blogs"
          />
          <NavItemHorizontal
            svglink="https://dfxy74dfhcx53.cloudfront.net/icons/drills-icon.svg"
            heading="Hackathon"
          />
          <NavItemHorizontal
            svglink="https://dfxy74dfhcx53.cloudfront.net/icons/jobs-icon.svg"
            heading="Jobs"
          />
          <NavItemHorizontal
            svglink="https://dfxy74dfhcx53.cloudfront.net/images/cooperation.svg"
            heading="Contact Us"
          />
          <NavItemHorizontal
            svglink="https://dfxy74dfhcx53.cloudfront.net/images/namaste.svg"
            heading="About Us"
          />
        </div>
      </div>
    </div>
  );
}
