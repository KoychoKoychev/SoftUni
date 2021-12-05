import { login } from "./api/requests.js";
import { updateUserNav } from "./app.js";
import { html } from "./lib.js";

const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="container">
        <form @submit=${onLogin} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>
            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>
`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onLogin));

    async function onLogin(ev) {
        ev.preventDefault();
        const fromData = new FormData(ev.target)
        const username = fromData.get("username")
        const password = fromData.get("password")

        if (username == "" || password == "") {
            return alert("Fill all fields.")
        } else {
            await login(username, password);
            updateUserNav();
            ctx.page.redirect("/catalog");
        }
    }
}