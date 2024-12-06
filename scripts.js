/* Place your JavaScript in this file */// Conversion Calculator Functions
function celsiusToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("resultCelsiusToFahrenheit").innerText = `${celsius}°C = ${fahrenheit}°F`;
}

function fahrenheitToCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("resultFahrenheitToCelsius").innerText = `${fahrenheit}°F = ${celsius}°C`;
}

function metersToFeet() {
    var meters = document.getElementById("meters").value;
    var feet = meters * 3.28084;
    document.getElementById("resultMetersToFeet").innerText = `${meters} meters = ${feet} feet`;
}

function feetToMeters() {
    var feet = document.getElementById("feet").value;
    var meters = feet / 3.28084;
    document.getElementById("resultFeetToMeters").innerText = `${feet} feet = ${meters} meters`;
}

// Factorial, Sum, and Average Functions
function calculateFactorial() {
    var n = parseInt(document.getElementById("n").value);
    var factorial = 1;
    var i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    document.getElementById("factorialResult").innerText = `Factorial of ${n}: ${factorial}`;
}

function calculateSum() {
    var n = parseInt(document.getElementById("sumN").value);
    var sum = 0;
    do {
        sum += n;
        n--;
    } while (n > 0);
    document.getElementById("sumResult").innerText = `Sum of first N numbers: ${sum}`;
}

function calculateAverage() {
    var n = parseInt(document.getElementById("averageN").value);
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    var average = total / n;
    document.getElementById("averageResult").innerText = `Average of first N numbers: ${average}`;
}

// Income Tax Calculator Function
function calculateIncomeTax() {
    var income = document.getElementById("income").value;
    var tax;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.2;
    } else if (income <= 800000) {
        tax = (income - 400000) * 0.25 + 30000;
    } else if (income <= 2000000) {
        tax = (income - 800000) * 0.30 + 130000;
    } else if (income <= 8000000) {
        tax = (income - 2000000) * 0.32 + 490000;
    } else {
        tax = (income - 8000000) * 0.35 + 2410000;
    }

    document.getElementById("taxResult").innerText = `Income: ₱${income} | Tax: ₱${tax}`;
}

// Payroll Management System
let payrollList = [];

document.getElementById('employeeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const daysWorked = parseInt(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deduction = parseFloat(document.getElementById('deduction').value);

    if (daysWorked < 0 || dailyRate < 0 || deduction < 0) {
        alert("Please enter non-negative values.");
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deduction;

    const employee = { name, daysWorked, dailyRate, deduction, grossPay, netPay };

    payrollList.push(employee);
    document.getElementById('employeeForm').reset();
    displayPayroll();
});

function displayPayroll() {
    const tbody = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    payrollList.forEach((employee, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate.toFixed(2)}</td>
            <td>${employee.grossPay.toFixed(2)}</td>
            <td>${employee.deduction.toFixed(2)}</td>
            <td>${employee.netPay.toFixed(2)}</td>
            <td><button onclick="deleteRow(${index})">Delete</button></td>
        `;
    });
}

function deleteEmployee() {
    const lineNumber = parseInt(document.getElementById('lineNumber').value);

    if (lineNumber < 1 || lineNumber > payrollList.length) {
        alert('Invalid Line Number');
        return;
    }

    payrollList.splice(lineNumber - 1, 1);
    displayPayroll();
    document.getElementById('lineNumber').value = '';
}

function deleteRow(index) {
    payrollList.splice(index, 1);
    displayPayroll();
}
