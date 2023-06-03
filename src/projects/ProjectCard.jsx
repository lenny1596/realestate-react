import PropTypes from "prop-types";
import { Project } from "./Project";

// Truncates the project description to 60 characters and adds "..." at the end
const formatDescription = (description) => {
  return description.substring(0, 60) + "...";
};

// This component takes a 'project' object as props and returns a card with the project name, description, and budget.
const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
      </section>
    </div>
  );
};

// This specifies that the 'project' prop must be an instance of the 'Project' class interface
ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
};

export default ProjectCard;
