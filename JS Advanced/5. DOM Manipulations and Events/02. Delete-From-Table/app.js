function deleteByEmail() {
    const email = document.getElementsByName("email")[0].value;
    const table = document.querySelector("tbody").children;
    for (let i =0;i<table.length;i++){
        if (email == table[i].children[1].textContent){
            table[i].remove();
            document.getElementById("result").textContent = "Deleted";
            break;
        }else{
            document.getElementById("result").textContent = "Not found.";
        }
    }
    document.getElementsByName("email")[0].value = "";
}
