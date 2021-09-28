function search() {
   let list = document.getElementById("towns").children;
   let counter = 0;
   for (let i = 0;i<list.length;i++){
      list[i].style.fontWeight = ""
      list[i].style.textDecoration = "";
   }
   let searchedText = document.getElementById("searchText").value;
   for (let i = 0;i<list.length;i++){
      if (list[i].textContent.includes(searchedText)){
         counter++;
         list[i].style.fontWeight = "bold"
         list[i].style.textDecoration = "underline";
      }
   }
   document.getElementById("result").textContent = `${counter} matches found`
}
