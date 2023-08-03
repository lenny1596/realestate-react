import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { projectAPI } from "./projectAPI";
import { Project } from "./Project";

// aync thunk action creators
export const fetchProjects = createAsyncThunk(
  "projects/fetch",
  async (page) => {
    const data = await projectAPI.get(page);
    return { projects: data, page };
  }
);

export const saveProjects = createAsyncThunk(
  "projects/save",
  async (project) => {
    const data = await projectAPI.put(project);
    return data;
  }
);

