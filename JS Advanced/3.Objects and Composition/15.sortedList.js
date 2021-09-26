function createSortedList() {
    const obj = {
        list: [],
        add(x) {
            this.list.push(x);
            this.list.sort((a, b) => a - b);
            this.size = this.list.length;
        },
        remove(x) {
            if (x >= 0 && x < this.list.length) {
                this.list.splice(x, 1);
                this.list.sort((a, b) => a - b);
                this.size = this.list.length;
            }
        },
        get(x) {
            if (x >= 0 && x < this.list.length) {
                return this.list[x];
            }
        },
        size: 0,
    };
    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
list.add(2);
console.log(list.list);
console.log(list.size);


