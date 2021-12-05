export async function loadList() {
    const res = await fetch("http://localhost:3030/jsonstore/collections/books");
    try {
        if (res.ok != true) {
            const data = await res.json();
            throw new Error(data.message)
        } else {
            const data = await res.json();
            return data;
        }
    } catch (error) {
        alert(error.message);
    }
}

export async function loadBook(id) {
    const res = await fetch("http://localhost:3030/jsonstore/collections/books/"+id);
    try {
        if (res.ok != true) {
            const data = await res.json();
            throw new Error(data.message)
        } else {
            const data = await res.json();
            return data;
        }
    } catch (error) {
        alert(error.message);
    }
}

export async function addBook(data) {
    const res = await fetch("http://localhost:3030/jsonstore/collections/books",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
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

export async function editBook(data,id) {
    const res = await fetch("http://localhost:3030/jsonstore/collections/books/"+id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
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

export async function deleteBook(id) {
    const res = await fetch("http://localhost:3030/jsonstore/collections/books/"+id,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
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