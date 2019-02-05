const initState = {
  projects: [],
  project: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    case "GET_PROJECTS":
      const copy = {
        projects: []
      };
      action.projects.forEach(project => {
        let obj1 = project.data();
        let obj2 = { id: project.id };
        obj1 = { ...obj1, ...obj2 };
        copy.projects.push(obj1);
      });
      return { ...state, ...copy };
    case "GET_PROJECTS_ERROR":
      console.log(action.err);
      return state;
    case "GET_PROJECT":
      const copy1 = {
        project: action.doc.data()
      };
      return { ...state, ...copy1 };
    case "GET_PROJECT_ERROR":
      return action.err;
    default:
      return state;
  }
};

export default projectReducer;
