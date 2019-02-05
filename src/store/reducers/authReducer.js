const initState = {
     authError:null,
}

const authReducer = (state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError:"Login Failed"
            };
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                firebase:action.user.user,
                authError:null
            }
        /* cSpell:disable */
        case 'SIGNOUT_SUCCESS':
            return {
                ...state,
                firebase:null
            };
        case 'SET_USER':
            return {
                ...state,
                firebase:action.user
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return{
                ...state,
                authError:action.error.message
            }
        default:
            return state;
    }
}



export  default authReducer;