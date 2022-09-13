const express = require("express");
const cors = require("cors");

const port = 8000;

const { destinationRouter } = require("./routes/product-manager.routes");
const { productRouter } = require("./routes/product-manager.routes");

require("./config/mongoose.config");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRouter);

app.listen(port, () => 
    console.log(`Listening on port ${port} for requests to respond to`))