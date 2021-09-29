function extractText() {
    let collection = document.getElementById("items").children;
    let result = [];
    for (let i = 0; i<collection.length;i++){
        result.push(collection[i].textContent);
    }
    document.getElementById("result").value=result.join('\n');
}
