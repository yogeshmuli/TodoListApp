import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import {isEmpty} from "validator"
class LoginPage extends Component {
    formdiv = {
        textAling: "center",
        margin: "auto",
        marginTop: "100px",
        backgroundColor: " rgb(52, 58, 64)",
        padding: "20px",
        color: "blanchedalmond",
        fontFamily: "'Roboto', sans-serif",
        outline:"none",
        borderRadius:"20px"
    }
    state = {
        username: "",
        password: "",
        isAuthencated: false,
        isValidate: false,
        isUsernameValid:true,
        isPasswordValid:true
    }
    buttonstyle={
        marginTop:"10px"
    }
    userNameRef = React.createRef();
    passwordref = React.createRef();
    formref = React.createRef();
    onchangeHandler = (e) => {
        let propertyName = e.target.id
        let value = e.target.value
        let currentState = { ...this.state }
        currentState[propertyName] = value
        this.setState(currentState)
    };
    onloginHandler = () => {
        let loginCredentials = { 
            username:this.state.username,
            password:this.state.password
         }
        var validityStaus=this.checkValidity(loginCredentials)
        var isusernamevalid=validityStaus.username
        var ispasswordvalid=validityStaus.password
        this.setState({
            isUsernameValid:isusernamevalid,
            isPasswordValid:ispasswordvalid
        })
        
    }
    checkValidity=(form)=>{
        var validityStatus={
            username:false,
            password:false
        }
        if(!isEmpty(form.username)){
            validityStatus.username=true
        }
        if(!isEmpty(form.password)){
            validityStatus.password=true
        }

        return(validityStatus)
        
    }
    render() {
        var usernameInValidMessage=null
        var passwordInValidMessage=null
        if(!this.state.isUsernameValid){
            usernameInValidMessage=<p>Username is required</p>
        }
        if(!this.state.isPasswordValid){
            passwordInValidMessage=<p>Password is required</p>
        }
        return (
            <div style={this.formdiv}>
                <Form
                    
                >
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="username">
                                <Form.Label>
                                    Username
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Username"
                                    ref={this.userNameRef}
                                    value={this.state.username}
                                    onChange={(e) => this.onchangeHandler(e)}
                                />
                                {usernameInValidMessage}
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="password">
                                <Form.Label>
                                    password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    required
                                    ref={this.passwordref}
                                    value={this.state.password}
                                    onChange={(e) => this.onchangeHandler(e)}
                                />
                            </Form.Group>
                            {passwordInValidMessage}
                        </Col>
                    </Form.Row>
                    <Button style={this.buttonstyle} className="buttonclass" onClick={this.onloginHandler} >
                        Login
                    </Button>


                </Form>
            </div>
        )
    }
}

export default LoginPage