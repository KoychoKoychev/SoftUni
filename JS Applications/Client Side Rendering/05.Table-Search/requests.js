export async function loadList() {
    const res = await fetch("http://localhost:3030/jsonstore/advanced/table");
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