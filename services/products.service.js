const { product, category } = require("../models")

const createProduct = (productInfo) => {
    return product.create(productInfo)
}

const getAllProduct = () => {
    return product.findAll({
        include: category
    })
}

module.exports = {
    createProduct,
    getAllProduct
} 