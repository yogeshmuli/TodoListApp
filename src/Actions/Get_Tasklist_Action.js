import {Get_Tasklist,Get_Tasklist_Success,Get_Tasklist_Failure} from "./types";

export function Get_Tasklist_Function(){
    return(
        {
            type:Get_Tasklist,
            payload:""
        }
    )
}