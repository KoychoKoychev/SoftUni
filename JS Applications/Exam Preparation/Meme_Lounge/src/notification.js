export function notify(message) {
    const div = document.querySelector("#errorBox");
    const textField = div.querySelector("span")
    div.style.display="block";
    textField.textContent = message;
    setTimeout(()=>div.style.display="none",3000)
}