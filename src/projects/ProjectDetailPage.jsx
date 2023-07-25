/** import PropTypes from "prop-types";
import { Project } from "./Project"; */

const ProjectDetailPage = ({ project }) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img className="rounded" src={project.imageUrl} alt={project.name} />
          <section className="section dark">
            <h3 className="strong">
              <strong>{project.name}</strong>
            </h3>
            <p>{project.description}</p>
            <p>Budget : {project.budget.toLocaleString()}</p>
            <p>Signed: {project.contractSignedOn.toLocaleString("en-US")}</p>
            <p>
              <mark className="active">
                {" "}
                {project.isActive ? "active" : "inactive"}
              </mark>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

/** ProjectDetailPage.propTypes = {
   * project: PropTypes.instanceOf(Project).isRequired,
     };
  */
export default ProjectDetailPage;
