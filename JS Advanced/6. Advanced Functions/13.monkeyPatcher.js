function solution(str) {
    if (str == "upvote") {
        this.upvotes++
    } else if (str == "downvote") {
        this.downvotes++;
    } else if (str == "score") {
        let additional = 0;
        let rating = "";
        if (this.upvotes + this.downvotes > 50) {
            additional = Math.ceil(Math.max(this.downvotes, this.upvotes) * .25);
        }
        if ((this.upvotes + this.downvotes) < 10) {
            rating = "new";
        } else if (((this.upvotes) / (this.upvotes+ this.downvotes)) > .66) {
            rating = "hot";
        } else if (this.downvotes > this.upvotes) {
            rating = "unpopular";
        } else if ((this.downvotes + this.upvotes + 2 * additional) > 100) {
            rating = "controversial";
        } else {
            rating = "new";
        }
        return [this.upvotes + additional, this.downvotes + additional, this.upvotes - this.downvotes, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 13,
    downvotes: 6
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);

score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);

