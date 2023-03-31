import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { prompt } from './openai.js';
// const prompt = require('./openai.mjs')
const express = require('express');
// import { express } from 'express';
const bodyParser = require('body-parser');
// import bodyParser from 'body-parser';
const cors = require('cors');
// import cors from 'cors'
const helmet = require('helmet');
// import helmet from 'helmet';
const morgan = require('morgan');
// import morgan from 'morgan';



// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  const topic = req.query.topic;
  const age = req.query.age;
  const degree = req.query.degree;
  const level = req.query.level; 
  const aiprompt = `Explain ${topic} to a person, that it's ${age} years old and has a ${degree} degree, and it's considered a ${level} in the topic`
  prompt(aiprompt).then(response => res.send(response.data))  
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});