const Post = require("../models/Post");

async function createPost(data) {
    const post = new Post(data);
    await post.save()
}


async function getAllPosts() {
    const posts = await Post.find({});
    return posts;
}

async function getMyPosts(id) {
    const posts = await Post.find({author:id}).populate("author","firstName lastName");
    return posts;
}


async function getPostById(id) {
    const post = await Post.findById(id).populate("author", "firstName lastName").populate("votes", "email");
    return post;
}


async function updatePost(id, data) {
    let post = await Post.findById(id);
    post.title = data.title
    post.keyword = data.keyword
    post.location = data.location
    post.date = data.date
    post.image = data.image
    post.description = data.description
    post.author = data.author
    await post.save();
}

async function deletePost(id){
    let post = await Post.findById(id);
    await post.delete();
}


async function votePost(postId, userId, rating){
    const post = await getPostById(postId);
    if(!post.votes.includes(userId)){
        post.votes.push(userId);
    }
    post.rating += rating;

    await post.save();
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    getMyPosts,
    votePost
}