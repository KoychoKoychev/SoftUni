function attachEventsListeners() {
    const buttons = document.getElementsByTagName("input");
    let arr = Array.from(buttons);
    for (let el of arr){
        if (el.value == "Convert"){
            el.addEventListener("click",convert);
        }
    }

    function convert(el){
        const target = el.target
        console.log(target);
        let value = 0;
        if (target.id == 'daysBtn'){
            value = Number(document.getElementById("days").value) * 86400;
        }else if (target.id == 'hoursBtn'){
            value = Number(document.getElementById("hours").value) * 3600;
        }else if (target.id == 'minutesBtn'){
            value = Number(document.getElementById("minutes").value) * 60;
        }else{
            value = Number(document.getElementById("seconds").value);
        }
        document.getElementById("days").value = value/86400;
        document.getElementById("hours").value = value/3600;
        document.getElementById("minutes").value = value/60;
        document.getElementById("seconds").value = value;
    }
}