import React, { useState } from "react";
import PropTypes from "prop-types";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

/**
 * This component takes a 'projects' array of 'Project' instances as props and returns a list of cards with the project name, description, and budget.
 * Created state editProject to store the project object that is being edited.
 * HandleEdit function is called when the edit button is clicked.
 * if project.id matches editProject.id, display the form component otherwise display the card.
 **/
const ProjectList = ({ projects, onSave }) => {
  const [editProject, setEditProject] = useState({});

  function handleEdit(projectedited){
    setEditProject(projectedited);
  };

  function handleCancel(){
    setEditProject({});
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project.id === editProject.id ? (
            <ProjectForm onCancel={handleCancel} onSave={onSave} />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
};

/** Define the PropTypes for the ProjectList component &
validates that the `projects` prop is an array of `Project` instances and require it to be present.**/
ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProjectList;
