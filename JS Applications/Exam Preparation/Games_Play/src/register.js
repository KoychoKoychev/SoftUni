import { register } from "./api/requests.js";
import { updateUserNav } from "./app.js";
import { html } from "./lib.js";

const registerTemplate = (onRegister) => html`
<section id="register-page" class="content auth">
    <form @submit=${onRegister} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onRegister));

    async function onRegister(ev) {
        ev.preventDefault();
        const fromData = new FormData(ev.target)
        const email = fromData.get("email")
        const password = fromData.get("password");
        const rePass = fromData.get("confirm-password");

        if (email == "" || password == "") {
            return alert("Fill all fields.");
        } else if(password!=rePass) {
            return alert("Passwords don\'t match.");
        }else {
            await register(email, password);
            updateUserNav();
            ctx.page.redirect("/home");
        }
    }
}