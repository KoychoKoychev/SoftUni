import { deleteGame, getAllComments, getUserData, loadGameById, postComment } from "./api/data.js";
import { html } from "./lib.js";

const detailsTemplate = (game, userId, onDelete, comments, submitComment) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            
        <!-- list all comments for current game (If any) -->
        <ul> 
             ${comments.length > 0 
             ? html`${comments.map(commentCard)}`
             :null}
        </ul> 
            ${comments.length == 0 ? html`<p class="no-comment">No comments.</p>` : null }               
        <!-- Display paragraph: If there are no games in the database -->

        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${userId == game._ownerId 
            ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click = ${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>`
            : null}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${(userId && userId != game._ownerId) ? html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit = ${submitComment} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>
    `:null}
</section>
`;

const commentCard = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>
`

export async function detailsPage(ctx) {
    const game = await loadGameById(ctx.params.id);
    let userId;
    if (getUserData()) {
        userId = getUserData().id;
    }
    const comments = await getAllComments(ctx.params.id)

    ctx.render(detailsTemplate(game, userId, onDelete, comments, submitComment));

    async function onDelete(ev) {
        ev.preventDefault();
        const accept = confirm("Are you sure you want to delete this game?")
        if(accept){
            await deleteGame(ctx.params.id);
            ctx.page.redirect("/home")
        }
    }

    async function submitComment(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);

        const comment = formData.get("comment")
        if(comment == ""){
            return alert("Please write a comment!")
        }else{
            postComment({
                "gameId":ctx.params.id,
                comment
            })
            ev.target.reset();
            ctx.page.redirect("/details/" + ctx.params.id);
        }
    }
}