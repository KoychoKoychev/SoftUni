function extensibleObject() {
    return {
        extend: function (object) {
            let objProto = Object.getPrototypeOf(this);
            for (let [key, value] of Object.entries(object)) {
                if (typeof (object[key]) != 'function') {
                    this[key] = value;
                } else {
                    objProto[key] = value;
                }
            }
        }
    }
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);

console.log(Object.getPrototypeOf(myObj));
console.log(myObj);