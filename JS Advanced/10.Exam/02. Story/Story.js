class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }
    like(name) {
        if (this._likes.includes(name)) {
            throw new Error("You can't like the same story twice!");
        } else if (this.creator == name) {
            throw new Error("You can't like your own story!");
        } else {
            this._likes.push(name);
            return `${name} liked ${this.title}!`
        }
    }
    dislike(name) {
        if (!this._likes.includes(name)) {
            throw new Error("You can't dislike this story!");
        } else {
            let index = this._likes.indexOf(name);
            this._likes.splice(index, 1);
            return `${name} disliked ${this.title}`
        }
    }
    comment(username, content, id) {

        const ids = this._comments.map(x => x.Id);
        if (!ids.includes(id) || id == undefined) {
            id = this._comments.length + 1;
            this._comments.push({
                Id: id,
                Username: username,
                Content: content,
                Replies: [],
            })
            return `${username} commented on ${this.title}`
        }
        if (ids.includes(id)) {
            let index = ids.indexOf(id);
            let replyId = Number(id) + 0.1 * (this._comments[index].Replies.length + 1)
            this._comments[index].Replies.push({
                Id: replyId,
                Username: username,
                Content: content,
            })
            return "You replied successfully";
        }
    }
    toString(str) {
        let result = [`Title: ${this.title}`,
        `Creator: ${this.creator}`,
        `Likes: ${this._likes.length}`,
            `Comments:`
        ];
        let sortedArr = []
        if (str == 'asc') {
            sortedArr = this._comments.sort((a, b) => Number(a.Id) - Number(b.Id));

            for (let el of sortedArr) {
                result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
                if (el.Replies.length > 0) {
                    el.Replies = el.Replies.sort((a, b) => Number(a.Id) - Number(b.Id));
                    for (let rep of el.Replies) {
                        result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`);
                    }
                }
            }

        } else if (str == "desc") {
            sortedArr = this._comments.sort((a, b) => Number(b.Id) - Number(a.Id));

            for (let el of sortedArr) {
                result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
                if (el.Replies.length > 0) {
                    el.Replies = el.Replies.sort((a, b) => Number(b.Id) - Number(a.Id));
                    for (let rep of el.Replies) {
                        result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`);
                    }
                }
            }
        } else if (str == "username") {
            sortedArr = this._comments.sort((a, b) => a.Username.localeCompare(b.Username));


            for (let el of sortedArr) {
                result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
                if (el.Replies.length > 0) {
                    el.Replies = el.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
                    for (let rep of el.Replies) {
                        result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`);
                    }
                }
            }
        }

        return result.join("\n")
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
