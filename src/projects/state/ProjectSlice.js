import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { projectAPI } from "../projectAPI";
import { Project } from "../Project";

// aync thunk action creators
export const fetchProjects = createAsyncThunk(
  "projects/fetch",
  async (page) => {
    const data = await projectAPI.get(page);
    return { projects: data, page };
  }
);

export const saveProject = createAsyncThunk(
  "projects/save",
  async (project) => {
    const data = await projectAPI.put(project);
    return data;
  }
);

// intialState for reducer func.
const initialProjectState = {
  projects: [],
  loading: false,
  error: null,
  page: 1,
};

// selector for useSelector hook.
export const selectProjects = (state) => state.projects.projects;
export const selectLoading = (state) => state.projects.loading;
export const selectError = (state) => state.projects.error;
export const selectPage = (state) => state.projects.page;

// init. createSlice for actions to be added to reducer func.
export const projectSlice = createSlice({
  name: "projects",
  initialState: initialProjectState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // projects loading request
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      // projects loading success
      .addCase(fetchProjects.fulfilled, (state, action) => {
        const { projects, page } = action.payload;
        if (page === 1) {
          state.projects = projects;
        } else {
          state.projects.push(...projects);
        }
        state.loading = false;
        state.page = page;
        state.error = "";
      })
      // projects loading error
      .addCase(fetchProjects.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      })
      // new/updating a project request
      .addCase(saveProject.pending, (state) => {
        state.loading = true;
      })
      // new/updating a project success
      .addCase(saveProject.fulfilled, (state, action) => {
        const updatedProject = new Project(action.payload);
        if (updatedProject.isNew()) {
          // isNew() is defined in Project.js it checks if the project is new or not.
          state.projects.push(updatedProject);
        } else {
          state.projects = state.projects.map((project) => {
            return project.id === action.payload.id
              ? Object.assign(new Project(), project, updatedProject)
              : project;
          });
        }
        state.loading = false;
      })
      // new/updating a project error
      .addCase(saveProject.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});
