import { html,page } from "./library.js";
import { login } from "./requests.js";

let errors = {
    email: false,
    password: false
}



const loginTemplate = (loginEv,errors) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${loginEv}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control${errors.email ? " is-invalid"  : ""}" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control${errors.password ? " is-invalid"  : ""}" id="password" type="password"
                    name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>
</div>
`

export function loginPage(ctx) {
    ctx.render(loginTemplate(loginEv,errors));

    async function loginEv(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const email = formData.get("email");
        const password = formData.get("password");
    
        if (email != "" && password != "") {
            await login(email, password);
            page.redirect("/");
        } else {
            if (email == "") {
                errors.email = true;
            }else{
                errors.email = false;
            }
            if (password == "") {
                errors.password = true
            }else{
                errors.password = false
            }
            ctx.render(loginTemplate(loginEv,errors));
        }
    }
}