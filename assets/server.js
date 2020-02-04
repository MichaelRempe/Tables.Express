// Dependencies
const people = require ("./people");//person object containing from data
const express = require("express");
const path = require("path");
const app = express(); //create app's server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 8080;

//Data: holders for persons objects
const reservations = [];
const waitingList = [];


//Routes
    //routes -- html redirects
app.get("/", function(req, res) {
    //Landing Page Served
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function (req, res) {
    // Reservation Form Served
    res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function (req, res) {
    // Current Waiting/Reservation Display Served
    res.sendFile(path.join(__dirname,"tables.html"));
});
    //routes -- api data
app.get("/api/waitlist", function(req, res){
    // Array containing current waitlist objects
    return res.json(waitingList);
})
app.get("/api/tables", function(req, res){
    // Array containing current table objects
    return res.json(reservations);
})

//Form Submission
app.post("/reserve", function(req, res){
    let data = req.body;
    console.log(req.body);
});

//Listener
app.listen(PORT, ()=>{
    console.log(`App is listening on: http://localhost:${PORT}/`)
})
