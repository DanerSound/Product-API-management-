const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false})); // per potere decodificare cose da form

//routes
app.use("/api/products", productRoute)

mongoose.connect("mongodb+srv://admin:a8g7AJqou2gpOgcn@testcrud.a2dczsx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=testCRUD")
    .then(() => {
        console.log('MongoDB Connected!');
        app.listen(
            port,
            () => console.log(`Listening on port ${port}`),
        )
    }).catch(() => {
    console.log('MongoDB Fail! Connected!');
})


