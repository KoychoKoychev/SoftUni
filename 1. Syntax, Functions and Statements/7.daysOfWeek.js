function daysOfWeek(str){
    let week = {
        Monday : 1,
        Tuesday : 2,
        Wednesday : 3,
        Thursday : 4,
        Friday : 5,
        Saturday : 6,
        Sunday : 7,
    }
    if (week.hasOwnProperty(str)){
        console.log(week[str]);
    }else{
        console.log("error");
    }
}