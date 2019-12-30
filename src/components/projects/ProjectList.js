import React from "react";

// components
import ProjectSummary from "./ProjectSummary";

// ! recieveing props from parent component
function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {/* adding projects && to the start means that if we have project then do the map  */}
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
}

export default ProjectList;
