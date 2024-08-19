import { Link } from "react-router-dom";

export function NavItem({
  svglink,
  heading,
}: {
  svglink: string;
  heading: string;
}) {
  return (
    <div className="flex flex-col items-center lg:visible">
      <img src={svglink} className="h-[25px]" />
      <Link
        to={`/${heading.split(" ")[0].toLowerCase()}`}
        className="text-sm whitespace-nowrap"
      >
        {heading}
      </Link>
    </div>
  );
}
export function NavItemHorizontal({
  svglink,
  heading,
}: {
  svglink: string;
  heading: string;
}) {
  return (
    <div>
      <div className="flex px-10 gap-4 py-3">
        <img src={svglink} className="h-[30px]" />
        <Link
          className="text-lg whitespace-nowrap font-bold text-[#00009C]"
          to={`/${heading.split(" ")[0].toLowerCase()}`}
        >
          {heading}
        </Link>
      </div>
      <hr />
    </div>
  );
}
export function ForCompaniesInstitues() {
  return (
    <>
      <Link
        className="flex border-2 border-[#2f426f] px-2 py-2 rounded-full whitespace-nowrap max-lg:text-xs text-sm"
        to="/employer"
      >
        For Companies/Institutes
      </Link>
    </>
  );
}

export function Login() {
  return (
    <>
      <button className="text-white bg-[#2f426f] px-3 py-1 text-xl rounded-full max-lg:text-sm max-lg:py-2 max-lg:px-4">
        Login
      </button>
    </>
  );
}
