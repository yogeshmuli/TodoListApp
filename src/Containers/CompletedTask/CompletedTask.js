import React,{Component} from "react";
import {Task} from "../../Components/Task";
import {Get_Completed_tasks_Function}from "../../Actions/Get_Completed_Task"
import {connect} from "react-redux"


 class CompletedTask extends Component {
     componentDidMount(){
         this.props.getCompletedTask()
     }



    render(){
        var completedTasks=<h1>empty</h1>
        if(this.props.completedTasks){
            var completedTaskArray=this.props.completedTasks
            completedTasks=completedTaskArray.map((task,index)=>{
                console.log("task",task)
                return(
                    <Task 
                    
                    name={task.taskName}
                    type={task.taskType}
                    priority={task.priority}
                    details={task.details}
                    status={task.status}
                    key={index}
                    index={index}
                    class={task.priority}
                    />
                )
               
            })
        }

        return(
            <div className="text-center fullwidth">
                <h1>Completed Tasks</h1>
                {completedTasks}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.Get_Completed_Tasks_Reducer,"from complete")
    return {
        ...state.Get_Completed_Tasks_Reducer,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCompletedTask: () => {
            dispatch(Get_Completed_tasks_Function())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompletedTask)