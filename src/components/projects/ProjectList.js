import React from "react";

// components
import ProjectSummary from "./ProjectSummary";

function ProjectList() {
  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
}

export default ProjectList;
