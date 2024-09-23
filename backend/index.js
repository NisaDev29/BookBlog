const express = require ('express')
const mongoose = require('mongoose');
const BookRoute = require('./Routes/BookRoute')
const cors = require('cors')
const app = express();
app.use(cors());
const port = 5000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const username = "dev98nisa";
const password = "anisaadmin";

mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster1.z9zm1pe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`,
);

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error : "));
db.once("open",function(){
    console.log("Connected successfully with DBS");
})


app.get('/', function (req, res) {
    res.send('GET REQUEST BY ANISA')
})


app.use(('/'), BookRoute);

  app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 