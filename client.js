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
    // remove highlight if delete function lowers monthlyTotal below 20000
    else if ( $('.monthlyTotal').hasClass('highlight') && monthlySalary <=20000 ) {
        $('.monthlyTotal').removeClass('highlight');
    }
} // end monthlyTotal

function deleteRow() {
    
    // my original way of doing this for just deleting the table line was
    // $(this).closest('.deletable').remove();
    
    // create a string of the current table row's contents and save to a variable
    let el = $(this).parent().siblings().text();
    
    // loop through employees array looking for a specific entry
    for (let i=0; i < employees.length; i++) {
        // target the specific line based on the object in employees versus the variable el created above
        if(el === `${employees[i].firstName}${employees[i].lastName}${employees[i].idNumber}${employees[i].title}${employees[i].salary}`) {
            // lower annual salary
            annualSalary -= employees[i].salary;
            // remove object from employees array
            employees.splice(i, 1);
            // run employeeDisplay to update table on DOM as well as monthly salary
            employeeDisplay();
            // break in case of duplicate entries on the table
            break;
        }
    } // end for loop  
} // end deleteRow

function readyNow() {
    console.log('jquery running');

    // click listeners
    $('#submit').on('click', addEmployee);
    $('.table').on('click', '.deleteBtn', deleteRow);
}