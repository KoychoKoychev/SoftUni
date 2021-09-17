function prevDay(year,month,day){
    let date = new Date(year,month-1,day-1);
    console.log(date.getFullYear() + "-" + (Number(date.getMonth()) + 1) + "-" + date.getDate());
}