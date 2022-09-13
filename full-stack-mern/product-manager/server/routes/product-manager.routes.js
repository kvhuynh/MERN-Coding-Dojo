const express = require("express");

const {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductById,
    handleDeleteProductById,
    handleUpdateProductById
} = require("../controllers/product-manager.controller");

const router = express.Router();

router.post("/", handleCreateProduct);


router.get("/:id", handleGetProductById);
router.get("/", handleGetAllProducts);
router.delete("/:id", handleDeleteProductById);
router.put("/:id", handleUpdateProductById);

module.exports = { productRouter: router }