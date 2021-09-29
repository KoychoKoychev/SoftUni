function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\(.+?\)/g;
    let match = text.match(pattern);
    let result = [];
    for (let el of match){
        result.push(el.slice(1,-1));
    }
    return result.join("; ");
}
