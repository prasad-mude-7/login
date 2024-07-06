const express = require('express');
const app = express();
const db = require('./db');
// const port = 5000;
const port = process.env.PORT || 7000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// import productRouter from "./routes/productRoutes.js"
const productRouter = require('./routes/productRoutes');

const userRouter = require('./routes/userRoutes');


app.use('/product',productRouter)

app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.json({status:200, msg:"Health Ok"})
})

app.get("*", (req, res) => {
    res.send("You've tried reaching a route that doesn't exist.")
  })



app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})