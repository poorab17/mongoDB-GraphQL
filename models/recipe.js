const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    createdAt: String,
    thumbsUp: Number,
    thumbsDown: Number,
});


module.exports = model('Recipe', recipeSchema);