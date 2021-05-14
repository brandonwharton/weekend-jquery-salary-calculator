console.log('js running');

$(document).ready(readyNow);

// hold employee objects
const employees = [];
let annualSalary = 0;


function addEmployee() {
    // get values from inputs on DOM and create employee object with them
    const employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#empId').val(),
        title: $('#empTitle').val(),
        salary: $('#empSalary').val()
    }

    // clear inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empId').val('');
    $('#empTitle').val('');
    $('#empSalary').val('');

    // push employee object to employees array
    employees.push(employee);
    
    // call employeeDisplay to update DOM
    employeeDisplay();
    // console.log(employees);
    
} // end addEmployee

// function to add employee information to DOM
function employeeDisplay() {
    // clear display
    $('#tableLine').empty();

    // reset annual salary before running loop
    annualSalary = 0;
    
    // loop through employees array to append employee information to DOM
    for(let employee of employees) {
        // append employee information to table
        $('#tableLine').append(`
            <tr class="deletable">
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.title}</td>
                <td>${employee.salary}</td>
                <td>
                    <button class="deleteBtn">Delete</button>
                </td>
            </tr>
        `);

        // calculate annual salary
        annualSalary += Number(employee.salary);
    } // end for of loop
    // run monthlyTotal to calculate and append to DOM
    monthlyTotal();

//    console.log('Employee Salary', annualSalary);
} // end employeeDisplay

// function for monthly salary calculation and DOM updating
function monthlyTotal() {
    // calculate current monthly salary
    let monthlySalary = annualSalary/12;
    // console.log('Monthly salary', monthlySalary);
    
    // adjust monthly salary total on DOM
    $('.monthlyTotal').text(`Total Monthly: $${monthlySalary}`);

    // highlight monthly cost if over 20,000
    if(monthlySalary > 20000) {
        $('.monthlyTotal').addClass('highlight');
    }
} // end monthlyTotal

function deleteRow() {
    // console.log('button works!');
    
    // target and delete table row
    $(this).closest('.deletable').remove();
    
}

function readyNow() {
    console.log('jquery running');

    // click listeners
    $('#submit').on('click', addEmployee);
    $('.table').on('click', '.deleteBtn', deleteRow);
}