function argInfo(...params) {
    const obj = {};
    for (const el of params) {
        console.log(`${typeof (el)}: ${el}`);
        if (!obj.hasOwnProperty(typeof (el))) {
            obj[typeof (el)] = 1;
        } else {
            obj[typeof (el)] += 1;
        }
    }
    Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    })
}
