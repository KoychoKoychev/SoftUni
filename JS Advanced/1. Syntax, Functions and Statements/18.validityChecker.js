function validityChecker(x1,y1,x2,y2){
    let dist1 = Math.sqrt(x1**2 + y1**2);
    let dist2 = Math.sqrt(x2**2 + y2 **2);
    let dist3 = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
    function check (data){
        if (Math.floor(data) === data){
            return "valid";
        }else{
            return "invalid";
        }
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${check(dist1)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${check(dist2)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${check(dist3)}`);
}