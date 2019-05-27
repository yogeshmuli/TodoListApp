import {Get_Completed_Tasks,Get_Completed_Tasks_Success,Get_Completed_Tasks_Failure} from "../Actions/types";

const init_state={
    completedTasks:[],
    getAction:"Pending"
}

export const Get_Completed_Tasks_Reducer=(state=init_state,action)=>{
    switch(action.type){
        case Get_Completed_Tasks:
            return({...state,getAction:"Reducer called"})
        case Get_Completed_Tasks_Success:
            return({...state,getAction:"success",completedTasks:action.payload})
        case Get_Completed_Tasks_Failure:
            return({...state,getAction:"failed"})
        default:
            return ({...state})

    }
}