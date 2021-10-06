function lockedProfile() {
    const buttons = document.getElementsByTagName("button");
    let arr = Array.from(buttons);
    for (let el of arr) {
        el.addEventListener("click", onClick);
    }
    function onClick(ev) {
        if(ev.target.parentNode.querySelectorAll("[type='radio']")[1].checked){
            if (ev.target.textContent == "Show more"){
                ev.target.textContent = "Hide it";
                ev.target.parentNode.getElementsByTagName("div")[0].style.display = "inline";
            }else{
                ev.target.textContent = "Show more"
                ev.target.parentNode.getElementsByTagName("div")[0].style.display = "none";
            }
        }
    }
}