import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import SkillsCard from "../SkillsCard/SkillsCard";
import { skills } from "../../utils/skills";

const Skills = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      id="skills"
      className={`${
        isDarkTheme ? "bg-[#1a202c] text-white" : "bg-white text-black"
      } p-5 pt-10`}
    >
      <div className="text-center text-3xl font-bold p-3 pt-10 mb-4">
        <h1>
          My <span className="text-red-600">Technical</span> Skills
        </h1>
      </div>

      <div className="grid grid-cols-6 place-items-center p-5 pb-0">
        {skills.map((skill) => {
          return <SkillsCard {...skill} key={skill.id} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
