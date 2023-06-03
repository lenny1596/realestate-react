import PropTypes from "prop-types";
import { Project } from "./Project";

const ProjectList = ({ projects }) => {
  return <pre>{JSON.stringify(projects, null, " ")}</pre>;
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
};

export default ProjectList;
