import { HomepageNavBar } from "../components/NavBar";
import { ExpandableSectionElement } from "../components/Section";
import { SideBar } from "../components/Sidebar";
import H4CBanner from "../img/H4C_BANNER.svg";
import trophyImg from "../img/trophy.png";
import { PhasesContent } from "../components/Phases";
import { MediaHandles } from "../components/SocialMedia";
import { Header } from "../components/HomeHeader";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <HomepageNavBar />
      <div>
        <div className="banner my-[30px] flex flex-col items-center">
          <img src={H4CBanner} className="w-[95%] rounded-2xl" />
        </div>
        <div>
          <div className="flex gap-8 w-[95%] m-auto">
            <div className="flex  flex-col gap-6">
              <Header />

              <div>
                <div className="flex m-auto gap-8">
                  <SideBar />
                  <div className="sections flex flex-col gap-4">
                    <ExpandableSectionElement
                      heading="Overview"
                      collapsedClass="collapsed_overview"
                      content={
                        <p className="text-[#3B3C36]">
                          <strong>HACK4COSMOS</strong> is a prestigious 2-Day
                          long National Level Hackathon proudly presented by
                          Google Developer Students Club, J.C. Bose University
                          of Science and Technology, YMCA, Faridabad.
                          <br />
                          <br /> <strong>HACK4COSMOS</strong> is an intense,
                          collaborative hackathon where talented participants
                          across the nation will work together in teams to solve
                          problems and develop creative solutions within a 24
                          hour timeframe. It shall focus on coding challenges
                          designed to test students' logical thinking,
                          problem-solving abilities, and coding expertise in an
                          offline environment.
                        </p>
                      }
                    />
                    <ExpandableSectionElement
                      heading="Guidelines"
                      collapsedClass="collapsed_guideline"
                      content={
                        <>
                          <p>
                            You need to build an application (website, app, etc)
                            using <a href="https://cosmocloud.io">Cosmocloud</a>{" "}
                            as your Backend layer for APIs{" "}
                            <strong>(mandatory).</strong>
                          </p>
                          <p>
                            Additionally, you can use these for bonus points in
                            your submission -
                          </p>
                          <br />
                          <ul className="list-disc px-5 font-semibold text-[15px] flex flex-col gap-1">
                            <li>
                              <a href="https://idx.dev/">Google IDX Platform</a>
                            </li>
                            <li>
                              <a href="https://firebase.google.com/docs/genkit">
                                Firebase Genkit
                              </a>
                            </li>
                            <li>
                              <a href="https://www.mongodb.com/products/platform/atlas-vector-search">
                                MongoDB Atlas Vector Search
                              </a>
                            </li>
                            <li>
                              <a href="https://gemini.google.com/?hl=en-IN">
                                Google Gemini AI
                              </a>
                            </li>
                          </ul>
                          <br />
                          <p>
                            We invite all working professionals and students to
                            take part in this hackathon. We have{" "}
                            <strong>two tracks</strong> for participants to
                            register into -
                          </p>
                          <br />
                          <ol className="list-decimal px-5 flex flex-col gap-1">
                            <li className="">
                              <strong>
                                Working Professionals &amp; Engineers&nbsp;
                              </strong>
                              - For teams (or an individual) who are already
                              working in the industry
                            </li>
                            <li>
                              <strong>Students</strong> - For those who are
                              currently enrolled in any graduation / post
                              graduation course
                            </li>
                          </ol>
                          <br />
                          <p>
                            You would need to form a team with a maximum of 4
                            people, as well as a single member team is also
                            allowed.
                          </p>
                        </>
                      }
                    />
                    <ExpandableSectionElement
                      heading="Resources"
                      collapsedClass=""
                      content={<div className="h-[130px]"></div>}
                    />
                    <ExpandableSectionElement
                      heading="Prizes"
                      content={
                        <div className="bg-[#F0F8FF] w-[200px] px-6 py-5 flex flex-col gap-3 rounded-2xl mt-[10px]">
                          <div className="flex gap-4">
                            <img
                              src={trophyImg}
                              alt=""
                              className="w-[50px] h-[60px]"
                            />
                            <p>Total Prize Pool</p>
                          </div>
                          <div>
                            <h2 className="font-bold text-[#00009C] text-lg">
                              ₹ 30,000
                            </h2>
                          </div>
                          <p className="">
                            The total prize pool of the{" "}
                            <b className="text-[#00009C]">
                              HACK 4 COSMOS Hackathon{" "}
                            </b>{" "}
                            is ₹12,00,000 which includes cash prizes, credits
                            and other perks.{" "}
                          </p>
                        </div>
                      }
                      collapsedClass=""
                    />
                    <ExpandableSectionElement
                      heading="Themes"
                      content={
                        <div className="bg-[#F0F8FF] w-[200px]  py-10 text-center rounded-xl mt-[10px]">
                          <p className="font-bold text-[#00009C]">
                            To be accounced
                          </p>
                        </div>
                      }
                      collapsedClass=""
                    />
                    <ExpandableSectionElement
                      heading="Sponsors"
                      content={
                        <div className="bg-[#F0F8FF] w-[200px]  py-10 text-center rounded-xl mt-[10px]">
                          <p className="font-bold text-[#00009C]">
                            To be accounced
                          </p>
                        </div>
                      }
                      collapsedClass=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-around">
                <button
                  disabled={true}
                  className="bg-white px-3 py-1 rounded-xl"
                >
                  FREE
                </button>
                <Link
                  className="bg-[#00009C] text-white font-semibold  px-3 py-1 rounded-xl"
                  to={""}
                >
                  Login & Participate
                </Link>
              </div>
              <ExpandableSectionElement
                heading="Phases"
                content={<PhasesContent />}
                collapsedClass=""
              />
              <ExpandableSectionElement
                heading="Social Links"
                content={<MediaHandles />}
                collapsedClass=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
