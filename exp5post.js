const express = require('express')
const app = express()


// Student Data 
let students = [
    {id: 1, name: "Rahul", branch: "CSE", age: 20},
    {id: 2, name: "Aman", branch: "IT", age: 21},
    {id: 3, name: "Priya", branch: "CSE", age: 20},
    {id: 4, name: "Neha", branch: "ECE", age: 21}
];

//GET route
app.get('/',(req,res)=>{
    res.send("Server is running");
})

app.post('/students',(req,res)=>{
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({message: "Student added successfully", student: newStudent});
})

//Start Server
app.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000");    
})