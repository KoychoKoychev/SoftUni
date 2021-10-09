function filtered(list,criteria){
    JSON.parse(list)
        .filter(x => (x[criteria.split("-")[0]] == criteria.split("-")[1] && x[criteria.split("-")[0]] !=undefined) || criteria == "all" || criteria.split("-")[1]=="all")
        .forEach((x,i) => {
        console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
    })
}
