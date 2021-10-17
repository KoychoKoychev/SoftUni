function tickets(arr,str) {
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    const result = [];
    for (const el of arr){
        const [destination,price,status] = el.split("|");
        const currentTicket = new Ticket(destination,price,status);
        result.push(currentTicket);
    }
    return result.sort((a,b)=>{
        if (str =='destination'){
            return a.destination.localeCompare(b.destination);
        }else if (str=='price'){
            return a.price - b.price;
        }else if (str == 'status'){
            return a.status.localeCompare(b.status);
        }
    })
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
));
