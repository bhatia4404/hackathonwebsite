import { useState } from "react";
export function ExpandableSectionElement({
  heading,
  content,
  collapsedClass,
  hidden,
}: {
  heading: string;
  content: any;
  collapsedClass: string;
  hidden: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const classname = `content text-[#3B3C36] overflow-hidden text-sm h-fit ${
    !expanded ? collapsedClass : ""
  }`;
  return (
    <div
      className={`bg-white rounded-xl px-5 py-3 ${
        hidden ? "max-xl:hidden" : ""
      }`}
      id={`${heading.toLowerCase()}`}
    >
      <h2 className="text-lg font-bold text-[#00009C]">{heading}</h2>
      <div className={classname}>
        {content}
        <br />
      </div>
      {collapsedClass ? (
        <button
          className="text-[#00B9E8] font-bold"
          onClick={() => {
            setExpanded((expanded) => !expanded);
          }}
        >
          {expanded ? "View less" : "View more"}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
