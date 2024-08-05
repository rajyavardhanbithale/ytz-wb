const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');

const addProduct = require('./product/addProduct');
const updateProduct = require('./product/updateProduct');
const deleteProduct = require('./product/deleteProduct');
const getProduct = require('./product/getProduct');
const offers = require('./home/offers');

const PORT = process.env.SERVER_PORT || 3001
const app = express()
app.use(express.json())
app.use(cookieParser());


app.use(cors())

app.get('/', (req, res) => {
    res.json({
        maintainer: "rajyavardhan bithale",
        version: "v1",
        project: "ytz-web",
        architecture: "rest",
        timestamp: Date.now(),
        host: req.hostname
    })
})

app.use('/api/v1/product/add', addProduct);
app.use('/api/v1/product/update', updateProduct);
app.use('/api/v1/product/delete', deleteProduct);
app.use('/api/v1/product/get', getProduct);
app.use('/api/v1/offers/', offers);


app.listen(PORT)
module.exports = app;
