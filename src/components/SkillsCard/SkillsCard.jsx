import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

const SkillsCard = ({ name, img }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`w-[70%] p-5 rounded-lg  cursor-pointer shadow-lg mb-12 ${
        isDarkTheme
          ? "bg-slate-900 text-white hover:bg-[#0b111b]"
          : "bg-[#edf2f8] text-black hover:bg-white"
      }`}
    >
      <img src={img} />
      <p className="text-center mt-1 font-semibold">{name}</p>
    </div>
  );
};

export default SkillsCard;
