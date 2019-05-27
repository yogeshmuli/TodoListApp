import {Test_Action,Test_Action_Failure,Test_Action_Success} from "../Actions/types"

var State_Init={
    console:"Initial State"
}
export const Test_Reducer =(state=State_Init,action)=>{
    
    switch(action.type){
        case Test_Action:
            // console.log(action.payload,"reducer case")
            return({...state,console:action.payload})
        case Test_Action_Success:
            return({...state,console:action.payload})
        case Test_Action_Failure:
            return({...state,console:action.payload})
        default:
        return state
    }

}