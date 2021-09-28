function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputStr = document.querySelector("#inputs > textarea").value;
      let input = JSON.parse(inputStr);
      let obj = {};
      for (let i = 0; i < input.length; i++) {
         let [restaurant,employeesStr] = input[i].split(" - ");
         let employees = employeesStr.split(", ")
         if (!obj.hasOwnProperty(restaurant)){
            obj[restaurant] = {};
            obj[restaurant].employees={};
         }
         for (let j =0; j<employees.length;j++){
            let [name,salary] = employees[j].split(" ");
            obj[restaurant].employees[name] = Number(salary);
         }
         obj[restaurant].bestSalary = Object.values(obj[restaurant].employees).sort((a,b)=>b-a)[0].toFixed(2);
         obj[restaurant].averageSalary = ((Object.values(obj[restaurant].employees).reduce((a,b)=>a+b))/(Object.values(obj[restaurant].employees)).length).toFixed(2);
      }
      let bestRestaurant = Object.entries(obj).sort((a,b) => b[1].averageSalary - a[1].averageSalary)[0];
      let bestSalary = bestRestaurant[1].bestSalary;
      let averageSalary = bestRestaurant[1].averageSalary;
      let sortedEmployees = Object.entries(bestRestaurant[1].employees).sort((a,b)=>b[1]-a[1]);
      document.querySelector("#bestRestaurant > p").textContent = `Name: ${bestRestaurant[0]} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
      for (let i = 0;i<sortedEmployees.length;i++){
         document.querySelector("#workers > p").textContent += `Name: ${sortedEmployees[i][0]} With Salary: ${sortedEmployees[i][1]} `
      }
   }
}
