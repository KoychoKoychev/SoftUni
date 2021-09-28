function solve() {
    document.getElementById("selectMenuTo").innerHTML +=
        `<option value="binary">Binary</option>`;
    document.getElementById("selectMenuTo").innerHTML +=
        `<option value="hexadecimal">Hexadecimal</option>`;
    document.getElementsByTagName("button")[0].setAttribute("type", "button");
    document.getElementsByTagName("button")[0].onclick = function showResult() {
        let decimalNum = document.getElementById("input").value;
        let binaryNum = Number(decimalNum).toString(2);
        let hexNum = Number(decimalNum).toString(16).toUpperCase();
        if (document.getElementById('selectMenuTo').value == "binary") {
            document.getElementById("result").value = binaryNum;
        } else if (document.getElementById('selectMenuTo').value == "hexadecimal") {
            document.getElementById("result").value = hexNum;
        }
    }
}
