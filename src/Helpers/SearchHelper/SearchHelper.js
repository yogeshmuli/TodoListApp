  import _ from "lodash"
   const search=(list,searchItem)=>{
     console.log(list,"list")
     return (_.filter(list,(item)=>{
       console.log(_.includes(item.taskName, searchItem))
           return _.includes(item.taskName, searchItem)
      }))
  }
  export default search