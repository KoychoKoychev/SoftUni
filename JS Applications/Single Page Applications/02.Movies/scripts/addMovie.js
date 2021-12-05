import { showHome } from "./app.js";

export const addForm = document.querySelector("#add-movie");
export function showAddMovie(ev) {
    ev.preventDefault();
    document.querySelector(".visible").replaceChildren(addForm);
}

addForm.querySelector("form").addEventListener("submit",addMovie);

async function addMovie(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const img = formData.get("imageUrl");
    if (title && description && img && sessionStorage.hasOwnProperty("userData")){
        const token = JSON.parse(sessionStorage.userData).token;
        const obj = {
            title,
            description,
            img,
        }
        const result = await fetch("http://localhost:3030/data/movies",{
            method:"post",
            headers:{
                "Content-Type":"applications/json",
                "X-Authorization":token
            },
            body:JSON.stringify(obj)
        })
        try{
            if(result.ok!=true){
                const error = result.message;
                throw new Error(error);
            }else{
                ev.target.reset();
                showHome();
            }
        }catch(er){
            alert(er.message);
        }
    }else{
        alert("Fill all fields.")
    }
}