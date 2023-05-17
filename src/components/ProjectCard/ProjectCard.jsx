import { useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "../../Context/themeContext";

const ProjectCard = ({ img, name, des, span, stack, url, github }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const handleIconClick = () => {
    window.open(url, "_blank");
  };

  const handleOpenGit = () => {
    window.open(github, "_blank");
  };

  return (
    <div
      className={`${
        isDarkTheme ? "bg-[#0b111b] text-white" : "bg-white text-black"
      } w-[45%] p-7 rounded-xl mb-14 shadow-md`}
    >
      <img src={img} alt="zwigato" className="w-full rounded-lg" />
      <p className="text-xl font-bold text-center mt-3">{name}</p>
      <p className="text-sm mt-2">{des}</p>
      <p className="mt-3 text-sm">
        <span className="text-sm text-red-600">{span} </span> {stack}
      </p>
      <div className="flex justify-evenly items-center mt-3">
        <div className="hover:bg-red-600 p-3 rounded-full cursor-pointer">
          <FaVideo size={30} />
        </div>
        <div className="hover:bg-red-600 p-3 rounded-full cursor-pointer">
          <FaEye size={30} onClick={handleIconClick} />
        </div>
        <div className="hover:bg-red-600 p-3 rounded-full cursor-pointer">
          <FaGithub size={30} onClick={handleOpenGit} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
