import React, { Component } from 'react';
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import "./Home.css"
import Col from "react-bootstrap/Col"
import Option from "react-bootstrap/"
import loadable from "react-loadable"
import { Test_action_function } from "../../Actions/Test_action";
import { Add_Task_Fuction } from "../../Actions/Add_Task_Action";
import {Redirect,withRouter} from "react-router";




class Home extends Component {
    navigateChecker=null
    state = {
        showAddTaskForm: false,
        isValidate: false,
        formModel: {
            taskName: "",
            taskType: "",
            priority: "High",
            details: ""
        }



    }
    constructor(props){
        super(props)
        // this.inputref=React.createRef()
    }
    componentDidMount(){
        console.log("ref",this.inputref)

    }
    componentDidUpdate(){
        
    }
    

    handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form.class)
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({ isValidate: true });
        
        if (form.checkValidity()) {
            this.props.dispatch2(this.state.formModel)
            

        }
        this.props.history.push("/Mytask")
    }


    stateChanger = (propertyName, event) => {
        var currentstate = { ...this.state };
        currentstate.formModel[propertyName] = event.target.value
        this.setState(currentstate);
    }


    handleOnchange = (event) => {
        console.log(event.target.id)
        var propertyName = event.target.id
        this.stateChanger(propertyName, event)
    }

    showAddTaskForm = () => {
        let currentState = { ...this.state }
        currentState.showAddTaskForm = !currentState.showAddTaskForm
        this.setState(currentState)
    }
    getvalue = (event) => {
        console.log(document.getElementById("formBasicEmail").value)
    }
    navigateTotasks=()=>{
        return(
            <Redirect to="/Mytask"/>
        )
    }

    resetHandler = () => {
        this.setState({
            formModel: {
                taskName: "",
                taskType: "",
                priority: "High",
                details: ""
            }
        })
        
    }
    render() {
        
        var form = null
        var redirect=null
        console.log("after succes",this.props.prop.showalert)
        if(this.navigateChecker){
            redirect=this.navigateTotasks()
        }


        if (this.state.showAddTaskForm) {
            
            form =
                <div className="formdiv">
                    <Form
                        noValidate
                        validated={this.state.isValidate}
                        onSubmit={(e) => this.handleSubmit(e)}>
                        <Form.Row>
                            <Col md="4">
                                <Form.Group controlId="taskName" >
                                    <Form.Label>Task Name</Form.Label>
                                    <Form.Control
                                        ref={(inputref2)=>{this.inputref=inputref2}}
                                        required
                                        type="text"
                                        placeholder="Task Name"
                                        value={this.state.formModel.taskName}
                                        onChange={(e) => this.handleOnchange(e)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Task name is required
                                </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md="4">
                                <Form.Group controlId="taskType">
                                    <Form.Label>
                                        Task Type
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        required
                                        placeholder="Task Type"
                                        value={this.state.formModel.taskType}
                                        onChange={(e) => this.handleOnchange(e)} />

                                    <Form.Control.Feedback type="invalid">
                                        Type is required
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md="4">
                                <Form.Group controlId="priority">
                                    <Form.Label>
                                        Priority
                                    </Form.Label>
                                    <Form.Control as="select"
                                        value={this.state.formModel.priority}
                                        onChange={(e) => this.handleOnchange(e)}>
                                        <option>High</option>
                                        <option>Medium</option>
                                        <option>Low</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>


                        <Form.Group controlId="details">
                            <Form.Label>
                                Task Details
                            </Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="details"
                                value={this.state.formModel.details}
                                onChange={(e) => this.handleOnchange(e)} />
                        </Form.Group>
                        <Button className="m-3 buttonclass" type="submit">Submit</Button>
                        <Button className="m-3 buttonclass" onClick={this.resetHandler}>Reset</Button>
                    </Form>
                </div>

        }
        return (
            <div className="text-center fullwidth">
                {redirect}
                <h1> Add task</h1>
                {/* <Button onClick={this.props.dispatch1}>Start test</Button> */}
                <Button className="buttonclass" onClick={this.showAddTaskForm}>Add Task</Button>
                {form}

            </div>
        )
    }



}
const mapStateToProps = (state) => {
    console.log("state at home",state.Add_Task_Reducer)
    return {
        prop: state.Add_Task_Reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: () => {
            dispatch(
                Test_action_function()

            )
        },
        dispatch2: (form) => {
            dispatch(
                Add_Task_Fuction(form)
            )
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home)) 