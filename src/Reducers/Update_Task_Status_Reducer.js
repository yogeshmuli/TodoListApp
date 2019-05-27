import {Update_Task_Status,Update_Task_Status_Failure,Update_Task_Status_Success} from "../Actions/types"

const init_state={
    UpdateStatus:"Pending"
}

export const Update_Task_Status_Reducer=(state=init_state,action)=>{
    switch(action.type){
        case Update_Task_Status:
            return({...state,UpdateStatus:"called reducer"})
        case Update_Task_Status_Success:
            return({...state,UpdateStatus:"Success"})
        case Update_Task_Status_Failure:
            return({...state,UpdateStatus:"Failed"})
        default:
            return({...state})

    }
}