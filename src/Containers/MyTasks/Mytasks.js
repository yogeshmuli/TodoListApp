import React, { Component } from "react"
import { Task } from "../../Components/Task";
import { connect } from "react-redux";
import { Get_Tasklist } from "../../Actions/types";
import { Get_Tasklist_Function } from "../../Actions/Get_Tasklist_Action";
import { Remove_Task_Action } from "../../Actions/Remove_Task_Action";
import { Update_Task_Status_Function } from "../../Actions/Update_Task_Status_Action";
import { Edit_Task_Function } from "../../Actions/Edit_Task_Action"
import Loader from "react-loader-spinner";
import EditTask from "../../Components/EditTask";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Mytasks.css";
import search from "../../Helpers/SearchHelper/SearchHelper"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import _ from "lodash"
import Contex from "../../Context/Context";
import { withCookies } from "react-cookie";
import { CSSTransitionGroup } from 'react-transition-group'




class MyTasks extends Component {
    state = {
        showModal: false,
        activeTaskModel: {},
        formValidate: false,
        searchItem: "",
        tasklistState: null,
        value: 1
    }
    constructor(props) {
        super(props)
        console.log("constructor")
    }

    static contextType = Contex

    componentDidMount() {
        console.log(this.context.value, "change value")
        this.context.change()
        console.log("component did mount")
        this.setState({ taskListState: this.props.taskList })
        this.props.dispatch1()
        console.log(this.context.value, "context value")
        // this.updatetaskHandler(null)
    }

    shouldComponentUpdate() {
        console.log("should component update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("SnapShot")
        return null
    }

    componentDidUpdate(prevProps) {
        console.log("componentdidupdate")
        console.log('cookies', this.props.cookies)

        if (this.props !== prevProps) {
            this.setState({ taskListState: this.props.taskList })
        }

    }

    deletetaskHandler = (index) => {
        this.props.removeTask(index)
        this.props.dispatch1()

    }
    updatetaskHandler = async (index) => {
        await this.props.updateCompleteStatus(index)
        setTimeout(() => {
            this.props.dispatch1()
        }, 1000)



    }
    edittaskHandler = (index) => {
        console.log("entered edittaskHandler")
        this.context.change()
        console.log(this.context.value, "context value")
        var activeTask = { ...this.state.taskListState[index], taskListIndex: index }
        this.setState({ activeTaskModel: activeTask })
        console.log(activeTask)
        this.setState({ showModal: true })



    }
    closeModal = () => {

        this.setState({ showModal: false })
    }
    onchange = (event) => {

        this.setState({ value: 3 })
        var propertyName = event.target.id
        this.makechange(event, propertyName)
    }
    makechange = (event, propertyName) => {
        var currentstate = { ...this.state }
        currentstate.activeTaskModel[propertyName] = event.target.value
        this.setState({ activeTaskModel: currentstate.activeTaskModel })
    }
    savechangesHandler = async (e) => {
        var form = e.currentTarget;
        console.log("on submit")
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (form.checkValidity()) {
            this.props.editTask({ ...this.state.activeTaskModel })
        }
        this.setState({ formValidate: true })

        // this.closeModal()
        setTimeout(() => {
            this.props.dispatch1()
        }, 1000)


    }
    searchHandler = (list, search_Item) => {
        var result = search(list, search_Item)
        console.log("result", result)
        this.setState({ taskListState: result })
    }
    searchbarchangeHandler = (event) => {
        var newValue = event.target.value
        this.setState({ searchItem: newValue })
    }

    render() {
        console.log("render")
        var list = <Loader className="center" type="ThreeDots"
            color="#343a40"
            height="100"
            width="100" />
        console.log("entered", this.props.isLoading)
        if (this.props.isLoading == false) {


            var listarray = this.state.taskListState;
            if (listarray && listarray.length != 0) {
                var lista = listarray.map((task, index) => {
                    return (
                        <Task
                            class={task.priority}
                            name={task.taskName}
                            type={task.taskType}
                            priority={task.priority}
                            details={task.details}
                            status={task.status}
                            key={index}
                            index={index}
                            button={true}
                            clicked={this.deletetaskHandler}
                            updated={this.updatetaskHandler}
                            edit={this.edittaskHandler} />

                    )
                })
                list=<CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                    {lista}
                </CSSTransitionGroup>
            }
            else {
                list = <h1>No task available</h1>

            }


        }


        return (
            <Contex.Provider value={{ value: this.state.value, change: this.onchange }}>
                <div className="text-center fullwidth">
                    <h1>My Tasks</h1>
                    <div className="searchdiv">
                        <input className="searchinput" type="text" placeholder="Search Task" value={this.state.searchItem} onChange={(e) => { this.searchbarchangeHandler(e) }} />
                        <FontAwesomeIcon icon={faSearch} color="blanchedalmond" size="lg" className="sidemargin" onClick={(e) => { this.searchHandler(this.props.taskList, this.state.searchItem) }} />
                    </div>
                    {/* <CSSTransitionGroup
                        name="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {list}
                    </CSSTransitionGroup> */}
                    {list}

                    <Modal show={this.state.showModal}
                        onHide={this.closeModal}
                        size="lg"
                        centered
                    >
                        <Modal.Header closeButton className="background">
                            <Modal.Title>Edit Task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bodycolor">
                            <EditTask taskmodel={this.state.activeTaskModel}
                                change={this.onchange}
                                isvalidate={this.state.formValidate}
                                onsubmit={this.savechangesHandler} />
                        </Modal.Body>
                        <Modal.Footer className="background">
                            <Button className="buttonclass" onClick={this.closeModal}>
                                Close
                        </Button>
                            {/* <Button variant="primary" onClick={this.savechangesHandler}>
                            Save Changes
                        </Button> */}
                        </Modal.Footer>
                    </Modal>

                </div>
            </Contex.Provider>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("state", { ...state.Get_tasklist_Reducer, ...state.Remove_Task_Reducer, ...state.Update_Task_Status_Reducer, ...state.Edit_Task_Reducer })
    return {

        ...state.Get_tasklist_Reducer, ...state.Remove_Task_Reducer, ...state.Update_Task_Status_Reducer
        , ...state.Edit_Task_Reducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(Get_Tasklist_Function())
        },
        removeTask: (index) => {
            dispatch(Remove_Task_Action(index))
        },
        updateCompleteStatus: (index) => {
            dispatch(Update_Task_Status_Function(index))
        },
        editTask: (activeTaskModel) => {
            dispatch(Edit_Task_Function(activeTaskModel))
        }
    }
}

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(MyTasks)) 