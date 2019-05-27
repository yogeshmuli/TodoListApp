import {Add_Task,Add_Task_Failure,Add_Task_Success} from "../Actions/types"


const init_state= {
    showAddTaskForm: false,
    isValidate: false,
    formModel:{
        taskName:"",
        taskType:"",
        priority:"High",
        details:""
    },
    showalert:false



}


export const Add_Task_Reducer=(state=init_state,action)=>{
    switch(action.type){
        case Add_Task_Success:
            console.log(action.payload)
            return({...state,formModel:action,showalert:true})
            
        case Add_Task:
            
            return(state)
            
        
        default :
            return state
    }
}