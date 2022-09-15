const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, `{PATH} is required.`],
            minlength: [3, "Author must be at least 3 characters"]
        }
    }
)

const Author = mongoose.model("Author", AuthorSchema);

module.exports = { Author: Author };