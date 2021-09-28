function solve() {
  let textArr = document.getElementById("text").value.split(" ").map((x) => x.toLowerCase());
  let convention = document.getElementById("naming-convention").value;
  result = '';
  for (i = 0;i<textArr.length;i++){
    if (convention == "Camel Case"){
      if (i == 0){
        result += textArr[i];
      }else {
        result+=(textArr[i][0].toUpperCase()+textArr[i].slice(1));
      }
    }else if (convention == "Pascal Case"){
      result+=(textArr[i][0].toUpperCase()+textArr[i].slice(1));
    }else {
      result = "Error!"
    }
  }
  document.getElementById("result").textContent = result;
}
