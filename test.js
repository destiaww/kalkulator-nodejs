// function test() {
//     var a = 100;
//     var b = 5;
//     console.log('a awal = ', a);
//     console.log('b awal = ', b);
    
//     a = a + b;
//     b = a - b;
//     a = a - b;
    
//     console.log('a final = ', a);
//     console.log('b final = ', b);
//   }
  
//   test();
class Worker {
  constructor(hoursWorked, rate, tax) {
    this.hoursWorked = hoursWorked;
    this.rate = rate;
    this.tax = tax;
  }

  calculateSalary() {
    const basicSalary = this.basicSalary();
    const overviewSalary = basicSalary - this.tax;
    return { basicSalary, overviewSalary };
  }

  basicSalary() {
    return this.hoursWorked * this.rate;
  }
}
const worker = new Worker(1,2,3);
console.log(worker.calculateSalary());