document.getElementById("form").addEventListener("submit",submitData);

displayStudents();


async function loadStudents() {
    const url = `http://localhost:3030/jsonstore/collections/students`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function submitStudent(obj) {
    const url = `http://localhost:3030/jsonstore/collections/students`;
    const res = await fetch(url,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    });
    const data = await res.json();

    return data;
}

async function displayStudents() {
    const list = await loadStudents();

    const table = document.querySelector("#results tbody");
    table.replaceChildren();

    for (let el of Object.values(list)){
        const fistName = e("th");
        fistName.textContent = el.firstName;
        const lastName = e("th");
        lastName.textContent = el.lastName;
        const facultyNumber = e("th");
        facultyNumber.textContent = el.facultyNumber;
        const grade = e("th");
        grade.textContent = el.grade;
        const tr = e("tr",{},fistName,lastName,facultyNumber,grade);
        table.appendChild(tr);
    }
}

async function submitData(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const facultyNumber = formData.get("facultyNumber");
    const grade = formData.get("grade");

    const obj = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }

    await submitStudent(obj);
    await displayStudents();
}

function e(tag, atrributesObj, ...children) {
    const element = document.createElement(tag);
    if(atrributesObj){
        for (const [attribute, value] of Object.entries(atrributesObj)) {
            element.setAttribute(attribute, value)
        }
    }
    for (let el of children) {
        element.appendChild(el);
    }
    return element;
}