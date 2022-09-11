const express = require("express");

const { 
    handleCreateJoke,
    handleGetAllJokes,
    handleGetRandomJoke,
    handleGetJokeById,
    handleDeleteJokeById,
    handleUpdateJokeById
} = require("../controllers/joke.controller")

const router = express.Router();

router.post("/new", handleCreateJoke);

router.get("/random", handleGetRandomJoke)
router.get("/:id", handleGetJokeById);
router.get("/", handleGetAllJokes);
router.delete("/delete/:id", handleDeleteJokeById);
router.put("/update/:id", handleUpdateJokeById);

module.exports = { jokeRouter: router }
