function validate() {
    const pattern = /[a-z]+@[a-z]+\.[a-z]+$/;
    const input = document.getElementById("email");
    input.addEventListener("change",onChange);

    function onChange (el){
        if (!pattern.test(el.target.value)){
            el.target.setAttribute("class","error")
        }else{
            el.target.setAttribute("class","");
        }
    }
}
