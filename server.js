// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//body parser
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// GET Route for the  projectData
app.get('/api/projectdata', (req, res) => {
  res.status(200).send(projectData)
})

// POST Route to store date, temp and user input in projectData
app.post('/api/projectdata', (req, res) => {
  const {date, temp, content} = req.body
  projectData[date] = {
    temp,
    content,
  }
  res.status(201).send()
})


// Setup Server
app.listen(4000, () => {
  console.log('Server Running on port 4000..........');
});
