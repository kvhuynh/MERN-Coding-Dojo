const { ProductManager } = require("../models/product-manager.model");

const createProduct = async (data) => {
    console.log("service: createProduct");
    const product = await ProductManager.create(data);
    return product;
}

const getAllProducts = async () => {
    console.log("service: getAllProducts");
    const products = await ProductManager.find();

    return products
}

const getProductById = async (id) => {
    const product = await ProductManager.findById(id);

    return product;
}

const deleteProductById = async (id) => {
    const product = await ProductManager.findByIdAndDelete(id);

    return product;
}

const updateProductById = async (id, data) => {
    console.log("service: updateProductById");
    const product = await ProductManager.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });

    return product
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById
};