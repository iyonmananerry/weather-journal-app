/// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


//set up server //
const port = 8080;
// variable to fire up the server
const server = app.listen(port, ()=>{
    console.log(`server running at port ${port}`)
})

// Function to GET Project Data
const getData = async () => {
    const dataRequestDetails = await fetch('/submit');  
    // https://weather.com/submit

    try{
        // Convert data from dataRequestDetails to JSON
        const dataResponseJson = dataRequestDetails.request.json();
        console.log(dataResponseJson);


        // Update DOM elements
        document.querySelector("#date").innerHTML = new Date().toISOString().slice(0, 10);
        document.querySelector("#temp").innerHTML = dataResponseJson.main.temp;
        document.querySelector("#content").innerHTML = dataResponseJson.main.feel;

    } catch(error) {
        console.log(error);
        // handle whatever the error is...
    }
}


