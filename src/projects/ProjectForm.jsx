import React, { useState } from "react";
import PropTypes from "prop-types";
import { Project } from "./Project";

const ProjectForm = ({ project: initialProject, onCancel, onSave }) => {
  const [project, setProject] = useState(initialProject);

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === "checkbox" ? checked : value;

    if (type === "number") {
      updatedValue = parseInt(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject;
    setProject((prevProject) => {
      updatedProject = new Project({ ...prevProject, ...change });
      return updatedProject;
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onSave(project);
  }

  return (
    <form onSubmit={handleFormSubmit} className="input-group vertical">
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={project.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
      />
      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        value={project.budget}
        onChange={handleChange}
      />
      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
        value={project.isActive}
        onChange={handleChange}
      />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" onClick={onCancel} className="bordered medium">
          cancel
        </button>
      </div>
    </form>
  );
};

/** This specifies that the 'onSave' & 'onCancel' props must be functions. **/
ProjectForm.propTypes = {
  project: PropTypes.instanceOf(Project),
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProjectForm;
