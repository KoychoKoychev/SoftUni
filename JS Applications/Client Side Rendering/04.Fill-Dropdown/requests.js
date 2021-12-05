export async function loadList() {
    const res = await fetch("http://localhost:3030/jsonstore/advanced/dropdown");
    try {
        if (res.ok != true) {
            const data = await res.json();
            throw new Error(data.message)
        } else {
            const data = await res.json();
            return Object.values(data);
        }
    } catch (error) {
        alert(error.message);
    }
}

export async function sendOption(data) {
    const res = await fetch("http://localhost:3030/jsonstore/advanced/dropdown",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({text:data})
    });
    try {
        const data = await res.json();
        if (res.ok != true) {
            throw new Error(data.message)
        } else {
            return data;
        }
    } catch (error) {
        alert(error.message);
    }
}