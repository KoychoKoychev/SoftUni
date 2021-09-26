function rectangle(width,height,color){
    const obj = {
        width,
        height,
        color: (color[0].toUpperCase() + color.slice(1)),
        calcArea(){
            return this.width * this.height;
        }
    }
    return obj;
}