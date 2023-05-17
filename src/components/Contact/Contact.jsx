import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const handleOpenLinkedIn = () =>
    window.open("https://www.linkedin.com/in/saha007subham/", "_blank");

  const handleOpenGithub = () =>
    window.open("https://github.com/saha007subham", "_blank");

  const handleOpenGmail = () => {
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <div
      id="contact"
      className={` p-5 pt-10 ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-[#edf2f8] text-black"
      }`}
    >
      <div className="text-center text-3xl font-bold p-3 pt-10 mb-4">
        <h1>
          Take A <span className="text-red-600">Coffee</span> And
          <span className="text-red-600"> Chat</span> With Me
        </h1>
      </div>
      <div className="mt-10 flex ">
        <div className="w-1/2">
          <img
            src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
            alt="work"
          />
        </div>
        <div className="w-1/2 pl-20 pr-20">
          <div className="flex gap-5">
            <button
              className={`${
                isDarkTheme
                  ? "bg-[#9bdaf3] text-black"
                  : "bg-[#00a0dc] text-white"
              } w-[30%] flex items-center justify-center gap-1 pl-5 pr-5 pt-2 pb-3 mt-3 font-semibold shadow-md rounded-md`}
              onClick={handleOpenLinkedIn}
            >
              <FaLinkedin size={20} />
              LinkedIn
            </button>
            <button
              className={`${
                isDarkTheme
                  ? "bg-[#373b41] text-white"
                  : "bg-[#373b41] text-white"
              } w-[30%] flex items-center justify-center gap-1 pl-5 pr-5 pt-2 pb-3 mt-3 font-semibold shadow-md rounded-md`}
              onClick={handleOpenGithub}
            >
              <FaGithubSquare size={20} />
              GitHub
            </button>
            <button
              className={`${
                isDarkTheme
                  ? "bg-[#feb2b2] text-black"
                  : "bg-red-600 text-white"
              } w-[30%] flex items-center justify-center gap-1 pl-5 pr-5 pt-2 pb-3 mt-3 font-semibold shadow-md rounded-md`}
              onClick={handleOpenGmail}
            >
              <MdEmail size={20} />
              Gmail
            </button>
          </div>
          <div className="flex flex-col mt-10">
            <input
              placeholder="Name"
              className={`mb-5 p-3 rounded-lg shadow-md outline-none ${
                isDarkTheme ? "text-black" : "text-black"
              }`}
            />
            <input
              placeholder="Email"
              className={`mb-5 p-3 rounded-lg shadow-md outline-none ${
                isDarkTheme ? "text-black" : "text-black"
              }`}
            />
            <input
              placeholder="Number"
              type="number"
              className={`mb-5 p-3 rounded-lg shadow-md outline-none ${
                isDarkTheme ? "text-black" : "text-black"
              }`}
            />
            <input
              placeholder="Your Message"
              className={`mb-5 p-3 rounded-lg shadow-md h-[20vh] outline-none ${
                isDarkTheme ? "text-black" : "text-black"
              }`}
            />
            <button className="pl-5 pr-5 pt-2 pb-3 rounded-lg text-white mt-3 font-semibold shadow-md bg-red-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <p className="text-center">
          Designed and build by Subham Saha, 2023 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
