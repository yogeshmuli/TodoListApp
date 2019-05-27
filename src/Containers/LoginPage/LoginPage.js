import React,{Component} from "react";
import Form from "react-bootstrap/Form" ;
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
class LoginPage extends Component {
    formdiv={
        textAling:"center",
        margin:"auto",
        marginTop:"100px",
        backgroundColor:" rgb(52, 58, 64)",
        padding:"20px",
        color:"blanchedalmond",
        fontFamily: "'Roboto', sans-serif"
    }
    state={
        username:"",
        password:"",
        isAuthencated:false
    }
    userNameRef=React.createRef();
    passwordref=React.createRef();
    onchangeHandler=(e)=>{
        let propertyName=e.target.id
        let value=e.target.value
        let currentState={...this.state}
        currentState[propertyName]=value
        this.setState(currentState)
        
       
    };
    render(){
        return(
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
                                type="text"
                                placeholder="Username"
                                ref={this.userNameRef}
                                value={this.state.username}
                                onChange={(e)=>this.onchangeHandler(e)}
                                />
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
                                
                                ref={this.passwordref}
                                value={this.state.password}
                                onChange={(e)=>this.onchangeHandler(e)}
                                />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Button className="buttonclass">
                        Login
                    </Button>

            
                </Form>
            </div>
        )
    }
}

export default LoginPage