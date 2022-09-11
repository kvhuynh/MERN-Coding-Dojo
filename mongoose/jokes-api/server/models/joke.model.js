const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        set_up: {
            type: String,
            required: [true, `{PATH} is required`],
            minlength: [10, "Set up must be at leash 10 characters"]
        },

        punchline: {
            type: String,
            required: [true, `{PATH} is required`],
            minlength: [3, "Punchline must be atleast 3 characters long"]

        },
    }, 

    { timestamps: true }
)

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = { Joke: Joke }