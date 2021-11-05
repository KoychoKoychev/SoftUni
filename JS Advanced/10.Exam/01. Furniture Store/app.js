window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById("model");
    const yearField = document.getElementById("year");
    const descrField = document.getElementById("description");
    const priceField = document.getElementById("price");
    const addButton = document.getElementById("add");

    const infoBody = document.getElementById("furniture-list")

    addButton.addEventListener("click", addEl);

    function addEl(ev) {
        ev.preventDefault();
        if (modelField.value != "" && descrField.value != "" && Number(yearField.value) > 0 && Number(priceField.value) > 0) {
            const modelSpace = document.createElement("td");
            modelSpace.textContent = modelField.value;
            const priceSpace = document.createElement("td");
            priceSpace.textContent = Number(priceField.value).toFixed(2);
            const trInfo = document.createElement("tr");
            trInfo.classList.add("info");
            trInfo.appendChild(modelSpace);
            trInfo.appendChild(priceSpace);
            const td = document.createElement("td");
            const moreBtn = document.createElement("button");
            const buyBtn = document.createElement("button");
            moreBtn.textContent = "More Info";
            moreBtn.classList.add("moreBtn");
            moreBtn.addEventListener("click", more);

            
            buyBtn.textContent = "Buy it";
            buyBtn.classList.add("buyBtn");
            buyBtn.addEventListener("click", buy);
            
            td.appendChild(moreBtn);
            td.appendChild(buyBtn);
            
            trInfo.appendChild(td);
            
            trHide = document.createElement("tr");
            trHide.classList.add("hide");
            
            tdYear = document.createElement("td");
            tdYear.textContent = `Year: ${yearField.value}`

            tdDesc = document.createElement("td");
            tdDesc.setAttribute("colspan", "3");
            tdDesc.textContent = `Description: ${descrField.value}`
            
            trHide.appendChild(tdYear);
            trHide.appendChild(tdDesc);
            
            infoBody.appendChild(trInfo);
            infoBody.appendChild(trHide);
            
            function more(ev) {
                const hideElement = ev.target.parentNode.parentNode.nextElementSibling;
                if(ev.target.textContent == "More Info"){
                    ev.target.textContent = "Less Info"
                    hideElement.style.display = "contents"
                }else{
                    ev.target.textContent = "More Info"
                    hideElement.style.display = "none"
                }
            }

            modelField.value = ""
            yearField.value = ""
            descrField.value = ""
            priceField.value = ""
        }

    }
    
    function buy(ev) {
        const thisRow = ev.target.parentNode.parentNode
        const thisAddl = ev.target.parentNode.parentNode.nextElementSibling
        const price = thisRow.children[1].textContent;

        const total = document.querySelector(".total-price");
        total.textContent = (Number(total.textContent) + Number(price)).toFixed(2);

        thisRow.remove();
        thisAddl.remove();
    }
}
