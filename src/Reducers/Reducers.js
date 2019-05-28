import {Add_Task_Reducer} from "./Add_Task_Reducer";
import {Test_Reducer} from "./Test_Reducer";
import {Get_tasklist_Reducer} from "./Get_Tasklist_Reducer";
import {combineReducers} from "redux";
import {Remove_Task_Reducer} from "./Remove_Task_Reducer";
import {Get_Completed_Tasks_Reducer} from "./Get_Completed_Tasks_Reducer";
import {Update_Task_Status_Reducer} from "./Update_Task_Status_Reducer";
import {Edit_Task_Reducer} from "./Edit_Task_Reducer";
import {User_Login_Reducer} from "./User_Login_Reducer"


export const Reducer= combineReducers(
    {
        Add_Task_Reducer,
        Test_Reducer,
        Get_tasklist_Reducer,
        Remove_Task_Reducer,
        Get_Completed_Tasks_Reducer,
        Update_Task_Status_Reducer,
        Edit_Task_Reducer,
        User_Login_Reducer
    })

