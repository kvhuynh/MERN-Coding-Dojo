const { Joke } = require("../models/joke.model");

const createJoke = async (data) => {
    const joke = await Joke.create(data);

    return joke;
};

const getAllJokes = async () => {
    const jokes = await Joke.find();

    return jokes
};

const getRandomJoke = async () => {
    const allJokes = await getAllJokes();
    const joke = allJokes[Math.floor(Math.random() * allJokes.length)];

    return joke;
}

const getJokeById = async (id) => {
    const joke = await Joke.findById(id);
    
    return joke
};

const deleteJokeById = async (id) => {
    const joke = await Joke.findByIdAndDelete(id);

    return joke;
};

const updateJokeById = async (id, data) => {
    const joke = await Joke.findByIdAndUpdate(id, data, {
        runValidators: true,

        new: true,
    });

    return joke;
};

module.exports = {
    createJoke,
    getAllJokes,
    getRandomJoke,
    getJokeById,
    deleteJokeById,
    updateJokeById,
}