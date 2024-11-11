const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const signupRoute = require('./route/signup');
const loginRoute = require('./route/login');
const getData = require('./route/getData');
const recipeInsert = require('./route/recipeInsert');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


app.use('/signup',signupRoute);

app.use('/login',loginRoute);

app.use('/getdata',getData);

app.use('/addrecipe',recipeInsert);

app.listen(PORT,()=> console.log(`Server successfully running in PORT ${PORT}`))