import { useState } from "react";

export function ExpandableSectionElement({
  heading,
  content,
  collapsedClass,
}: {
  heading: string;
  content: any;
  collapsedClass: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const classname = `content text-[#3B3C36] overflow-hidden text-sm h-fit ${
    !expanded ? collapsedClass : ""
  }`;
  return (
    <div className="bg-white mx-5 mt-5 rounded-xl px-5 py-3">
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
