const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="section-header">Experience</h1>
      <div className="experience-grid">
        <div className="experience-node">
          <h1 className="position-title"> Data Science Intern</h1>
          <h2 className="position-company">
            Honeywell Aerospace Corporate Headquarters
          </h2>
          <h3 className="position-duration">Aug 2024 - Present</h3>
          <li>
            Implementing and improving a series of machine learning models for
            quarterly forecasting using Python and scikit-learn.
          </li>
          <li>
            Leveraging Spark and Azure Databricks to process and analyze large
            datasets used for machine learning tasks.
          </li>
          <li>
            Participating in weekly standups with various business groups and
            company executives to identify and discuss possible data science
            development opportunities.
          </li>

          <p className="text-xs">
            Skills: Python, Bitbucket, Snowflake, Spark, Databricks, SAP HANA,
            SQL, Microsoft SQL Server Management Studio (SSMS)
          </p>
        </div>
        <div className="experience-node">
          <h1 className="position-title"> AI/ML Engineer Intern</h1>
          <h2 className="position-company">
            Honeywell Aerospace Corporate Headquarters
          </h2>
          <h3 className="position-duration">May 2024 - August 2024</h3>
          <li>
            Designed and implemented a series of machine learning models for
            quarterly forecasting using Python and scikit-learn.
          </li>
          <li>
            Wrangled and cleansed big data using Spark, SQL, and Python to be
            used for predictive AI models.
          </li>
          <li>
            Streamlined ML data preprocessing pipelines by reworking and
            optimizing code, reducing execution time by 50% and ensuring CI/CD
            of different MLOps pipelines.
          </li>
          <li>
            Developed a LLM and Computer Vision company tool to determine
            similarity score of engineering diagrams.
          </li>
          <li>
            Mentored and guided high school interns on NLP and computer vision
            projects as part of the Future IT Leaders Program.
          </li>
          <p className="text-xs">
            Skills: Python, Bitbucket, Snowflake, Spark, Databricks, SAP HANA,
            SQL, Microsoft SQL Server Management Studio (SSMS)
          </p>
        </div>

        <div className="experience-node">
          <h1 className="position-title"> Software Engineer Intern</h1>
          <h2 className="position-company">
            U.S. Army Engineer Center for Research and Development
          </h2>
          <h3 className="position-duration">May 2023 - May 2024</h3>
          <li>
            Migrated C# .NET applications to Typescript, React and Node.JS,
            modernizing company information tools.
          </li>
          <li>
            Developed a project manager application with Next.JS and Docker,
            supporting over 600 military projects containing relevant files and
            documentation for each file.
          </li>
          <li>
            Verified and validated page generation of each of the 600+ unique
            web pages via Jest.
          </li>
          <li>
            Automated and optimized conversion of PDF/RTF files to HTML code
            using Python, allowing for offline viewing of files of the project
            manager app.
          </li>
          <li>
            Utilizing a react/next.js framework, typescript, SQL, and node.js
            stack.
          </li>
          <p className="text-xs">
            Skills: Typescript, Gitlab, Node.JS, Next.JS, Docker, SQL, Microsoft
            SQL Server Management Studio (SSMS)
          </p>
        </div>

        <div className="experience-node">
          <h1 className="position-title"> Technology Consultant</h1>
          <h2 className="position-company">Arizona State University</h2>
          <h3 className="position-duration">August 2022 - Present</h3>
          <li>Resolves computer hardware and software issues.</li>
          <li> Re-images computers and devices.</li>
          <li>Troubleshoots fax machines and printers.</li>
          <p className="text-xs">
            Skills: Linux, Unix, Powershell, Customer Support
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experience;
