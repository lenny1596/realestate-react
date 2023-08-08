import { configureStore } from "@reduxjs/toolkit";
import { projectSlice } from "./projects/state/ProjectSlice";

const Store = configureStore({
  reducer: {
    projects: projectSlice.reducer,
  },
});

export default Store;
