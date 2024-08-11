import { HomepageNavBar } from "../components/NavBar";
import { ExpandableSectionElement } from "../components/Section";
import H4CBanner from "../img/H4C_BANNER.png";
export function Home() {
  return (
    <div className="bg-[#F5F5F5] h-screen">
      <HomepageNavBar />
      <div className="banner my-[30px] flex flex-col items-center">
        <img src={H4CBanner} className="w-[95%] h-[] rounded-2xl" />
      </div>
      <div className="sections">
        <ExpandableSectionElement
          heading="Overview"
          collapsedClass="collapsed_overview"
          content={
            <p className="text-[#3B3C36]">
              <strong>HACK4COSMOS</strong> is a prestigious 2-Day long National
              Level Hackathon proudly presented by Google Developer Students
              Club, J.C. Bose University of Science and Technology, YMCA,
              Faridabad.
              <br />
              <br /> <strong>HACK4COSMOS</strong> is an intense, collaborative
              hackathon where talented participants across the nation will work
              together in teams to solve problems and develop creative solutions
              within a 24 hour timeframe. It shall focus on coding challenges
              designed to test students' logical thinking, problem-solving
              abilities, and coding expertise in an offline environment.
            </p>
          }
        />
        <ExpandableSectionElement
          heading="Guidelines"
          collapsedClass="collapsed_guideline"
          content={
            <>
              <p>
                You need to build an application (website, app, etc) using{" "}
                <a href="https://cosmocloud.io">Cosmocloud</a> as your Backend
                layer for APIs <strong>(mandatory).</strong>
              </p>
              <p>
                Additionally, you can use these for bonus points in your
                submission -
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
                We invite all working professionals and students to take part in
                this hackathon. We have <strong>two tracks</strong> for
                participants to register into -
              </p>
              <br />
              <ol className="list-decimal px-5 flex flex-col gap-1">
                <li className="">
                  <strong>Working Professionals &amp; Engineers&nbsp;</strong>-
                  For teams (or an individual) who are already working in the
                  industry
                </li>
                <li>
                  <strong>Students</strong> - For those who are currently
                  enrolled in any graduation / post graduation course
                </li>
              </ol>
              <br />
              <p>
                You would need to form a team with a maximum of 4 people, as
                well as a single member team is also allowed.
              </p>
            </>
          }
        />
        <ExpandableSectionElement
          heading="Resources"
          collapsedClass=""
          content={
            <>
              <p>
                To get started with Cosmocloud, you can checkout the following
                resources -
              </p>
              <ul>
                <li>
                  <a href="https://cosmocloud.io">
                    Sign up with Cosmocloud for Free
                  </a>
                </li>
                <li>
                  <a href="https://docs.cosmocloud.io">
                    Cosmocloud Documentation
                  </a>
                </li>
                <li>
                  <a href="https://docs.cosmocloud.io/getting-started">
                    Getting Started with Cosmocloud in 10 minutes
                  </a>
                </li>
                <li>
                  <a href="https://tutorials.cosmocloud.io">Sample Tutorials</a>
                </li>
                <li></li>
              </ul>
            </>
          }
        />
      </div>
    </div>
  );
}
