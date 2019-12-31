import React from "react";

// components
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

// ! recieveing props from parent component
function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {/* adding projects && to the start means that if we have project then do the map  */}
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
}

export default ProjectList;
