import PropTypes from "prop-types";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

// This is a component that takes in an object with a key of "projects" and a value of an array of projects.
// For each project(object) in the "projects" array, a div is created with a key of the project's "id" property and a class of "cols-sm".
// Within this div is a ProjectCard component that receives the current project as a prop.
// A ProjectForm component is also created.
const ProjectList = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <ProjectCard project={project} />
          <ProjectForm />
        </div>
      ))}
    </div>
  );
};

// Define the PropTypes for the ProjectList component
// Validate that the `projects` prop is an array of `Project` instances
// and require it to be present.
ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
};

export default ProjectList;
