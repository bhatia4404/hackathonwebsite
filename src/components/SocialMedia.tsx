import linkedInIcon from "../img/linkedIn.svg";
import instagramIcon from "../img/instagram.svg";
import websiteIcon from "../img/website.svg";
function MediaHandle({ icon, link }: { icon: any; link: string }) {
  return (
    <a href={link} target="__blank">
      <img src={icon} className="h-[30px]" />
    </a>
  );
}

export function MediaHandles() {
  return (
    <div className="flex gap-7 mt-3">
      <MediaHandle
        icon={linkedInIcon}
        link="https://www.linkedin.com/company/gdsc-jcboseust"
      />
      <MediaHandle
        icon={instagramIcon}
        link="https://www.instagram.com/gdsc_jcbust/"
      />
      <MediaHandle
        icon={websiteIcon}
        link="https://gdsc.community.dev/j-c-bose-university-of-science-and-technology-faridabad-india/"
      />
    </div>
  );
}
