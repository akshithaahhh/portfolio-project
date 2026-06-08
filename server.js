const express = require('express');
const app = express();

app.use(express.static(__dirname));

const projects = [
    {name:"Portfolio Website"},
    {name:"Car Frame Startup"}
];

app.get('/projects',(req,res)=>{
    res.json(projects);
});

app.listen(3000,()=>{
    console.log("Server Running on Port 3000");
});