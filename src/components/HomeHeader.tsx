import gdsc from "../img/gdsc.png";
import map from "../img/map.svg";
import registerIcon from "../img/register.svg";
import eyeIcon from "../img/eye.svg";
import teamIcon from "../img/team.svg";
import prizeIcon from "../img/prizeBlue.svg";
import timeRemainingIcon from "../img/calenderclock.svg";

function Theme({ theme }: { theme: string }) {
  return <p className="px-3 py-1 bg-white rounded-2xl w-fit">#{theme}</p>;
}
function Themes({ themes }: { themes: string[] }) {
  return (
    <div className="grid grid-cols-7 w-[60%]">
      {themes.map((theme, i) => (
        <Theme theme={theme} key={i + 1} />
      ))}
    </div>
  );
}
function HeaderTab({
  icon,
  heading,
  text,
}: {
  icon: any;
  heading: string;
  text: string;
}) {
  return (
    <div className="bg-white px-5 py-4 rounded-2xl">
      <div className="flex gap-4">
        <div className="bg-[#ccfdff] px-1 py-1 rounded-full">
          <img src={icon} className="h-[30px]" />
        </div>
        <div className="">
          <h2 className="font-bold text-[#00B9E8] text-[14px]">{heading}</h2>
          <p className="text-[12px] font-semibold">{text}</p>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <div className="">
          <img src={gdsc} className="w-[60px]" alt="" />
        </div>
        <div className="flex flex-col">
          <p className="text-3xl text-[#00009C] font-bold">HACK 4 COSMOS</p>

          <a
            className="text-[12px] font-semibold flex h-[15px] -mx-[5px] whitespace-nowrap"
            href="https://www.google.com/maps/place/J.C.+Bose+University+of+Science+and+Technology,+YMCA+(Formerly+YMCA+UST)/@28.3675686,77.3147236,18.3z/data=!4m6!3m5!1s0x390cdc71f6e9f557:0xeb301eec9ff18517!8m2!3d28.3674749!4d77.3158949!16s%2Fm%2F02vvttl?entry=ttu"
            target="__blank"
          >
            <img src={map} alt="" />
            <p>J.C Bose University of Sscience And Technology, YMCA</p>
          </a>
        </div>
      </div>

      <Themes
        themes={[
          "theme1",
          "theme2",
          "theme3",
          "theme4",
          "theme5",
          "theme6",
          "theme7",
        ]}
      />
      <div className="flex justify-between">
        <HeaderTab icon={registerIcon} heading={"2000"} text="Registered" />
        <HeaderTab icon={eyeIcon} heading={"30000"} text="Impressions" />
        <HeaderTab icon={teamIcon} heading={"1-4"} text="Team size" />
        <HeaderTab icon={prizeIcon} heading={"Up to 30,0000"} text="Prizes" />
        <HeaderTab
          icon={timeRemainingIcon}
          heading={"00 D : 00 H : 00M"}
          text="Registration end in"
        />
      </div>
    </div>
  );
}
