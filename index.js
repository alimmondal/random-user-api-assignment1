const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
// const dbConnect = require('./utils/dbConnect');
const productRoutes = require('./routes/v1/product.route.js');
const viewCount = require('./middleware/viewCount');
const errorHandler = require('./middleware/errorHandler.js');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
// app.use(bodyParser.text());
app.use(cors());
app.use(express.static('public'));
app.set("view engine", "ejs")

// Apply the rate limiting middleware to all requests
// app.use(limiter)

// app.use(viewCount);

dbConnect();

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/addProducts', productRoutes);


app.get('/', (req, res) => {
    // res.send('Hello, ema watson');
    // res.sendFile(__dirname + '/public/test.html')
    res.render('home.ejs', {
        id:2,
        user:{
            name:'test'
        }
    })
})

app.all("*", (req, res)=>{
    res.send("No route found.")
})

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`);
});

process.on("unhandledRejection", (error)=>{
    console.log(error.name, error.message);
    app.close(()=>{
        process.exit(1);
    })
})


