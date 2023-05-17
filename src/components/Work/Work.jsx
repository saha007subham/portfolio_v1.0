import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/themeContext";
import Buttons from "../Buttons/Buttons";
import AllProjects from "../AllProjects/AllProjects";
import WebsiteTab from "../WebsiteTab/WebsiteTab";

const Work = () => {
  // Dark Theme
  const { isDarkTheme } = useContext(ThemeContext);

  // Button States
  const [all, setAll] = useState(true);
  const [website, setWebsite] = useState(false);

  // Buttons Functions
  const handleAll = () => {
    setAll(!all);
    setWebsite(false);
  };

  const handleWebSite = () => {
    setWebsite(true);
    setAll(false);
  };

  return (
    <div
      id="work"
      className={` p-5 pt-10 ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-[#edf2f8] text-black"
      }`}
    >
      <div className="text-center text-3xl font-bold p-3 pt-10 mb-4">
        <h1>
          My Creative <span className="text-red-600">Portfolio</span> Section
        </h1>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        {[
          {
            name: "Completed",
            state: all,
            onClick: handleAll,
            color1: "bg-red-600 text-white",
            color2: "bg-[#edf2f8] text-black",
          },
          {
            name: "Working On",
            state: website,
            onClick: handleWebSite,
            color1: "bg-red-600 text-white",
            color2: "bg-[#edf2f8] text-black",
          },
        ].map((data, idx) => {
          return (
            <Buttons
              name={data.name}
              onClick={data.onClick}
              state={data.state}
              color1={data.color1}
              color2={data.color2}
              key={idx}
            />
          );
        })}
      </div>
      <div>
        {all && <AllProjects />}
        {website && <WebsiteTab />}
      </div>
    </div>
  );
};

export default Work;
