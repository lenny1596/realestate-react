import { Mock_Projects } from "./MockProjects";

const Projectpage = () => {
  return (
    <>
      <h1>Projects</h1>
      <pre>{JSON.stringify(Mock_Projects, null, " ")}</pre>
    </>
  );
};

export default Projectpage;
