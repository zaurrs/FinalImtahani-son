import express from "express"
import "dotenv/config"
import "./src/db/db.js"
import cors from "cors"
import pRouter from "./src/router/pRouter.js"

const port = process.env.PORT || 5001
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/products", pRouter)

app.get((req,res)=>{
    res.send("askpfj")
})
app.listen(port,()=>{
    console.log(port);
    
})