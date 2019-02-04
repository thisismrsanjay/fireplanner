//dispatch dispatches action to reducer
import firebase from "../../config/fireConfig";
const db = firebase.firestore();

export const createProject = project => {
  return (dispatch, getState) => {
    db.collection("projects")
      .add({
        ...project,
        authorFirstName: "sanjay",
        authorLastName: "singh",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err
        });
      });
  };
};

export const getProjects = () => {
  return (dispatch, getState) => {
    db.collection("projects")
      .get()
      .then(projects => {
         dispatch({
          type: "GET_PROJECTS",
          projects
        });
      })
      .catch(err => {
        dispatch({
            type:"GET_PROJECTS_ERROR",
            err
        })
      });
  };
};

//earlier actions were just objects so we don't need to create inidvidual file for them
//thunk allows us pass functions as actions
// export const createProject = (project)=>{
//     return {
//         type:'ADD_PROJECT',
//         project:project
//     }
// }
