import React, { useState, Fragment } from "react";
import { Mock_Projects } from "./MockProjects";
import ProjectList from "./ProjectList";

/** This component is a page for displaying a list of projects.
* This function returns a component that displays the page's title and a ProjectList component that takes in Mock_Projects as props. 
* function saveProject is called when the save button is clicked and the project is updated in the Mock_Projects array.
**/
const ProjectPage = () => {
  const [projects, setProjects] = useState(Mock_Projects);

  function saveProject(project) {
    let updatedProjects = projects.map((p) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  }

  return (
    <Fragment>
      <h1>Projects</h1>
      <ProjectList projects={projects} onSave={saveProject} />
    </Fragment>
  );
};

export default ProjectPage;
