function sumTable() {
    let table = document.querySelector("tbody");
    let lines = table.children
    let sum = 0;
    for (let i =1;i<lines.length-1;i++){
        let num = lines[i].lastElementChild.textContent;
        sum += Number(num);
    }
    document.getElementById("sum").textContent = sum;
}
