function solve(arr) {
    let result = [];
    const commands = {
        add,
        remove,
        print
    }
    arr.forEach(element => {
        const [command, string] = element.split(" ");
        commands[command](string);
    });
    function add(str) {
        result.push(str);
    }
    function remove(str) {
        result = result.filter(x => x != str);
    }
    function print(){
        console.log(result.join(","));
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);
