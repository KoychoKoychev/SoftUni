function solve() {
    const addButton = document.getElementById("add")
    const inputTask = document.getElementById("task")
    const inputDisc = document.getElementById("description")
    const inputDate = document.getElementById("date")
    const openedList = document.getElementsByTagName('section')[1].querySelectorAll("div")[1];
    const progressList = document.getElementById("in-progress");
    const completedList = document.getElementsByTagName('section')[3].querySelectorAll("div")[1];
    
    addButton.addEventListener("click",add);

    function add(ev){
        ev.preventDefault()
        if (inputTask.value != "" && inputDisc.value !="" && inputDate.value != ""){
            let currentJob = `<article>
            <h3>${inputTask.value}</h3>
            <p>Description: ${inputDisc.value}</p>
            <p>Due Date: ${inputDate.value}</p>
            <div class="flex">
            <button class="green">Start</button>
            <button class="red">Delete</button>
            </div>
            `
            openedList.innerHTML += currentJob;
            inputTask.value="";
            inputDisc.value="";
            inputDate.value="";
            let greenList = openedList.querySelectorAll("button.green");
            let redList = openedList.querySelectorAll("button.red");

            for (let i=0;i<=greenList.length;i++){
                greenList[i].addEventListener("click",initiate);
                redList[i].addEventListener("click",del);
            }
        }
    }
    function initiate(ev){
        let curTask = ev.target.parentNode.parentNode;
        let but = curTask.querySelector("button.green")
        but.classList.replace("green","orange");
        but.textContent = "Finish";
        but.removeEventListener("click",initiate);
        but.addEventListener("click",fin);
        curTask.querySelector("div").appendChild(but);
        progressList.appendChild(curTask);
    }
    function del(ev){
        ev.target.parentNode.parentNode.remove();
    }
    function fin(ev){
        let curTask = ev.target.parentNode.parentNode;
        curTask.querySelector("div").remove();
        completedList.appendChild(curTask);
    }
}