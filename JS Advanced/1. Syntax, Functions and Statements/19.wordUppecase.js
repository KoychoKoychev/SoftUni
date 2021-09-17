function wordsUppercase(str){
    let pattern = /[\w]+/g;
    let match = str.match(pattern);
    let result = match.map(x => x.toUpperCase()).join(", ");
    console.log(result);
}