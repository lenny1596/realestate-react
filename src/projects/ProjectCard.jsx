import PropTypes from "prop-types";
import { Project } from "./Project";

// Truncates the project description to 60 characters and adds "..." at the end
const formatDescription = (description) => {
  return description.substring(0, 60) + "...";
};

// This component takes a 'project' object as props and returns a card with the project name, description, and budget.
// The card component also adds a button to edit the project object and calls the 'handleClick' function when the button is clicked.
const ProjectCard = ({ project, onEdit }) => {
  const HandleClick = (project) => {
    onEdit(project);
  };

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        <button onClick={() => HandleClick(project)} className="bordered">
          <span className="icon-edit"></span>
          Edit
        </button>
      </section>
    </div>
  );
};

// This specifies that the 'project' prop must be an instance of the 'Project' class interface
// and that the 'onEdit' prop must be function.
ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ProjectCard;
