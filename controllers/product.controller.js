const productService = require("../services/products.service")

const createProduct = async (req, res, next) => {
    const productInfo = req.body

    try {
        const product = await productService.createProduct(productInfo)

        res.status(201).json({
            product,
        })
    } catch (error) {
        res.status(400).json({
            error: error.errors[0]?.message,
        })
    }
}

const getAllProduct = async (req, res, next) => {
    try {
        const products = await productService.getAllProduct()

        res.status(200).json({ products })
    } catch (error) {
        res.status(400).json({
            error: error.errors[0]?.message,
        })
    }
}

module.exports = {
    createProduct,
    getAllProduct,
}