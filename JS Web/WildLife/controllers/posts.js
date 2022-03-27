const { isUser } = require("../middleware/guards");
const { createPost, getPostById, updatePost, deletePost, votePost } = require("../services/posts");
const { mapErrors, postMap } = require("../utils/mappers");

const router = require("express").Router();

router.get("/create", isUser(), async (req, res) => {
    res.render("create", { title: "Create Page" })
})

router.post("/create", isUser(), async (req, res) => {
    const post = {
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        date: req.body.date,
        image: req.body.image,
        description: req.body.description,
        author: req.session.user._id
    }
    try {
        await createPost(post);
        res.redirect("/")
    } catch (err) {
        const errors = mapErrors(err);
        res.render("create", { title: "Create Page", post, errors })
    }
})

router.get("/edit/:id", isUser(), async (req, res) => {
    const id = req.params.id;
    const post = postMap(await getPostById(id));
    res.render("edit", { title: `Edit ${post.title}`, post })
})

router.post("/edit/:id", isUser(), async (req, res) => {
    const id = req.params.id;
    const post = {
        id: id,
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        date: req.body.date,
        image: req.body.image,
        description: req.body.description,
        author: req.session.user._id
    }
    try {
        await updatePost(id, post);
        res.redirect("/catalog");
    } catch (err) {
        const errors = mapErrors(err);
        res.render("edit", { title: `Edit ${post.title}`, post, errors })
    }
})

router.get("/delete/:id", isUser(), async (req, res) => {
    const id = req.params.id;
    await deletePost(id);
    res.redirect("/catalog")

})

router.get("/upvote/:id", isUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.session.user._id;
    await votePost(id,userId,1);
    res.redirect(`/details/${id}`)
});

router.get("/downvote/:id", isUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.session.user._id;
    await votePost(id,userId,-1);
    res.redirect(`/details/${id}`)
})

module.exports = router;
