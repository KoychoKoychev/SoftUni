import { register } from "./api/requests.js";
import { updateUserNav } from "./app.js";
import { html } from "./lib.js";

const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="container">
        <form @submit=${onRegister} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onRegister));

    async function onRegister(ev) {
        ev.preventDefault();
        const fromData = new FormData(ev.target)
        const username = fromData.get("username")
        const password = fromData.get("password");
        const rePass = fromData.get("repeatPass");

        if (username == "" || password == "") {
            return alert("Fill all fields.");
        } else if (password != rePass) {
            return alert("Passwords don\'t match.");
        } else {
            await register(username, password);
            updateUserNav();
            ctx.page.redirect("/catalog");
        }
    }
}