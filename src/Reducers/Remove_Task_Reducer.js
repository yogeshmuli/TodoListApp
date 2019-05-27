import {Remove_Task,Remove_Task_Failure,Remove_Task_Success} from "../Actions/types";

const init_state={
    deleteAction:"Pending"


}

export  const Remove_Task_Reducer=(state=init_state,action)=>{
    switch(action.type){
        case Remove_Task:
            return({...state})
        case Remove_Task_Success:
            return ({...state,deleteAction:"Success"});
        case Remove_Task_Failure:
            return({...state,deleteAction:"Failed"})
        default :
            return state }

}