import { getAllMemes, getMyMemes, getUserData } from "./api/data.js";
import { html } from "./lib.js";

const profileTemplate = (userData, memesArr) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${memesArr.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${  memesArr.length > 0 
        ?   memesArr.map(memeCard)
        :   html`<p class="no-memes">No memes in database.</p>`
        }
    </div>
</section>
`

const memeCard = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`

export async function profilePage(ctx) {
    let userId
    let userData
    if (sessionStorage.hasOwnProperty("userData")) {
        userData = getUserData()
        userId = userData.id
    }
    const memesArr = await getMyMemes(userId)
    ctx.render(profileTemplate(userData,memesArr));
}