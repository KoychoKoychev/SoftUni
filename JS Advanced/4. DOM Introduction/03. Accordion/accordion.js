function toggle() {
    let commandText = document.querySelector(".head > span").textContent;
    if (commandText.toLocaleLowerCase() == "more") {
        document.querySelector(".head > span").textContent = "Less";
        document.getElementById("extra").style.display = 'block';
    } else {
        document.querySelector(".head > span").textContent = "More";
        document.getElementById("extra").style.display = 'none';
    }
}
