class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer) {
        let idList = this.allCustomers.map(x => x.personalId);
        if (idList.includes(customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        } else {
            this.allCustomers.push(customer);
            let idList = this.allCustomers.map(x => x.personalId);
            let index = idList.indexOf(customer.personalId);
            return this.allCustomers[index];
        }
    }
    depositMoney(personalId, amount) {
        let idList = this.allCustomers.map(x => x.personalId);
        if (!idList.includes(personalId)) {
            throw new Error("We have no customer with this ID!")
        } else {
            let index = idList.indexOf(personalId);
            if (this.allCustomers[index].hasOwnProperty("totalMoney")) {
                this.allCustomers[index].totalMoney += Number(amount);
                this.allCustomers[index].transactions.push(amount + " D");
                return `${this.allCustomers[index].totalMoney}$`
            } else {
                this.allCustomers[index].totalMoney = Number(amount);
                this.allCustomers[index].transactions = [];
                this.allCustomers[index].transactions.push(amount + " D")
                return `${this.allCustomers[index].totalMoney}$`
            }
        }
    }
    withdrawMoney(personalId, amount) {
        let idList = this.allCustomers.map(x => x.personalId);
        if (!idList.includes(personalId)) {
            throw new Error("We have no customer with this ID!")
        } else {
            let index = idList.indexOf(personalId);
            if (!this.allCustomers[index].hasOwnProperty("totalMoney")){
                this.allCustomers[index].totalMoney = 0;
                this.allCustomers[index].transactions = [];
            }
            if (this.allCustomers[index].totalMoney < amount) {
                throw new Error(`${this.allCustomers[index].firstName} ${this.allCustomers[index].lastName} does not have enough money to withdraw that amount!`)
            } else {
                this.allCustomers[index].totalMoney -= amount;
                this.allCustomers[index].transactions.push((amount + " W"))
                return `${this.allCustomers[index].totalMoney}$`
            }
        }
    }
    customerInfo(personalId) {
        let idList = this.allCustomers.map(x => x.personalId);
        if (!idList.includes(personalId)) {
            throw new Error("We have no customer with this ID!")
        } else {
            let index = idList.indexOf(personalId);
            let customer = this.allCustomers[index];
            if(!customer.hasOwnProperty("totalMoney")){
                customer.totalMoney = 0;
                customer.transactions = [];
            }
            let result = [`Bank name: ${this._bankName}`,
            `Customer name: ${customer.firstName} ${customer.lastName}`,
            `Customer ID: ${customer.personalId}`,
            `Total Money: ${customer.totalMoney}$`,
                `Transactions:`
            ]
            for (let i = customer.transactions.length - 1; i >= 0; i--) {
                let [el, type] = customer.transactions[i].split(" ")
                el = Number(el)
                if (type == "D") {
                    result.push(`${i + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${el}$!`)
                } else {
                    result.push(`${i + 1}. ${customer.firstName} ${customer.lastName} withdrew ${el}$!`)
                }
            }
            return result.join("\n").trim();
        }
    }
}

