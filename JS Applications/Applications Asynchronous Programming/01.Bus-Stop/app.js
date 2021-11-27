async function getInfo() {
    const busId = document.getElementById("stopId").value;
    const busStop = document.getElementById("stopName")
    busStop.textContent = "Loading...";
    const buses = document.getElementById("buses");
    buses.replaceChildren();
    document.getElementById("submit").disabled = true;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`
    try {
        const result = await fetch(url);
        if (result.status != 200 || busId == '') {
            throw new Error();
        }
        const data = await result.json();
        busStop.textContent = data.name;
        document.getElementById("submit").disabled = false;
        Object.entries(data.buses).forEach(el => {
            const [bus, time] = el;
            const li = document.createElement("li");
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            buses.appendChild(li);
        })
        document.getElementById("submit").disabled = false;
    }
    catch (err) {
        document.getElementById("stopName").textContent = "Error";
        document.getElementById("submit").disabled = false;
    }
}