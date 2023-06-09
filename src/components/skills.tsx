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
  SiR,
} from "react-icons/si";
const Skills = () => {
  return (
    <div className="skills-container  ">
      <h1 className="section-header">Skills</h1>
      <p> Here's some of the technologies I use, any that are not listed I am quick to learn {":)"}</p>
      <h1 className="skills-header">Programming Languages</h1>
      <p>
        I am very comfortable and proficient using all of these languages, but for projects I
        tend to gravitate to specific ones depending on what I want my project
        to achieve. For ML/DS projects I use python. For web applications I use
        the technologies listed in the full stack section.
      </p>
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
      <p>
        I'm most comfortable with typescript and react frameworks. For databases
        I am most familiar with PostgreSQL and SQL. I use these to build
        client-side applications, and develop the back-end with node. I am also
        familiar with NextJS and GatsbyJs.
      </p>
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
      <p>
        In my projects I use common packages such as numpy, pandas, tensorflow,
        and scikit-learn. For creating data visualizations I use plotly.I also
        am fluent in R, where I have built Data Analysis projects and am
        familiar with some of their machine learning packages.
      </p>
      <div className="grid-skills basis-1/3">
        <div className="skill-card ">
          <SiScikitlearn />
          SciKit Learn
        </div>
        <div className="skill-card ">
          <SiTensorflow />
          Tensorflow
        </div>
        <div className="skill-card">
          <SiR />R
        </div>
      </div>
    </div>
  );
};
export default Skills;
