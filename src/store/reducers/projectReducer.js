const initState = {
     projects:[
         {id:'1',title:'help me help you',content:"girl i ain't no scooby doo"},
         {id:'2',title:'these girls',content:"the girl with all that money"},
         {id:'3',title:'trust fund baby',content:"and all we use to dream about getting rich and getting out"},
     ]
}
const projectReducer = (state=initState,action)=>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project',action.project);

        default:
            return state;
    }
}

export default projectReducer;