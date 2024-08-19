export function SideBarElement({ text, svg }: { text: string; svg: any }) {
  return (
    <button
      className="flex flex-col items-center hover:bg-blue-100 px-2 transition-all duration-300 rounded-md"
      onClick={() => {
        document.getElementById(text.toLowerCase())?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <img src={svg} className="h-[30px]" />
      <p className="text-xs font-semibold">{text}</p>
    </button>
  );
}

export function HorizontalSideBarElement({
  text,
  svg,
}: {
  text: string;
  svg: any;
}) {
  return (
    <button
      className="flex gap-4 items-center hover:bg-blue-100 px-2 transition-all duration-300 rounded-md"
      onClick={() => {
        document.getElementById(text.toLowerCase())?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <img src={svg} className="h-[30px]" />
      <p className="text-[16px] font-bold text-[#00009C]">{text}</p>
    </button>
  );
}
