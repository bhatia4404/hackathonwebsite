export function NavItem({
  svglink,
  heading,
}: {
  svglink: string;
  heading: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <img src={svglink} className="h-[25px]" />
      <p className="text-xs">{heading}</p>
    </div>
  );
}

export function ForCompaniesInstitues() {
  return (
    <>
      <button className="flex border-2 border-[#2f426f] px-2 py-1 rounded-full">
        For Companies/Institutes
      </button>
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
