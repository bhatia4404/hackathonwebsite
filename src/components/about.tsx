import map from "../img/map.svg";
import presidentImg from "../img/president.jpg";
export function About() {
  return (
    <div className="about rounded-xl pb-[80px] bg-white mt-[50px] rounded-3xl px-8 py-5 flex flex-col gap-6">
      <h1 className=" text-3xl font-bold text-[#00009C]">About us</h1>
      <div className="university flex gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/ae/J.C._Bose_University_of_Science_and_Technology%2C_YMCA_logo.png"
          className="h-[80px]"
        />
        <div className="details flex flex-col gap-2 justify-center">
          <div className="flex flex-col gap-4">
            <a
              className="text-[12px] font-semibold flex h-[15px] -mx-[5px] whitespace-nowrap gap-3"
              href="https://www.google.com/maps/place/J.C.+Bose+University+of+Science+and+Technology,+YMCA+(Formerly+YMCA+UST)/@28.3675686,77.3147236,18.3z/data=!4m6!3m5!1s0x390cdc71f6e9f557:0xeb301eec9ff18517!8m2!3d28.3674749!4d77.3158949!16s%2Fm%2F02vvttl?entry=ttu"
              target="__blank"
            >
              <img src={map} alt="" className="h-[30px]" />
              <p className="text-xl">
                J.C Bose University of Sscience And Technology, YMCA
              </p>
            </a>
            <p className="font-semibold">
              6, NH-19, Sector 6, Faridabad, Haryana 121006
            </p>
          </div>
          <p className="font-[400] text-sm">
            J.C. Bose University is a leading institution committed to fostering
            innovation and excellence. Our diverse range of academic programs
            and research initiatives provide students with the skills and
            knowledge needed to succeed in today's competitive world. With a
            strong focus on industry partnerships and a vibrant campus culture,
            we are proud to host this hackathon and support our students in
            developing innovative solutions to real-world challenges.
          </p>
        </div>
      </div>
      <div className="recent_events  flex flex-col gap-5">
        <h1 className=" text-2xl font-bold text-[#00009C]">Recent Events</h1>
        <div className="recent_event_details flex gap-6">
          <img
            src={presidentImg}
            alt="President at J.C Bose university of Science and Technology, YMCA"
            title="President at J.C Bose university of Science and Technology, YMCA"
            className="w-[300px] h-[200px] rounded-xl"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold text-[#00009C]">
              Hon'ble President's Visit
            </h1>
            <p className="font-semibold text-sm flex flex-col justify-center">
              Hon'ble President Droupadi Murmu at our university for
              Convocation'24
              <br />
              It was a momentous occasion for our university when the esteemed
              President of India graced our convocation ceremony with her
              presence. Her inspiring address, filled with words of wisdom and
              encouragement, left a lasting impression on the graduating class.
              The students were thrilled to receive their degrees from such a
              distinguished figure, and the event was a testament to our
              university’s commitment to academic excellence and national
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
