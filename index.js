var express = require('express')
var app = express()
app.use(express.json())
var students = [
               {"id":1,"name":"Naveen"},
               {"id":2,"name":"Manish"}
              ] 
app.get("/",function(req,res){
    res.write("Hello World")
    res.end()
})
app.get("/home",function(req,res){
    res.write("this is a home page")
    res.end()
})
app.get("/getStudent",function(req,res){   
    res.write(JSON.stringify(students))
    res.end()
})
app.post("/addStudent",function(req,res){   
    students.push(req.body)
    res.write("the student added successfully")
    res.end()
})
app.delete("/deleteStudent/:id",(req,res)=>{
    id=req.params.id;
    for(var i=0;i<students.length;i++)
       if(id == students[i].id)
         students.splice(i,1)
    res.write("The student deleted successfully")
    res.write(JSON.stringify(students))
    res.end()
})
app.put("/updateStudent/:id",(req,res)=>{
    id=req.params.id;
    for(var i=0;i<students.length;i++)
       if(id == students[i].id)
         students[i].name=req.body.name
    res.write("The student updated successfully")
    res.write(JSON.stringify(students))
    res.end()
})
app.listen(2003,()=>{
    console.log("server started successfully")
})
