import { html, page } from "./library.js";
import { register } from "./requests.js";

let errors = {
    email: false,
    password: false,
    rePass: false,
}

const registerTemplate = (registerEv) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${registerEv}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control${errors.email ? " is-invalid"  : ""}" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control${errors.password ? " is-invalid"  : ""}" id="password" type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control${errors.rePass ? " is-invalid"  : ""}" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>
`


export function registerPage(ctx) {
    ctx.render(registerTemplate(registerEv));

    async function registerEv(ev) {
        ev.preventDefault();
        const form = new FormData(ev.target);
        const email = form.get("email");
        const password = form.get("password");
        const rePass = form.get("rePass");
        if (email != "" && password != "" && password == rePass) {
            await register(email, password);
            page.redirect("/");
        } else if (password != rePass){
            alert("Passwords don't match.")
        }
        else {
            if (email == "") {
                errors.email = true;
            }else{
                errors.email = false;
            }
            if (password == "") {
                errors.password = true;
            }else{
                errors.password = false;
            }
            if (rePass == "") {
                errors.rePass = true;
            }else{
                errors.rePass = false;
            }
            ctx.render(registerTemplate(registerEv));
        }
    }
}
