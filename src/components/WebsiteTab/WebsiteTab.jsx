import ProjectCard from "../ProjectCard/ProjectCard";
import Dashboard from "../../assets/Dashboard.png";

const WebsiteTab = () => {
  const data = [
    {
      id: 1,
      img: Dashboard,
      name: "University Management System",
      des: "Our MERN stack university management system is user-friendly and scalable an can help you to automates administrative tasks to enhance academic excellence.",
      span: "Tech Stack :",
      stack:
        "HTML, CSS, JavaScript, ReactJS, Redux Toolkit, NodeJS, ExpressJS, MongoDB",
      url: "https://campus-keeper-frontend.vercel.app/",
      github: "https://github.com/subham07-t/campus-keeper-UMS-app",
    },
  ];
  return (
    <div className="flex flex-wrap justify-around mt-8 pt-4">
      {data.map((data) => {
        return <ProjectCard {...data} key={data.id} />;
      })}
    </div>
  );
};

export default WebsiteTab;
