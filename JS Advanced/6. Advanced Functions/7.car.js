function solve(arr) {
    const result = {};
    const commands = {
        create,
        set,
        print
    }
    const links = {};
    arr.forEach(element => {
        const [command,name,str,name2] = element.split(" ");
        commands[command](name,str,name2);    
    });
    function create(name, str, parentName) {
        if (!str) {
            result[name] = {};
        }else{
            result[name] = {};
            if (links.hasOwnProperty(parentName)){
                links[name] = [parentName].concat(links[parentName])
            }else{
                links[name] = [parentName];
            }
        }
    }
    function set(name,key,value){
        result[name][key] = value;
        }
    function print(name){
        const printArr = [];
        for (let key in result[name]){
            printArr.push(`${key}:${result[name][key]}`)
        }
        if (links.hasOwnProperty(name)){
            for (let parent of links[name]){
                for (let key in result[parent]){
                printArr.push(`${key}:${result[parent][key]}`)
                }
            }
        }
        console.log(printArr.join(","));
    }
    //console.log(links)
}

solve(['create c1',
'create c2 inherit c1',
'create c3 inherit c2',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);

solve(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat']);
