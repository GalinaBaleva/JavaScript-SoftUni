class Company {
               constructor() {
                              this.departments = {};
               };

               addEmployee(name, salary, position, department) {
                              if (!name || !salary || !position || !department|| salary < 0) {
                                             throw new Error('Invalid input!');
                              };
                              if (!this.departments[department]) {
                                             this.departments[department] = [];

                              };
                              this.departments[department].push({
                                             name: name,
                                             salary: salary,
                                             position: position,
                              })

                              return `New employee is hired. Name: ${name}. Position: ${position}`
               };

               bestDepartment() {
                              let bestDep = '';
                              let bestDepartEmployee = 0;
                              let highestAv = 0

                              for (let department of Object.keys(this.departments)) {
                                             let averege = 0
                                             for (let i = 0; i < this.departments[department].length; i++) {
                                                            averege += this.departments[department][i].salary;
                                             };
                                             averege = averege / this.departments[department].length

                                             if (highestAv < (averege)) {
                                                            bestDep = department;
                                                            highestAv = averege;
                                                            bestDepartEmployee = this.departments[department]
                                             };

                              };
                              let sorted = bestDepartEmployee.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

                              let bestDepartment = '';
                              bestDepartment += `Best Department is: ${bestDep}\n`
                              bestDepartment += `Average salary: ${highestAv.toFixed(2)}\n`
                              sorted.forEach(element => bestDepartment += `${element.name} ${element.salary} ${element.position}\n`)


                              return bestDepartment.trim()
               };

};


let company = new Company();
company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
company.addEmployee("Slavi", 500, "dyer", "Construction");
company.addEmployee("Stan", 2000, "architect", "Construction");
company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
company.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(company.bestDepartment());


//Best Department is: Construction
//Average salary: 1500.00
//Stan 2000 architect
//Stanimir 2000 engineer
//Pesho 1500 electrical engineer
//Slavi 500 dyer
