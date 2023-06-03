import PropTypes from "prop-types";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} class="cols-sm">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
};

export default ProjectList;
