function colorize() {
    let collection = document.getElementsByTagName('tr');
    for (let i = 1;i<collection.length;i+=2){
        collection[i].style.background = "teal";
    }
}
