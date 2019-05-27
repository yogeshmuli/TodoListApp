import validator from "validator"

class Validator {
    constructor(rules){
        this.rules=rules
    }
    Validate=(state)=>{
        var {email,name}={...state}
        var validityStatus= {
            isEmailValid:true,
            isNameValid:true
        }
        if(!validator.isEmail(email)){
            validityStatus.isEmailValid=false
        }
        if (validator.isEmpty(name) || name!="Yogesh Muli"){
            validityStatus.isNameValid=false
        }
        console.log(validityStatus)
        return(validityStatus)

        
    }
}
export default Validator