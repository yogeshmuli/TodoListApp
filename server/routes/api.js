const express = require('express')
const router = express.Router()
var tasks = [
//     {
    
//     taskName: "Name",
//     TaskType: "Health",
//     priority: "High",
//     details: "Some details about task",
//     status: "Pending"

// }
]

var completed = [
//     {
//     taskName: "Name",
//     TaskType: "Health",
//     priority: "High",
//     details: "Some details about task",
//     status: "Completed"
// }
]



router.get("/", (req, res) => {
    res.send("in router")
})
router.put("/Addtask", (req, res) => {
    var id=tasks.length
    tasks.push({ ...req.body, status: "Pending",Id:id})
    res.json(tasks)
})

router.get("/Gettasklist", (req, res) => {
    res.json(tasks)
})

router.post("/Removetask", (req, res) => {
    var indexToRemove = req.body
    tasks.splice(indexToRemove, 1)
    res.json(tasks)
})

router.get("/Completedtask", (req, res) => {
    res.json(completed)
})

router.post("/updatestatus", (req, res) => {
    var index = req.body.index
    var completedtask = { ...tasks[index] }
    console.log(tasks)
    completedtask.status = "Completed"

    completed.push(completedtask)
    tasks.splice(index, 1)
    res.json(completedtask)
})

router.post("/edittask", (req, res) => {

    var taskToEdit = req.body
    var taskToEditIndex = taskToEdit.taskListIndex
    delete taskToEdit.taskListIndex
    tasks[taskToEditIndex] = { ...taskToEdit }
    res.send("task edited success")
})

router.post("/login",(req,res)=>{
    console.log(req.body)
    if(req.body.username=="Yogeshmuli"&&req.body.password=="yogesh"){
        res.json({authencated:true})
    }
    else{
        res.json({authencated:false})
    }
})


module.exports = router
