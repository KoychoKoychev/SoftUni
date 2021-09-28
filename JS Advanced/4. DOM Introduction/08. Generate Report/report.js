function generateReport() {
    let result = [];
    let checked = [];
    document.getElementById("output").value = '';
    let header = document.querySelector("thead > tr").children;
    for (let i = 0; i < header.length; i++) {
        if (header[i].lastElementChild.checked) {
            checked.push(i);
        }
    }
    let body = document.querySelector("tbody").children;
    for (let i = 0; i < body.length; i++) {
        let obj = {};
        for (let j = 0; j < checked.length; j++) {
            obj[header[checked[j]].lastElementChild.name] = body[i].children[checked[j]].textContent;
        }
        result.push(obj);
    }
    document.getElementById("output").value = JSON.stringify(result);
}
