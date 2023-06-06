import React, { Fragment } from "react";
import { Mock_Projects } from "./MockProjects";
import ProjectList from "./ProjectList";

// This component is a page for displaying a list of projects.
// This function returns a component that displays the page's title and a ProjectList component that takes in Mock_Projects as props.
const ProjectPage = () => {
  const SaveProject = (project) => {
    console.log("Saving project: ", project);
  };

  return (
    <Fragment>
      <h1>Projects</h1>
      <ProjectList projects={Mock_Projects} onSave={SaveProject} />
    </Fragment>
  );
};

export default ProjectPage;
