function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let list = document.querySelectorAll("tbody > tr");
      let searchedText = document.getElementById("searchField").value;
      for (let i = 0;i<list.length;i++){
         list[i].className = "";
      }
      for (let i = 0;i<list.length;i++){
         let current = list[i];
         for (let j=0;j<current.children.length;j++){
            if (current.children[j].textContent.includes(searchedText)){
               current.className="select";
               break;
            }
         }
      }
   }
}
