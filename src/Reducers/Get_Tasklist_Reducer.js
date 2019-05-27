import {Get_Tasklist,Get_Tasklist_Failure,Get_Tasklist_Success} from "../Actions/types";

const init_state={
    message:"",
    taskList:[],
    isLoading:true
    
}
export const Get_tasklist_Reducer=(state=init_state,action)=>{
    switch(action.type){
        case Get_Tasklist_Success:
            return({...state,taskList:action.payload,message:"Success",isLoading:false})
        case Get_Tasklist_Failure:
            return({...state,message:"Failure"})
        default:
            return({...state})
    }
}