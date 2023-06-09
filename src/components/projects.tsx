import { FaGithub, FaRegFolderOpen } from "react-icons/fa";
import { projectData } from "./projectsData";

const Projects = () => {
  return (
    <div className="project-container">
      <h1 className="section-header">My Projects</h1>

      <div className="grid">
        {projectData.map((project) => (
          <div className="card" key={project.id}>

            <div className="">
              <a href={project.link}>
                <FaGithub className="text-2xl"/>
              </a>
            </div>
            <h1 className="title">{project.title}</h1>
            <p className="desc">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
