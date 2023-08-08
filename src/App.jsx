import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./store";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProjectPage from "./projects/ProjectPage";
import HomePage from "./home/HomePage";
import ProjectDetail from "./projects/ProjectDetail";

function App() {
  let location = useLocation();
  return (
    <Provider store={Store}>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <TransitionGroup>
          <CSSTransition
            className="fade"
            key={location.key}
            timeout={{ enter: 400, exit: 200 }}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Provider>
  );
}

export default App;

/** "eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
}, */
