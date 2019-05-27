import React from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

export default function EditTask(props) {
    return (
        <div className="formdivedit background">
            <Form
                noValidate
                validated={props.isvalidate}
                onSubmit={(e)=>props.onsubmit(e)}
                >
                <Form.Row>
                    <Col md="4">
                        <Form.Group controlId="taskName" >
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Task Name"
                                value={props.taskmodel.taskName}
                                onChange={(e) => props.change(e)}
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
                                value={props.taskmodel.taskType}
                                onChange={(e) => props.change(e)}
                            />

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
                                value={props.taskmodel.priority}
                                onChange={(e) => props.change(e)}
                            >
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
                        value={props.taskmodel.details}
                        onChange={(e) => props.change(e)}
                    />
                </Form.Group>
                <Button className="m-3 buttonclass" type="submit">Submit</Button>

            </Form>
        </div>
    )
}

