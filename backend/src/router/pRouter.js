import express from "express"
import { addProduct, deleteProduct, getProduct } from "../pController.js"

const pRouter = express.Router()

pRouter.get("/",getProduct)
pRouter.post("/",addProduct)
pRouter.delete("/:id",deleteProduct)

export default pRouter