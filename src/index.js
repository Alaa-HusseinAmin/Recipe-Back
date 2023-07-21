import cors from "cors";
import express from 'express';
import { dbConnection } from "../database/dbConnection.js";


import { recipesRouter } from "./routes/recipes.js";
import { userRouter } from "./routes/user.js";

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())    

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);


app.get('/',(req,res)=>{
    res.json({
        message:"api is working now"
    })
})


dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


