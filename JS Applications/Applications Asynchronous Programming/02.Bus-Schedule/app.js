function solve() {
const departBut = document.getElementById("depart");
const arriveBut = document.getElementById("arrive");
let id = "depot";
let stopName = "";
let nextStopID = "";

const info = document.getElementById("info");

    async function depart() {
        departBut.disabled = true;
        arriveBut.disabled = false;
        info.textContent = "Loading..."
        try{
            const stopInfo = await getStopInfo(id);
            info.textContent = `Next stop ${stopInfo.name}`;
            stopName = stopInfo.name;
            nextStopID = stopInfo.next;
        }catch(err){
            info.textContent = `Error`;
            departBut.disabled = true;
            arriveBut.disabled = true;
        }
    }

    function arrive() {
        departBut.disabled = false;
        arriveBut.disabled = true;
        info.textContent = `Arriving at ${stopName}`;
        id = nextStopID;
    }

    return {
        depart,
        arrive
    };
}

async function getStopInfo(id) {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${id}`;

    const res = await fetch(url);
    if (res.status != 200){
        throw new Error();
    }
    const data = await res.json();

    return data;
}

let result = solve();