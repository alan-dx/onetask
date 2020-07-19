const express = require('express');
const bodyParser = require('body-parser');

const authControllerRouter = require('./app/controllers/authController');
const projectControllerRouter = require('./app/controllers/projectController');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/auth', authControllerRouter);
app.use('/project', projectControllerRouter);

app.listen(8080);
