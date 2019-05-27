import {Remove_Task} from "./types"

export function Remove_Task_Action(index){
    return(
        {
            type:Remove_Task,
            payload:index

        }
    )
}