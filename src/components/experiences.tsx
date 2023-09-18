const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="section-header">Experience</h1>
      <div className="experience-grid">
        <div className="experience-node">
          <h1 className="position-title"> Software Engineer Intern</h1>
          <h2 className="position-company">
            U.S. Army Engineer Center for Research and Development
          </h2>
          <h3 className="position-duration">May 2023 - Present</h3>
          <p>
            Developing a full-stack web application that functions as a library
            for clients to search and view the data for their military project.
          </p>
          <p>
            Successfully deployed 400+ unique pages with next.js static site
            generation.
          </p>
          <p>
            Implemented unit testing with jest to guarantee successful
            deployment of 400+ unique pages with next.js static site
            generation.
          </p>
          <p>
            Utilizing a react/next.js framework, typescript, SQL, and node.js
            stack.
          </p>
          <p className="text-xs">
            Skills: Typescript, Gitlab, Node.JS, Next.JS, Docker, SQL, Microsoft
            SQL Server
          </p>
        </div>

        <div className="experience-node">
          <h1 className="position-title"> Technology Consultant</h1>
          <h2 className="position-company">Arizona State University</h2>
          <h3 className="position-duration">August 2022 - Present</h3>
          <p>
            Resolves computer hardware and software issues. Re-images computers
            and devices. Troubleshoots fax machines and printers.
          </p>
          <p className="text-xs">
            Skills: Linux, Unix, Powershell, Customer Support
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experience;
