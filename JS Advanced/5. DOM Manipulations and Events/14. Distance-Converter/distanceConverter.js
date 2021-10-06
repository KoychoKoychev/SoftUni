function attachEventsListeners() {
    const obj = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254,
    }
    document.getElementById("convert").addEventListener("click",convert);
    function convert(){
        const input = document.getElementById("inputDistance").value;
        const inputUnits = document.getElementById("inputUnits").value;
        const inputInMeters = Number(input)*obj[inputUnits];
        const outputUnits = document.getElementById("outputUnits").value;
        const output = inputInMeters/obj[outputUnits];
        document.getElementById("outputDistance").value = output;
    }
}