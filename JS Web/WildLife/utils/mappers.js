function mapErrors(err) {
    if (Array.isArray(err)) {
        return err;
    } else if (typeof err.message == "string") {
        return [{ msg: err.message }]
    } else if (err.name = "ValidationError") {
        return Object.values(err.errors).map(e => ({ msg: e.message }));
    } else {
        return [{ msg: "Request error" }]
    }
}

function postMap(post) {
    return {
        id: post._id,
        title: post.title,
        keyword: post.keyword,
        location: post.location,
        date: post.date,
        image: post.image,
        description: post.description,
        rating: post.rating,
        votes: post.votes.map(voteMap),
        author: authorMap(post.author)
    }
}

function authorMap(data) {
    return {
        id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
    }
}

function voteMap(data) {
    return {
        id: data._id,
        email: data.email,
    }
}

module.exports = {
    mapErrors,
    postMap
};