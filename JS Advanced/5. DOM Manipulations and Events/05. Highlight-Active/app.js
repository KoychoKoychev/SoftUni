function focused() {
    const elements = document.getElementsByTagName("input")
    const arr = Array.from(elements);
    for (el of arr){
        el.addEventListener("focus",onFocus);
        el.addEventListener("blur",onBlur);
    }
    function onFocus(el){
        el.target.parentNode.setAttribute("class","focused");
    }
    function onBlur(el){
        el.target.parentNode.setAttribute("class","");
    }
}
