async function lockedProfile() {
    const main = document.getElementById("main");
    const childTemplate = main.children[0];
    main.replaceChildren();
    const data = await loadProfiles();
    for (let i = 0; i < Object.values(data).length; i++) {
        const el = Object.values(data)[i];
        const current = childTemplate.cloneNode(true);
        const radioButtons = current.querySelectorAll("[type=radio]");
        radioButtons[0].name = `user${i}Locked`;
        radioButtons[1].name = `user${i}Locked`;
        current.querySelector("[name=user1Username]").value = el.username;
        current.querySelector("[name=user1Email]").value = el.email;
        current.querySelector("[name=user1Age]").value = el.age;
        main.appendChild(current);
    }
    main.addEventListener("click", reveal)
}
function reveal(ev) {
    if (ev.target.tagName == "BUTTON") {
        const parent = ev.target.parentNode;
        const unlockedButton = parent.querySelector("[value = unlock]");
        if (unlockedButton.checked){
            if(ev.target.textContent == "Show more"){
                ev.target.textContent = "Show less"
            }else{
                ev.target.textContent = "Show more"
            }
            let hiddenField = ev.target.previousElementSibling;
            if (hiddenField.style.display == ''){
                hiddenField.style.display = "block";
            }else {
                hiddenField.style.display = "";
            }
        }
    }
}

async function loadProfiles() {
    const url = "http://localhost:3030/jsonstore/advanced/profiles";
    const res = await fetch(url);
    const data = await res.json();

    return data;
}