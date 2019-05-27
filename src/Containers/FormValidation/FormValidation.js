import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import validatorfun from "../../Helpers/Validator/Validator";
import Card from "react-bootstrap/Card"



class FormValidator extends Component {
    rules = {
        email: "email",
        name: "name",

    }
    constructor(props) {
        super(props)
        this.validate = new validatorfun(this.rules)
    }


    state = {
        email: "",
        name: "",
        validityStatus: {
            isEmailValid: true,
            isNameValid: true
        },
        image: null
    }
    changeHandler = (e) => {

        var name = e.target.id;
        var value = e.target.value;
        var current_state = { ...this.state }
        current_state[name] = value
        this.setState(current_state)
    }
    checkValidity = () => {

        var form = {
            email: this.state.email,
            name: this.state.name
        }
        var validityStatus = this.validate.Validate(form)
        this.setState({ validityStatus: validityStatus })
    }
    fileChooser = (event) => {
        console.log(event.target.value)
        var file = URL.createObjectURL(event.target.files[0])
        this.setState({ image: file })

    }
    cardstyle={
        backgroundColor:"rgb(52, 58, 64)",
        color:"blanchedalmond",
        fontFamily: "'Roboto', sans-serif",
        padding:"0px",
        width:"auto",
        margin:"auto",
        marginTop:"50px",


    }
    cardimage={
        width:"100%",
        height:"175px"

    }
    divstyle={
        margin:"auto",

    }
    render() {
        var emailError = null
        var nameError = null
        if (!this.state.validityStatus.isNameValid) {
            nameError = "name is invalid"
        }
        if (!this.state.validityStatus.isEmailValid) {
            emailError = "email is invalid"
        }
        return (
            <div style={this.divstyle}>
                <Card style={this.cardstyle}>
                    <Card.Img style={this.cardimage} variant="top" src={this.state.image}></Card.Img>
                    <Card.Text className="text-center">

                        <label>Email</label><br></br>
                        <input text="text" id="email" value={this.state.email} onChange={(e) => this.changeHandler(e)} /><br></br>
                        {emailError}<br></br>
                        <label>Name</label><br></br>
                        <input text="text" id="name" value={this.state.name} onChange={(e) => this.changeHandler(e)} /><br></br>
                        {nameError}<br></br>
                        <br></br>
                        <input  type="file" onChange={(e) => this.fileChooser(e)}></input><br></br>
                        <Button className="m-3 buttonclass" onClick={this.checkValidity}>Check Validity</Button>
                    </Card.Text>

                </Card>
            </div>
        )
    }
}

export default FormValidator
