const { product, category } = require("../models")

const createProduct = (productInfo) => {
    return product.create(productInfo)
}

const getAllProduct = () => {
    return product.findAll({
        include: category
    })
}

const updateProduct = async (id, body) => {
    const editProduct = await product.findOne(
        {
            where: {
                id: id
            }
        }
    );

    editProduct.set({
        name: body.name,
        price: body.price,
        description: body.description,
        categoryId: body.categoryId
    })

    return editProduct.save()
}

const deleteProduct = async (id) => {
    const del = await product.findOne(
        {
            where: {
                id: id
            }
        })
    return del.destroy()
}

module.exports = {
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
} 