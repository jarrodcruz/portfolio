import {
  FaJava,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaNode,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiScikitlearn,
  SiTensorflow,
  SiPostgresql,
  SiTypescript,
  SiMicrosoftsqlserver,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";
const Skills = () => {
  return (
    <div className="skills-container  ">
      <h1 className="text-4xl justify-center text-center">Skills</h1>
      <h1 className="skills-header">Programming Languages</h1>

      <div className="grid-skills basis-1/3">
        <div className="skill-card ">
          <FaJava />
          Java
        </div>
        <div className="skill-card ">
          <FaPython />
          Python
        </div>
        <div className="skill-card ">
          <SiCplusplus />
          C++
        </div>
      </div>
      <h1 className="skills-header">Full Stack Development</h1>

      <div className="grid-skills basis-1/3">
        <div className="skill-card ">
          <FaGitAlt />
          Git
        </div>
        <div className="skill-card ">
          <FaDocker />
          Docker
        </div>
        <div className="skill-card ">
          <FaNode />
          Node.JS
        </div>
        <div className="skill-card ">
          <FaReact />
          React.JS
        </div>
        <div className="skill-card ">
          <SiTypescript />
          TypeScript
        </div>
        <div className="skill-card ">
          <SiPostgresql />
          PostgreSQL
        </div>
        <div className="skill-card ">
          <SiMicrosoftsqlserver />
          SQL server
        </div>
        <div className="skill-card ">
          <SiTailwindcss />
          Tailwind CSS
        </div>
        <div className="skill-card ">
          <SiHtml5 />
          HTML
        </div>
      </div>
      <h1 className="skills-header"> Machine Learning</h1>

      <div className="grid-skills basis-1/3">
        <div className="skill-card ">
          <SiScikitlearn />
          SciKit Learn
        </div>
        <div className="skill-card ">
          <SiTensorflow />
          Tensorflow
        </div>
      </div>
    </div>
  );
};
export default Skills;
