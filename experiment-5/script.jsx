// Store employees in an array
let employees = [];

// yeh function employee add karega 
function addEmployee() {
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const salary = parseFloat(document.getElementById("salary").value);
    const dept = document.getElementById("dept").value;

    if (name && id && !isNaN(salary) && dept) {
        employees.push({ name, id, salary, dept });
        showOutput(`Employee ${name} added successfully!`);
    } else {
        showOutput("Please fill all fields correctly.");
    }
}

// Display all employees
function displayAll() {
    if (employees.length === 0) {
        showOutput("No employees added yet.");
        return;
    }
    let result = "<h3>All Employees:</h3><ul>";
    employees.forEach(emp => {
        result += `<li>${emp.name} (ID: ${emp.id}) - Salary: ${emp.salary}, Dept: ${emp.dept}</li>`;
    });
    result += "</ul>";
    showOutput(result);
}

// Filter employees with salary > 50000
function salaryFilter() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    if (filtered.length === 0) {
        showOutput("No employees with salary > 50000.");
        return;
    }
    let result = "<h3>Employees with Salary > 50000:</h3><ul>";
    filtered.forEach(emp => {
        result += `<li>${emp.name} - ${emp.salary}</li>`;
    });
    result += "</ul>";
    showOutput(result);
}

// Calculate total salary
function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    showOutput(`Total Salary: ${total}`);
}

// Calculate average salary
function averageSalary() {
    if (employees.length === 0) {
        showOutput("No employees to calculate average.");
        return;
    }
    let avg = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
    showOutput(`Average Salary: ${avg.toFixed(2)}`);
}

// Count employees by department
function countDept() {
    let deptCount = {};
    employees.forEach(emp => {
        deptCount[emp.dept] = (deptCount[emp.dept] || 0) + 1;
    });

    let result = "<h3>Department Counts:</h3><ul>";
    for (let dept in deptCount) {
        result += `<li>${dept}: ${deptCount[dept]}</li>`;
    }
    result += "</ul>";
    showOutput(result);
}

// Helper function to show output
function showOutput(message) {
    document.getElementById("output").innerHTML = message;
}