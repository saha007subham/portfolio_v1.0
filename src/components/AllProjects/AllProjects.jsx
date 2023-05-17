import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../utils/projects";

const AllProjects = () => {
  return (
    <div className="flex flex-wrap justify-around mt-8 pt-4">
      {projects.map((data) => {
        return <ProjectCard {...data} key={data.id} />;
      })}
    </div>
  );
};

export default AllProjects;
