const express = require("express");
const cors = require("cors");

const port = 8000;

const { jokeRouter } = require("./routes/jokes.routes");

require('./config/mongoose.config');

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/jokes", jokeRouter);

app.listen(port, () => 
    console.log(`lisetning on port ${port} for reqeuests to respond to`)
);