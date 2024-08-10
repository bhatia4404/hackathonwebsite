import gdsclogo from "../img/gdsc.png";
import { NavItem, ForCompaniesInstitues, Login } from "./navItems";
export function HomepageNavBar() {
  return (
    <div className="h-[50px] bg-white justify-between flex px-8">
      <div className="flex items-center">
        <img src={gdsclogo} alt="" className="h-[30px]" />
      </div>
      <div className="flex gap-6 items-center">
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
        <ForCompaniesInstitues />
        <Login />
      </div>
    </div>
  );
}
