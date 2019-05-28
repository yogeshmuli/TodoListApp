import {User_Login,User_Login_Success,User_Login_Failure} from "./types";

function User_Login_Action (loginCredientials){
    return({
        type:User_Login,
        payload:loginCredientials

    })
}

export default User_Login_Action