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
      <p className="text-xs whitespace-nowrap">{heading}</p>
    </div>
  );
}

export function ForCompaniesInstitues() {
  return (
    <>
      <Link
        className="flex border-2 border-[#2f426f] px-2 py-1 rounded-full whitespace-nowrap"
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
      <button className="text-white bg-[#2f426f] px-3 py-1 text-xl rounded-full">
        Login
      </button>
    </>
  );
}
