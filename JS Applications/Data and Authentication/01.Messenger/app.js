function attachEvents() {
    document.getElementById("refresh").addEventListener("click", showMessages);
    document.getElementById("submit").addEventListener("click", send);

}

async function getMessages() {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function showMessages() {
    const result = []
    const data = await getMessages();
    for (const el of Object.values(data)) {
        result.push(`${el.author}: ${el.content}`)
    }
    document.getElementById("messages").value = result.join("\n");
}

async function sendMessage(message) {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    const data = await response.json();

    return data;
}

async function send() {
    const authorField = document.querySelector("[name=author]");
    const contentField = document.querySelector("[name=content]");
    if (authorField.value != "" && contentField.value != "") {
        const message = {
            author: authorField.value,
            content: contentField.value
        }

        const result = await Promise.all([sendMessage(message),showMessages()]);

        authorField.value = "";
        contentField.value = "";
        return result;
    }
}

attachEvents();