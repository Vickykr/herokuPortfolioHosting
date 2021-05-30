const express = require('express');
const path = require('path');
require("./db/conn");
const User = require("./models/usermessage");
const hbs = require('hbs');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port =process.env.PORT || 8000 ;


//
//const dataModel = require('../src/models/usermessage');


// setting up path 
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");
const resumepath = path.join(__dirname,'../public/Vicky_Kumar_Yadav_CV.pdf')

// middleware
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended: false}));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);

app.get('/', (req, res) =>{
    res.render("index");
})
/*
app.post('/contact', (req,res) =>{
    console.log(req.body);
    const reqNewData = new dataModel(req.body);
    console.log(reqNewData);
    dataModel.createNewData(reqNewData, (err, result ) => {
        if(err)
            res.send(err);
        else
            res.json({status: "successfull", data: result});
    })
})
*/
app.post('/contact',async(req,res)=>{
    try{
        //res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render('index');
    } catch(error){
        res.status(500).send(error);
    }
})
app.get('/resume', (req,res) =>{
    fs.readFile(resumepath, (err, resume) =>{
        res.contentType('application/pdf');
        res.send(resume);
    })
})

app.get('/blogs', (req,res) => {
    res.send('No Blogs Yet');
})

app.get('*', (req,res) => {
    res.status('404').send("<h1>Error while trying to request non existing page !! </h1>");
});

app.listen(port, () => {
    console.log(`App Running in port ${port}..`);
})

//start mongoDB
//sudo service mongod start
