const express = require('express');

const app = express();

app.listen(3000, ()=>{
    console.log("server is up and running");
});



app.get("/",(req, res)=>{
    return res.send("Hello World");
})

app.get("/info", (req,res)=>{
    return res.send("<h1> This is INFO</h1>");
});


app.use((req,res)=>{
    return res.send("Something went wrong - 404");
})