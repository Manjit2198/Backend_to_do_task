var express = require("express"),
    router  = express.Router(),
      Task  = require("../models/tasks");

//========================
//creating routes 
//========================

// find and seperate the completed and uncompleted task
router.get("/tasks", async(req,res)=>{
    try{
        const uncompletedTask = await Task.find({completed:false})
        const completedTask = await Task.find({completed:true})
        res.status(200).json({"message":"successfull", uncompletedTask, completedTask})
        
    }catch(err){
        console.log(err);
        res.status(404).json({"message":"something is wrong", err})
    }
});


//Show task using its id

router.get("/tasks/:id",  (req, res) =>{

     Task.findById(req.params.id, (err, data) =>{
         if(err){
             console.log(err);
             res.status(404).json({"message":"something is wrong", err})
         }
         else{
             res.status(200).json({"message":"successfull", data})
         }
     });
    });
    



//adding new Task ==> enter name & completed(optional)
router.post("/tasks", async(req, res) =>{

    try {
  const task = new Task(req.body)
  const data = await task.save() 
  res.send(200).json({"message":"created",data}) 
    }catch(err){
        console.log(err);
        res.send(404).json(err)
    }

});


// Find the task with the help of id and then update it by passing variables(name and completed(optional))

 router.put("/tasks/:id", (req, res) =>{
     console.log(req.body);
     Task.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, taskUpdated)=>{
        if(err){
            console.log();
            res.status(404).json({"message":"something is wrong", err})
        }
         else{
             console.log(taskUpdated);
            res.status(200).json({"message": "successful", taskUpdated })
            }   
            console.log(req.body); 
        });
        });
  

 // deleting task using the id
router.delete("/tasks/:id", (req,res) =>{
    Task.findByIdAndDelete(req.params.id, (err, taskDeleted)=>{
        if(err){
            res.status(404).json({"message":"Something went wrong", err})
        }else{
            res.status(200).json({"message":"succesfull", taskDeleted})
        }
    })

});

module.exports = router;


