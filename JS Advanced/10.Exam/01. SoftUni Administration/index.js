function solve() {
    const nameField = document.getElementsByName("lecture-name")[0];
    const dateField = document.getElementsByName("lecture-date")[0];
    const lectureField = document.getElementsByName("lecture-module")[0];

    const addButton = document.querySelector(".form-control button");
    addButton.addEventListener("click", add);

    function add(ev) {
        ev.preventDefault();
        const modules = {
            Basics: "BASICS-MODULE",
            Fundamentals: "FUNDAMENTALS-MODULE",
            Advanced: "ADVANCED-MODULE",
            DB: "DB-MODULE",
            Web: "WEB-MODULE"
        }
        const trainings = document.querySelector(".modules");
        if (nameField.value != "" && dateField.value != "" && lectureField.value != "Select module" && lectureField.value != "") {
            const lectureInput = lectureField.value
            let currDiv = "";
            if (trainings.childNodes.length > 1) {
                for (let i = 1; i < Array.from(trainings.childNodes).length; i++) {
                    el = Array.from(trainings.childNodes)[i];
                    let lecture = el.querySelector("h3").textContent;
                    if (lecture == modules[lectureInput]) {
                        currDiv = el;
                        break;
                    }
                }
            }
            if (currDiv == "") {
                currDiv = document.createElement("div");
                currDiv.classList.add("module")
                const heading = document.createElement("h3");
                heading.textContent = modules[lectureInput];
                currDiv.appendChild(heading);
                const ul = document.createElement("ul");
                const li = document.createElement("li");
                li.classList.add("flex");
                const h4 = document.createElement("h4");
                let date = dateField.value.split("T")[0].split("-").join("/");
                let time = dateField.value.split("T")[1];
                h4.textContent = [nameField.value, date, time].join(" - ");
                const delButton = document.createElement("button");
                delButton.classList.add("red");
                delButton.textContent = "Del"
                delButton.addEventListener("click", del);
                li.appendChild(h4);
                li.appendChild(delButton);
                ul.appendChild(li);
                currDiv.appendChild(ul);
                trainings.appendChild(currDiv);
            } else {
                const ul = currDiv.querySelector("ul");
                const li = document.createElement("li");
                li.classList.add("flex");
                const h4 = document.createElement("h4");
                let date = dateField.value.split("T")[0].split("-").join("/");
                let time = dateField.value.split("T")[1];
                h4.textContent = [nameField.value, date, time].join(" - ");
                const delButton = document.createElement("button");
                delButton.classList.add("red");
                delButton.textContent = "Del"
                delButton.addEventListener("click", del);
                li.appendChild(h4);
                li.appendChild(delButton);
                ul.appendChild(li);

                let lectureList = ul.childNodes;
                const sortedList = Array.from(lectureList).sort((a,b)=>{
                    let first = a.querySelector("h4").textContent.split(" - ").slice(1).join(" - ");
                    let second = b.querySelector("h4").textContent.split(" - ").slice(1).join(" - ");
                    return first.localeCompare(second);
                })
                for (el of sortedList){
                    ul.appendChild(el);
                }
            }
        }
    }
    function del(ev) {
        if(ev.target.parentNode.parentNode.children.length == 1){
            ev.target.parentNode.parentNode.parentNode.remove();
        }else{
            ev.target.parentNode.remove();
        }
    }
}