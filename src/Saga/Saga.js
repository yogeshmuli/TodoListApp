import { takeEvery, delay, put, call } from "redux-saga/effects";
import { Test_Action, Test_Action_Success } from "../Actions/types";
import { Test_action_function } from "../Actions/Test_action";
import { Add_Task, Add_Task_Failure, Add_Task_Success } from "../Actions/types";
import {
    Get_Tasklist, Get_Tasklist_Failure, Get_Tasklist_Success,
    Remove_Task, Remove_Task_Failure, Remove_Task_Success,
    Get_Completed_Tasks, Get_Completed_Tasks_Success, Get_Completed_Tasks_Failure,
    Update_Task_Status, Update_Task_Status_Failure, Update_Task_Status_Success,
    Edit_Task, Edit_Task_Success, Edit_task_Failure,
    User_Login,User_Login_Failure,User_Login_Success
} from "../Actions/types";
import axios from "axios";
import{appconfig} from "../config/config"

function* testApiCall() {
    yield delay(3000)
    yield put({ type: Test_Action_Success, payload: Test_Action_Success })
}

function* Add_task_call(action) {
    // yield delay(3000)
    // yield put ({type:Add_Task_Success,payload:Add_Task_Success})
    // console.log("action from saga",action.payload)
    try {
        const response = yield call(axios.put, `http://${appconfig.serverIp}:3005/api/Addtask`, action.payload)
        if (response) {
            console.log(response)
            window.alert("Task added Successfully")
            yield put({ type: Add_Task_Success, payload: action.payload })
        }


    }
    catch (error) {
        console.log(error)
    }

}
function* Get_Tasklist_call() {
    yield delay(2000)
    try {

        const response = yield call(axios.get, `http://${appconfig.serverIp}:3005/api/Gettasklist`);
        if (response) {
            console.log(response, "from Get_Tasklist_call");
            yield put({ type: Get_Tasklist_Success, payload: response.data })
        }
    }
    catch (error) {
        console.log(error, "from Get_task_list_call")
    }
}

function* Remove_Task_call(action) {
    try {

        const response = yield call(axios.post, `http://${appconfig.serverIp}:3005/api/Removetask`, action.payload);
        if (response) {
            yield put({ type: Remove_Task_Success, payload: "success" })
            console.log(response.data)
        }
    }
    catch (error) {
        console.log(error)
    }
}

function* Get_Completed_Tasks_call() {
    try {
        const response = yield call(axios.get, `http://${appconfig.serverIp}:3005/api/completedTask`);
        if (response) {
            yield put({ type: Get_Completed_Tasks_Success, payload: response.data })
            console.log("get call sucess")
        }
    }
    catch (error) {
        yield put({ type: Get_Completed_Tasks_Failure, payload: error })
    }
}

function* Update_Task_Status_call(action) {
    try {
        const response = yield call(axios.post, `http://${appconfig.serverIp}:3005/api/updatestatus`, { index: action.payload })
        if (response) {
            yield put({ type: Update_Task_Status_Success, payload: "success" })
            console.log("from update", response.data)
        }
    }
    catch (error) {
        yield put({ type: Update_Task_Status_Failure, payload: "failed" })
    }
}

function* Edit_Task_call(action) {
    try {
        const response = yield call(axios.post, `http://${appconfig.serverIp}:3005/api/edittask`, action.payload)
        if (response) {
            yield put({ type: Edit_Task_Success, payload: "call success" })
            console.log(response.data)
        }
    }
    catch (error) {
        yield put({ type: Edit_task_Failure, payload: "call failed" })
        console.log(error)
    }
}
function * User_Login_call(action){
    try{
        const response= yield call(axios.post, `http://${appconfig.serverIp}:3005/api/login`,action.payload)
        if(response){
            console.log("response from login function",response.data)
            yield put({type:User_Login_Success,payload:response.data.authencated})
        }
    }
    catch(err){
        yield put({type:User_Login_Failure})
        console.log(err)
    }
}

export function* watchAction() {
    yield takeEvery(Test_Action, testApiCall)
    yield takeEvery(Add_Task, Add_task_call)
    yield takeEvery(Get_Tasklist, Get_Tasklist_call)
    yield takeEvery(Remove_Task, Remove_Task_call)
    yield takeEvery(Get_Completed_Tasks, Get_Completed_Tasks_call)
    yield takeEvery(Update_Task_Status, Update_Task_Status_call)
    yield takeEvery(Edit_Task, Edit_Task_call)
    yield takeEvery(User_Login,User_Login_call)
}