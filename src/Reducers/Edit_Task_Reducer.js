import {Edit_Task,Edit_Task_Success,Edit_task_Failure} from "../Actions/types"

const init_state={
    Editstatus:""
}
export const Edit_Task_Reducer=(state=init_state,action)=>{
    switch(action.type){
        case Edit_Task:
            return({...state,Editstatus:"call init"})
        case Edit_Task_Success:
            return({...state,Editstatus:action.payload})
        case Edit_task_Failure:
            return({...state,Editstatus:action.payload})
        default:
            return({...state})
    }
}