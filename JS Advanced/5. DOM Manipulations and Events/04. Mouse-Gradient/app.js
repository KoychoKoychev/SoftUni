function attachGradientEvents() {
    const box = document.getElementById("gradient");
    document.getElementById("gradient").addEventListener("mousemove",gradient);
    function gradient (ev){
        const offset = ev.offsetX/box.clientWidth*100;
        document.getElementById("result").textContent = Math.floor(offset) + "%"
    }
}
