//dispatch dispatches action to reducer


export const createProject =(project)=>{
    return (dispatch,getState)=>{
        //make async call
        dispatch({
            type:'CREATE_PROJECT',
            project
        })
    }
}







//earlier actions were just objects so we don't need to create inidvidual file for them
//thunk allows us pass functions as actions 
// export const createProject = (project)=>{
//     return {
//         type:'ADD_PROJECT',
//         project:project
//     }
// }