import { login } from "./api/requests.js";
import { updateUserNav } from "./app.js";
import { html } from "./lib.js";

const loginTemplate = (onLogin) => html`
<section id="login-page" class="auth">
    <form @submit=${onLogin} id="login">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>
`;

export async function loginPage(ctx){
    ctx.render(loginTemplate(onLogin));

    async function onLogin(ev) {
        ev.preventDefault();
        const fromData = new FormData(ev.target)
        const email = fromData.get("email")
        const password = fromData.get("password")

        if(email=="" || password ==""){
            return alert("Fill all fields.")
        }else{
            await login(email,password);
            updateUserNav();
            ctx.page.redirect("/home");
        }
    }
}