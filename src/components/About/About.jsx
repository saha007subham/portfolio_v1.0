import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import coding from "../../assets/coding1.png.png";

const About = () => {
  const [aboutMe, setAboutMe] = useState(true);
  const [experience, setExperience] = useState(false);

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      id="about"
      className={`${
        isDarkTheme ? "bg-[#1a202c] text-white" : "bg-white text-black"
      } p-5 pt-10`}
    >
      <div className="text-center text-3xl font-bold p-3 pt-10 mb-4">
        <h1>
          All <span className="text-red-600">About</span> Me And My{" "}
          <span className="text-red-600">Experience</span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-8 p-4">
        <button
          className={`${
            aboutMe ? "bg-red-600 text-white" : "bg-[#edf2f8] text-black"
          } pl-5 pr-5 pt-1 pb-2 rounded mt-3 font-semibold shadow-md`}
          onClick={() => {
            setAboutMe(true);
            setExperience(false);
          }}
        >
          About Me
        </button>
        <button
          className={`${
            experience ? "bg-red-600 text-white" : "bg-[#edf2f8] text-black"
          } pl-5 pr-5 pt-1 pb-2 rounded mt-3 font-semibold shadow-md`}
          onClick={() => {
            setExperience(true);
            setAboutMe(false);
          }}
        >
          Experience
        </button>
      </div>
      <div className="flex justify-center items-center p-3 max-[400px]:block">
        <div>
          <img src={coding} className="w-[90%]" />
        </div>
        <div>{aboutMe ? <AboutMe /> : <Experience />}</div>
      </div>
    </div>
  );
};

export default About;
