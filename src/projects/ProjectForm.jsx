import PropTypes from "prop-types";
import { Project } from "./Project";

const ProjectForm = ({ onCancel, onSave }) => {
  const HandleSubmit = (event) => {
    event.preventDefault();
    onSave(new Project({ name: "Updated Project" }));
  };
  return (
    <form onSubmit={HandleSubmit} className="input-group vertical">
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" />
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        defaultValue={""}
      />
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget" />
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" />
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
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProjectForm;
