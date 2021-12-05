export function e(tag, atrributesObj, ...children) {
    const element = document.createElement(tag);
    if (atrributesObj) {
        for (const [attribute, value] of Object.entries(atrributesObj)) {
            element.setAttribute(attribute, value)
        }
    }
    for (let el of children) {
        if (typeof el == "string") {
            element.append(el);
        } else {
            element.appendChild(el);
        }
    }
    return element;
}

