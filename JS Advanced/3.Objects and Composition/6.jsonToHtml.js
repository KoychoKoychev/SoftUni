function jsonToHtml(input){
    let arr = JSON.parse(input);
    console.log("<table>");
    let heading = "<tr>"
    for (let key of Object.keys(arr[0])){
        heading += ("<th>" + escapeHtml(key) + "</th>")
    }
    console.log(heading + "</tr>");
    for (let el of arr){
        let line = "<tr>"
        for (let value of Object.values(el)){
            line += ("<td>" + escapeHtml(value) + "</td>")
        }
        console.log(line + "</tr>");
    }
    console.log("</table>");

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

