console.log('js running');

$(document).ready(readyNow);

// hold employee objects
const employees = [];


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
    
}

// function to add employee information to DOM
function employeeDisplay() {
    // clear display
    $('#tableLine').empty();

    // loop through employees array to append employee information to DOM
    for(let employee of employees) {
        $('#tableLine').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.title}</td>
                <td>${employee.salary}</td>
            </tr>
        `)
    }
}



function readyNow() {
    console.log('jquery running');

    // click listeners
    $('#submit').on('click', addEmployee)
}