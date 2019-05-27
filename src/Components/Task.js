import React, { useEffect, useRef,useContext} from "react";
import Card from "react-bootstrap/Card"
import "./Task.css"
import { Button } from "react-bootstrap";
import Contex from "../Context/Context"

export function Task(props) {
    var deletebutton = null;
    var completebutton = null;
    var editbutton = null;
    const functionref = useRef(null)

    useEffect(() => {
        console.log("function ref", functionref)
    })
    var context=useContext(Contex)

    if (props.button) {
        deletebutton = <Button className="m-3 buttonclass" onClick={() => { props.clicked(props.index) }}>Delete</Button>
        completebutton = <Button className="m-3 buttonclass" onClick={() => { props.updated(props.index) }}>Complete</Button>
        editbutton = <Button className="m-3 buttonclass" onClick={() => { props.edit(props.index) }}>Edit</Button>
    }
    return (

        <Card className="taskCard slide">
            <Card.Header className={props.class}>
                <h2 ref={functionref}>Task</h2>
            </Card.Header>
            <Card.Body className="background">
                <Card.Title>
                    <h2>{props.name}</h2>
                </Card.Title>
                <Card.Text>
                    task type: {props.type}<br />
                    priority: {props.priority}<br />
                    details: {props.details}<br />
                    Status: {props.status}
                </Card.Text>
                {deletebutton}
                {completebutton}
                {editbutton}
            </Card.Body>
        </Card>
    )
}