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
app.use(express.static('weather-journal-app/website'));


//set up server //
const port = 8080;
// variable to fire up the server
const server = app.listen(port, ()=>{
    console.log(`server running at port ${port}`)
})


app.get('/get_project_data_details', (request, response) => {
    // http://localhost:8080/get_project_data_details
    stringified_projectData = JSON.stringify(projectData);
    response.send(stringified_projectData);
})

app.post('/post_url', (request, response) => {
    // console.log(request)
    projectData['temperature'] = request.body.temperature;
    projectData['date'] = request.body.date;
    projectData['feelings'] = request.body.feelings;
    projectData['name'] = request.body.name;

    response.send({"status":200});
}) 
