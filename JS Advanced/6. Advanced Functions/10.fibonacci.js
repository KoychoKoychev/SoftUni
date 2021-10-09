function getFibonator(){
    let prepasCounter = 0;
    let pastCounter = 1;
    let current = 0;
    return function fib(){
        prepasCounter = pastCounter;
        pastCounter = current;
        current = prepasCounter + pastCounter;
        return current;
    }
}
