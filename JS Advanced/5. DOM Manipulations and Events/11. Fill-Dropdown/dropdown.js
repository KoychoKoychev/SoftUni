function addItem() {
    const text = document.getElementById("newItemText").value;
    const value = document.getElementById("newItemValue").value;
    let opt = document.createElement("option");
    opt.textContent = text;
    opt.value = value;
    document.getElementById("menu").appendChild(opt);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}