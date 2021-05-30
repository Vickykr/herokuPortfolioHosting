const mongoose = require('mongoose');

const DB = 'mongodb+srv://vicky:atlaspassword@cluster0.xgtiy.mongodb.net/portfolioDB?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfull");
}).catch((error) => {
    console.log(error);
});
//creating DB
/*mongoose.connect("mongodb://localhost:27017/protfolio", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfull");
}).catch((error) => {
    console.log(error);
})
*/
/*
const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'new password',
    database: 'contact'
});

dbConn.connect((err) =>{
    if(err) throw err;
    console.log("DB conected sucessfully");
})

module.exports = dbConn;
*/