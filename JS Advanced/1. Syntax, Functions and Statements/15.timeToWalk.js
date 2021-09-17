function timeToWalk(steps,length,speed){
    let distance = length * steps;
    let time = (distance/speed*3.6).toFixed(0);
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time%3600)/60) + Math.floor(distance/500);
    let seconds = time%60;
    console.log(hours.toString().padStart(2,"0") + ":" + minutes.toString().padStart(2,"0") + ":" + seconds.toString().padStart(2,"0"));
}