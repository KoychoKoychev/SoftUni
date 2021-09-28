function solve() {
  let inputText = document.getElementById("input").value;
  let arr = inputText.split(".").filter((p) => p.length > 0);
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    let sentance = arr[i];
    result += sentance + ".";
    if (i == arr.length - 1) {
      document.getElementById("output").innerHTML +=
        `<p>${result}</p>`;
        break;
    } if ((i + 1) % 3 == 0) {
      document.getElementById("output").innerHTML +=
        `<p>${result}</p>`;
      result = "";
    }
  }
}
