function create(words) {
   for (let word of words){
      const div = document.createElement("div");
      const par = document.createElement("p");
      par.style.display = "none";
      par.textContent = word;
      div.addEventListener("click",onClick);
      div.appendChild(par);
      document.getElementById("content").appendChild(div);
   };
   function onClick(el){
      const curDiv = el.target
      curDiv.children[0].style.display = "inline"
   }
}
