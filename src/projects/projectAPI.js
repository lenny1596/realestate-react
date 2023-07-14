import { Project } from "./Project";

const baseUrl = "http://localhost:5000";
const url = `${baseUrl}/projects`;

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return "Please Login Again.";
    case 403:
      return "You do not have permission to view the project(s)";
    default:
      return "There was an error retrieving the projects(s). Please try again Later.";
  }
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`Log server http error: ${JSON.stringify(httpErrorInfo)}`);
    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response) {
  return response.json();
}

function delay(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

const projectAPI = {
  async get(page = 1, limit = 21) {
    try {
      const response = await fetch(`${url}?_page=${page}&_limit=${limit}`); // I removed "&_sort=name" to output data according to id.
      delay(600);
      checkStatus(response);
      const projects = await parseJSON(response);
      return projects.map((p) => new Project(p));
    } catch (error) {
      console.log(`client log error: ${error}`);
      throw new Error(
        "There was an error retrieving the projects. Please try again later."
      );
    }
  },
};

export { projectAPI };
