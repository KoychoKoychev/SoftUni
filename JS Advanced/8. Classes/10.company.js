class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        try{
            if (!name || !salary || !position || !department || salary<=0){
                throw Error("Invalid input");
            }
            if (!this.departments.hasOwnProperty(department)){
                this.departments[department] = {
                    employees:[],
                    totalSalary:0
                };
            }
            this.departments[department].employees.push({
                name,
                salary:Number(salary),
                position
            })
            if(Number(salary) != NaN){
                this.departments[department].totalSalary+=Number(salary);
            }
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }catch (error){
            throw error;
        }
    }
    bestDepartment(){
        if(Object.entries(this.departments).length !=0){
            let deps = Object.entries(this.departments);
            let maxSalary = 0;
            let sorted = deps.sort((a,b)=>{
                return (a[1].totalSalary/(a[1].employees.length)).toFixed(2) - (b[1].totalSalary/(b[1].employees.length)).toFixed(2)
            })
            const bestDep = sorted[sorted.length-1];
            const emp = bestDep[1].employees.sort((a,b)=>b.salary-a.salary || a.name.localeCompare(b.name));
            let intArr = []
            emp.forEach(element => {
                intArr.push(`${element.name} ${element.salary} ${element.position}`)
            });
            
            return (`Best Department is: ${bestDep[0]}\nAverage salary: ${(bestDep[1].totalSalary/bestDep[1].employees.length).toFixed(2)}\n${intArr.join("\n")}`).trim()
        }
    }
}


let c = new Company();
// console.log(c.addEmployee("P", "101", "g","a"));
// c.addEmployee("Psd", "10_", "g","a");
// c.addEmployee("pa", 10, "g","a_asd");

c.addEmployee("Stanimir", 2000, "asd", "Construction");
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));

c.addEmployee("Pesho", 1100, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stanc", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());




