function solution(){
    let str = "";
    function append(data){
        str+=data;
    }
    function removeStart(n){
        str = str.slice(n);
    }
    function removeEnd(n){
        str = str.slice(0,str.length-n);
    }
    function print(){
        console.log(str);
    }
    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
