class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }
    render(id) {
        const docId = document.getElementById(id);
        const art = document.createElement("article");
        const titleDiv = document.createElement("div");
        this._titleDiv = titleDiv;
        titleDiv.classList.add("title");
        if (this._online) {
            titleDiv.classList.add("online");
        }
        titleDiv.textContent = `${this.firstName} ${this.lastName}`;
        const button = document.createElement("button");
        button.innerHTML = "&#8505";
        const infoDiv = document.createElement("div");
        button.addEventListener("click", (ev) => {
            console.log(infoDiv);
            if (infoDiv.style.display == "none") {
                infoDiv.style.display = "block"
            } else {
                infoDiv.style.display = "none"
            }
        })
        titleDiv.appendChild(button);
        infoDiv.classList.add("info");
        infoDiv.innerHTML = `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`;
        infoDiv.style.display = "none";
        art.appendChild(titleDiv);
        art.appendChild(infoDiv);
        docId.appendChild(art);
    }
    set online(value) {
        if (this._titleDiv) {
            if (value) {
                this._titleDiv.classList.add("online");
            } else {
                this._titleDiv.classList.remove("online")
            }
        }
        this._online = value;
    }
    get online() {
        return this._online
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);

{/* <article>
<div class="title">{firstName lastName}<button>&#8505;</button></div>
<div class="info">
    <span>&phone; {phone}</span>
    <span>&#9993; {email}</span>
</div>
</article> */}