function solve() {
  const inputField = document.getElementsByTagName("textarea")[0];
  const outputField = document.getElementsByTagName("textarea")[1];
  const genButton = document.getElementsByTagName("button")[0];
  genButton.addEventListener("click", generate);
  const buyButton = document.getElementsByTagName("button")[1];
  buyButton.addEventListener("click", buy);


  function generate(ev) {
    if (inputField.value) {
      let arr = JSON.parse(inputField.value);
      const body = document.getElementsByTagName("tbody")[0];
      for (let el of arr) {
        const newLine = document.createElement("tr");
        const image = document.createElement("img");
        image.setAttribute("src", el.img);
        const imageRow = document.createElement("td");
        imageRow.appendChild(image);
        newLine.appendChild(imageRow);
        newLine.innerHTML += `<td><p>${el.name}</p></td>`
        newLine.innerHTML += `<td><p>${el.price}</p></td>`
        newLine.innerHTML += `<td><p>${el.decFactor}</p></td>`
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        let checkField = document.createElement("td")
        checkField.appendChild(check);
        newLine.appendChild(checkField);
        body.appendChild(newLine);
      }
      inputField.value = "";
    }
  }

  function buy(ev) {
    console.log(ev);
    let checkboxes = document.getElementsByTagName("input");
    let arr = Array.from(checkboxes);
    let listOfNames = [];
    let totalPrice = 0;
    let listOfFactors = [];
    for (let el of arr) {
      let line = el.parentNode.parentNode.getElementsByTagName("p");
      const name = line[0].textContent;
      const price = Number(line[1].textContent);
      const factor = Number(line[2].textContent);
      if (el.checked) {
        listOfNames.push(name);
        totalPrice += price;
        listOfFactors.push(factor);
      }
    }
    outputField.value += `Bought furniture: ${listOfNames.join(", ")}\n`;
    outputField.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputField.value += `Average decoration factor: ${(listOfFactors.reduce((a,b)=>a+b,0))/listOfFactors.length}`
  }
}