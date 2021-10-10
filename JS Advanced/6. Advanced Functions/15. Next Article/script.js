function getArticleGenerator(articles) {
    const resultDiv = document.querySelector("#content");
    function showArticle(){
        if (articles.length>0){
            let newArticle = document.createElement("article");
            newArticle.textContent = articles.shift();
            resultDiv.appendChild(newArticle);
        }
    }
    return showArticle;
}
