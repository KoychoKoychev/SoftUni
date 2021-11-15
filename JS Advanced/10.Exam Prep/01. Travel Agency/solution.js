window.addEventListener('load', solution);

function solution() {
  const nameField = document.getElementById("fname");
  const emailField = document.getElementById("email");
  const phoneField = document.getElementById("phone");
  const adressField = document.getElementById("address");
  const pcodeField = document.getElementById("code");

  let name = '';
  let emial = '';
  let phone = '';
  let adress = '';
  let pcode = '';

  const submitBut = document.getElementById("submitBTN");

  submitBut.addEventListener("click", collect);

  function collect(ev) {
    const nameList = document.createElement("li");
    nameList.textContent = `Full Name: ${nameField.value}`
    const emailList = document.createElement("li");
    emailList.textContent = `Email: ${emailField.value}`
    const phoneList = document.createElement("li");
    phoneList.textContent = `Phone Number: ${phoneField.value}`
    const adressList = document.createElement("li");
    adressList.textContent = `Address: ${adressField.value}`
    const pcodeList = document.createElement("li");
    pcodeList.textContent = `Postal Code: ${pcodeField.value}`

    if (nameField.value != "" && emailField.value != "") {
      const ud = document.getElementById("infoPreview")
      ud.appendChild(nameList);
      ud.appendChild(emailList);
      ud.appendChild(phoneList);
      ud.appendChild(adressList);
      ud.appendChild(pcodeList);

      name = nameField.value;
      emial = emailField.value;
      phone = phoneField.value;
      adress = adressField.value;
      pcode = pcodeField.value;

      nameField.value = "";
      emailField.value = "";
      phoneField.value = "";
      adressField.value = "";
      pcodeField.value = "";

      ev.target.disabled = true;
      document.getElementById("editBTN").disabled = false
      document.getElementById("editBTN").addEventListener("click", edit)
      document.getElementById("continueBTN").disabled = false
      document.getElementById("continueBTN").addEventListener("click", cont);
    }

    function edit(ev) {
      nameField.value = name;
      emailField.value = emial;
      phoneField.value = phone;
      adressField.value = adress;
      pcodeField.value = pcode;

      const children = document.getElementById("infoPreview").childNodes
      for (let el of Array.from(children)) {
        el.remove();
      }
      submitBut.disabled = false;
      ev.target.disabled = true;
      document.getElementById("continueBTN").disabled = true;
    }
    function cont(ev) {
      const divBlock = document.getElementById("block");
      for (let el of Array.from(divBlock.childNodes)){
        el.remove();
      }
      const heading = document.createElement("h3");
      heading.textContent = "Thank you for your reservation!"
      divBlock.appendChild(heading);
    }
  }
}