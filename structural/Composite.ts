// The composite design pattern is about creating classes that are composable to be able to create tree like hierarchies
// The only restriction that is a composite group must have at least one child
// The idea is that you want to be able to compose objects and use them interchangeably

// For example we have an employee type that we want to keep track of as a tech organization
// The employee is the component in our composite tree structure

abstract class Employee {
    getSalaryInfo(): void {
        throw 'not implemented';
    }

    getName(): string {
        throw 'not implemented';
    }

    add(employee: Employee): void {
        throw 'not implemented';
    }

    getSalary(): number {
        throw 'not implemented';
    }
}

// We now create a department or grouping of employees and this extends the employee component

class Department extends Employee {
    name: string;
    employees: Employee[];

    constructor(name: string) {
        super();

        this.name = name;
    }

    getName() {
        return this.name;
    }

    add(employee: Employee) {
        this.employees.push(employee);
    }

    getSalaryInfo() {
        console.log(`Salary for department ${this.name} is ${this.getSalary()} and by employee:\n`);
        this.employees.forEach((employee) => {
            employee.getSalaryInfo();
        })
    }

    getSalary() {
        let salary = 0;

        this.employees.forEach((employee) => {
            salary += employee.getSalary()
        });

        return salary;
    }
}

// We also create a developer which too extends the employee component

class Developer extends Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        super();

        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getSalaryInfo() {
        console.log(`Salary for developer ${this.name} is ${this.salary}`)
    }

    getSalary() {
        return this.getSalary();
    }
}

// We can now use departments and employees interchangeably to acquire salary information
// Take note we can add other position types and groupings as long as we extend the employee component

class Organization {
    employee: Employee;

    constructor(employee: Employee) {
        this.employee = employee;
    }

    getOrganizationSalaryInfo() {
        this.employee.getSalaryInfo();
    }

    getOrganizationSalary() {
        this.employee.getSalary();
    }
}

// We can now create a whole hierarchy of employees and departments and pass this into our organization and be sure it will work

const rob = new Developer('rob', 12000);
const annie = new Developer('annie', 15000);
const mary = new Developer('mary', 18000);

const techTeam = new Department('techteam');
techTeam.add(rob);
techTeam.add(annie);
techTeam.add(mary);

const john = new Developer('john', 17000);

const techDepartment = new Department('techdepartment');
techDepartment.add(techTeam);
techDepartment.add(john);

const techOrganization = new Organization(techDepartment);
techOrganization.getOrganizationSalary();
techOrganization.getOrganizationSalaryInfo();
