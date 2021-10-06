function solve() {
    const clearButton = document.getElementsByTagName("button")[1];
    clearButton.addEventListener("click", clear);
    const checkButton = document.getElementsByTagName("button")[0];
    checkButton.addEventListener("click", check);

    let flag = true;
    function check() {
        const table = document.getElementsByTagName("input");
        const arr = Array.from(table);
        for (let i = 0; i < 3; i++) {
            if ((Number(arr[i*3].value)) + Number(arr[i*3 + 1].value) + Number(arr[i*3 + 2].value) != 6 || (Number(arr[i].value) + Number(arr[i + 3].value) + Number(arr[i + 6].value)) != 6) {
                flag = false;
                break;
            }
        }
        for (let el of arr) {
            if (el.value == "") {
                flag = false;
                break;
            }
        }
        if (flag) {
            document.getElementById("check").children[0].textContent = "You solve it! Congratulations!";
            document.getElementById("check").children[0].style.color = "green"
            document.getElementsByTagName("table")[0].style.border = "2px solid green"
        }else{
            document.getElementById("check").children[0].textContent = "NOP! You are not done yet...";
            document.getElementById("check").children[0].style.color = "red"
            document.getElementsByTagName("table")[0].style.border = "2px solid red"
        }
    }
    function clear() {
        const table = document.getElementsByTagName("input");
        const arr = Array.from(table);
        for (let el of arr) {
            el.value = "";
        }
        document.getElementById("check").children[0].textContent = "";
        document.getElementsByTagName("table")[0].style.border = ""
    }
}