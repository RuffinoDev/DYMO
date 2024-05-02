// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an instance of express
const app = express();

// Using body-parser middleware to parse incoming JSON
app.use(bodyParser.json());

// Setting up a POST route to receive webhooks
app.post('/webhook', (req, res) => {
    console.log('Received a POST request');
    if(!req.body) return res.sendStatus(400);
    console.log('Webhook payload: ', req.body);
    res.status(200).end();
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));