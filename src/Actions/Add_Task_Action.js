import {
    Add_Task,
    Add_Task_Success,
    Add_Task_Failure
} from "./types"

export function Add_Task_Fuction(task){
    return(
        {
            type:Add_Task,
            payload:task
        }
    )
}