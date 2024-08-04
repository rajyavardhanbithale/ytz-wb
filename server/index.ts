import express from 'express'
import { expMiddleware } from "./middleware"
import addProduct from './product/addProduct';
import updateProduct from './product/updateProduct';
import deleteProduct from './product/deleteProduct';
import getProduct from './product/getProduct';

const app = express()
app.use(express.json())
app.use(expMiddleware)

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


app.listen(3000)