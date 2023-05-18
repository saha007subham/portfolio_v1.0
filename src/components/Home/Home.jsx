import Typewriter from "../Typewriter/Typewriter";
import profile from "../../assets/FB-Profile-Pic.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import ResumeButton from "../Resume/Resume";

const Home = () => {
  const text = "Frontend Developer";

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      id="home"
      className={`sm:flex justify-center h-[100vh] ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-[#edf2f8] text-black"
      }`}
    >
      <div className="w-1/2 flex justify-center items-center pt-5 max-[400px]:w-full max-[400px]:mt-10 max-[400px]:pt-10">
        <img
          src={profile}
          alt="profile"
          className="w-[50%] rounded-full h-[50%]"
        />
      </div>
      <div className="w-1/2 flex items-center mt-5 max-[400px]:w-full max-[400px]:p-8">
        <div className="p-3">
          <p className="text-2xl font-semibold">Hello, my name is</p>
          <h1 className="text-[50px] font-bold">Subham Saha</h1>
          <Typewriter text={text} />
          <ResumeButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
