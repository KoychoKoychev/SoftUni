function solve() {
   const authorField = document.getElementById("creator");
   const titleField = document.getElementById("title");
   const categoryField = document.getElementById("category");
   const contentField = document.getElementById("content");

   const createButton = document.getElementsByClassName("btn create")[0];
   createButton.addEventListener("click", cr);

   const posts = document.querySelector(".site-content main section")

   function cr(e) {
      e.preventDefault();
      const article = document.createElement("article");

      const heading = document.createElement("h1");
      heading.textContent = titleField.value;

      article.appendChild(heading);

      const category = document.createElement("p");
      category.textContent = "Category:";
      const catInput = document.createElement("strong");
      catInput.textContent = categoryField.value;

      category.appendChild(catInput);
      article.appendChild(category);

      const creator = document.createElement("p");
      creator.textContent = "Creator:"
      const creatorInput = document.createElement("strong");
      creatorInput.textContent = authorField.value;

      creator.appendChild(creatorInput);
      article.appendChild(creator);

      const content = document.createElement("p");
      content.textContent = contentField.value;

      article.appendChild(content);

      const divBut = document.createElement("div");
      divBut.classList.add("buttons")
      const delBut = document.createElement("button");
      delBut.textContent = "Delete";
      delBut.classList.add("btn","delete")
      delBut.addEventListener("click", del);
      const archBut = document.createElement("button");
      archBut.textContent = "Archive";
      archBut.classList.add("btn","archive");
      archBut.addEventListener("click", arch);

      divBut.appendChild(delBut);
      divBut.appendChild(archBut);
      article.appendChild(divBut);
      posts.appendChild(article);
      authorField.value = "";
      titleField.value = "";
      categoryField.value = "";
      contentField.value = "";
   }

   function del(ev) {
      ev.target.parentNode.parentNode.remove();
   }
   function arch(ev) {
      const title = ev.target.parentNode.parentNode.querySelector("h1").textContent;
      ev.target.parentNode.parentNode.remove();
      const curArticle = document.createElement("li");
      curArticle.textContent = title;
      const listNode = document.querySelector(".archive-section ol");
      listNode.appendChild(curArticle);

      const archived = document.querySelectorAll(".archive-section ol li");
      let sorted = sort(archived);
      for (let el of sorted){
         listNode.appendChild(el);
      }
   }
   function sort(nodes) {
      const sortedNodes = Array.from(nodes).sort((a,b)=>a.textContent.localeCompare(b.textContent));
      return sortedNodes;
   }
}
