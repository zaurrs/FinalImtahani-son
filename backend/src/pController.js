import product from "./model/pModel.js"


export const addProduct = async (req, res) => {
    try {
        const newProduct = new product(req.body)

        await newProduct.save()
        res.status(200).send(newProduct)

    } catch (error) {
        res.status(500).send(error)
    }
}

export const getProduct = async (req, res) => {
    try {
        const products = await product.find()
        if (!products) {
            res.status(400).send("client error")
        }
        res.status(200).json({products})

    } catch (error) {
        res.status(500).send("server error")
    }
}


export const deleteProduct = async (req, res) => {
    const {id} = req.params
    try {
        const deleteProduct = await product.findByIdAndDelete(id)
        if (!deleteProduct) {
            res.status(400).send("client error")

        }
        res.status(200).send(deleteProduct)

    } catch (error) {
        res.status(500).send("server error")
    }
}