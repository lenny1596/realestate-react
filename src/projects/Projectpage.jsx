import React, { useState, Fragment, useEffect } from "react";
import ProjectList from "./ProjectList";
import { projectAPI } from "./projectAPI";
import { Project } from "./Project";

/** This component is a page for displaying a list of projects.
 * This function returns a component that displays the page's title and a ProjectList component that takes in Mock_Projects as props.
 * function saveProject is called when the save button is clicked and the project is updated in the Mock_Projects array.
 **/
const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  function handleMoreClick() {
    setCurrentPage((currentPage) => currentPage + 1);
  }

  async function saveProject(project) {
    try {
      const updatedProject = await projectAPI.put(project);
      let updatedProjects = projects.map((p) => {
        return p.id === project.id ? new Project(updatedProject) : p;
      });
      setProjects(updatedProjects);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <Fragment>
      <h1>Projects</h1>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse"></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      <ProjectList projects={projects} onSave={saveProject} />
      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </Fragment>
  );
};

export default ProjectPage;
