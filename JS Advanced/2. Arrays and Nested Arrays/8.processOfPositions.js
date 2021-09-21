function procOfPos(arr){
    return (arr.filter((x,i) => i%2 ==1).map(x => x*2).reverse())
}