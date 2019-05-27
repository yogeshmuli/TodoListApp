import {Update_Task_Status} from "./types";

export function Update_Task_Status_Function(index){
    return({
        type:Update_Task_Status,
        payload:index

    })
}