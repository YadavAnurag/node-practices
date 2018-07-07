const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

//view engine setup
app.engine('handlebars', expressHandlebars);
app.set('view engine', 'handlebars');

//Static folder
app.use('public', express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', (req, res)=>{
    res.send('contact');
});

app.listen(9000, ()=> console.log("Server started...."));