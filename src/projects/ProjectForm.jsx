import React, { useState } from "react";
import PropTypes from "prop-types";
import { Project } from "./Project";

const ProjectForm = ({ project: initialProject, onCancel, onSave }) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  });

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === "checkbox" ? checked : value;

    if (type === "number") {
      updatedValue = parseInt(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject; // your error might have happened bcause you set updatedProject inside setProject instead of outside.
    setProject((prevProject) => {
      updatedProject = new Project({ ...prevProject, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  }

  function validate(project) {
    /** you shouldn't change the state variable's object properties directly which is why a new errors variable is created and default values are set.*/
    let errors = { name: "", description: "", budget: "" };
    if (project.name.length === 0) errors.name = "Name is required";
    if (project.name.length > 0 && project.name.length < 3)
      errors.name = "Name must be at least 3 characters";
    if (project.description.length === 0)
      errors.description = "Description is required";
    if (project.budget === 0) errors.budget = "Budget must be more than $0";
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!isValid()) return;
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
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
      />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}
      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        value={project.budget}
        onChange={handleChange}
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}
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

/** This specifies that the 'onSave' & 'onCancel' props must be functions.
 * The project prop must be an instance of Project. **/
ProjectForm.propTypes = {
  project: PropTypes.instanceOf(Project),
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProjectForm;
