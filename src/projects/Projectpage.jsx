import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProjects,
  saveProject as saveProjectAction,
  selectProjects,
  selectLoading,
  selectError,
  selectPage,
} from "./state/ProjectSlice";
import ProjectList from "./ProjectList";
import ProjectListSkeleton from "./ProjectListSkeleton";

/** This component is a page for displaying a list of projects.
 * This function returns a component that displays the page's title and a ProjectList component that takes in Mock_Projects as props.
 * function saveProject is called when the save button is clicked and the project is updated in the Mock_Projects array.
 **/
const ProjectPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchProjects(currentPage));
  }, [dispatch, currentPage]);

  function handleMoreClick() {
    dispatch(fetchProjects(currentPage + 1));
  }

  function saveProject(project) {
    dispatch(saveProjectAction(project));
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

      {loading && <ProjectListSkeleton />}

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
    </Fragment>
  );
};

export default ProjectPage;
