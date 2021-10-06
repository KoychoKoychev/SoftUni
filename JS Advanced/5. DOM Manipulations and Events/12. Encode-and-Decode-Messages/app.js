function encodeAndDecodeMessages() {
    document.getElementsByTagName("button")[0].addEventListener("click", code);
    document.getElementsByTagName("button")[1].addEventListener("click", decode);
    function code(ev) {
        const text = ev.target.parentNode.getElementsByTagName("textarea")[0].value;
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i) + 1;
            let char = String.fromCharCode(charCode);
            newText += char;
        }
        document.getElementsByTagName("textarea")[1].value = newText;
        ev.target.parentNode.getElementsByTagName("textarea")[0].value = "";
    }
    function decode(ev) {
        const text = ev.target.parentNode.getElementsByTagName("textarea")[0].value;
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i) - 1;
            let char = String.fromCharCode(charCode);
            newText += char;
        }
        ev.target.parentNode.getElementsByTagName("textarea")[0].value = newText;
    }
}