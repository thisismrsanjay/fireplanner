import firebase from "../../config/fireConfig";


export const signIn = credential => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credential.email, credential.password)
      .then(user => {
        dispatch({
          type: "LOGIN_SUCCESS",
          user
        });
      })
      .catch(error => {
        var errorMessage = error.message;
        dispatch({
          type: "LOGIN_ERROR",
          error: errorMessage
        });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS"
        });
      })
      .catch(function(error) {
        console.log("signOut error", error);
      });
  };
};

export const setUser = () => {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user
        });
      }else{
        dispatch({
          type: "SET_USER",
          user:null
        });
      }
    });
  };
};

export const signUp = (newUser)=>{
  return (dispatch,getState)=>{
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((res)=>{
      return firebase.firestore().collection('users').doc(res.user.uid).set({
        firstName:newUser.firstName,
        lastName:newUser.lastName,
        initials:newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(()=>{
      dispatch({
        type:"SIGNUP_SUCCESS"
      })
    })
    .catch((error)=>{
      dispatch({
        type:"SIGNUP_ERROR",
        error
      })
    });
  }
}