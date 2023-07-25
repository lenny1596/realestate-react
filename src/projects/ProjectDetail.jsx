import React, { useState, useEffect } from "react";
import { projectAPI } from "./projectAPI";
import { useParams } from "react-router-dom";
import ProjectDetailPage from "./ProjectDetailPage";

const ProjectDetail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [project, setProject] = useState(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    async function loadProject() {
      setLoading(true);
      try {
        const data = await projectAPI.find(id);
        setProject(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    loadProject();
  }, [id]);

  return (
    <div>
      <>
        <h1>Project Detail</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          </div>
        )}

        {project && <ProjectDetailPage project={project} />}
      </>
    </div>
  );
};

export default ProjectDetail;
