const { Schema, model, Types: { ObjectId } } = require("mongoose");

const postSchema = new Schema({
    title: { type: String, minLength: [5, "Length must be 5 characters!"] },
    keyword: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    author: { type: ObjectId, ref: "User" },
    votes: { type: [ObjectId], default: [], ref: "User" },
    rating: { type: Number, default: 0 },
});

const Post = model("Post", postSchema);

module.exports = Post;
