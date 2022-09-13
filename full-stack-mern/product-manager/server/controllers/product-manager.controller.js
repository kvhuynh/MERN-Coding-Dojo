const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
} = require("../services/product-manager.service");

const handleCreateProduct = async (req, res) => {

    try {
        const product = await createProduct(req.body);
        return res.json(destination);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetAllProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        return res.json(products);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetProductById = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteProductById = async (req, res) => {
    try {
        const product = await deleteProductById(req.params.id);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateProductById = async (req, res) => {
    try {
        const product = await updateProductById(req.params.body, req.body);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductById,
    handleDeleteProductById,
    handleUpdateProductById
}