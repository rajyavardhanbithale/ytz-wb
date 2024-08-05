import express from 'express'
import cors from 'cors';
import { expMiddleware } from "./middleware"
import cookieParser from "cookie-parser";


import addProduct from './product/addProduct';
import updateProduct from './product/updateProduct';
import deleteProduct from './product/deleteProduct';
import getProduct from './product/getProduct';
import offers from './home/offers'

const PORT = process.env.SERVER_PORT || 3001
const app = express()
app.use(express.json())
app.use(cookieParser());

app.use(expMiddleware)
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