const mongoose = require("mongoose");

const ProductManagerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, `{PATH} is required.`]
        },

        price: {
            type: Number,
            required: [true, `{PATH} is required.`]
        },

        description: {
            type: String,
            required: [true, `{PATH} is required`]
        }
    }
)

const ProductManager = mongoose.model("ProductManager", ProductManagerSchema);

module.exports = { ProductManager: ProductManager };