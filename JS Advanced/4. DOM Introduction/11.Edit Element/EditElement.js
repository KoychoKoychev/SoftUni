function editElement(element,text1,text2) {
    let text = element.textContent;
    let result = text.split(text1).join(text2);
    element.textContent = result;
}
