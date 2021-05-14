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
    
    console.log(employees);
    
}




function readyNow() {
    console.log('jquery running');

    // click listeners
    $('#submit').on('click', addEmployee)
}