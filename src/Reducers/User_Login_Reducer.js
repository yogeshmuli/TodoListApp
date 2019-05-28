import {User_Login,User_Login_Success,User_Login_Failure} from "../Actions/types";

const init_state={
    loginAction:"Pending",
    isAuthencated:false

}
export const User_Login_Reducer=(state=init_state,action)=>{
    switch(action.type){
        case User_Login:
            return({...state,loginAction:"called"})
        case User_Login_Success:
            return({...state,loginAction:"Success",isAuthencated:action.payload})
        case User_Login_Failure:
            return({...state,loginAction:"Failure"})
        default:
            return(state)
    }
}

