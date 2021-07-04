// using bind 

var car = { 
    registrationNumber: "GA12345",
    brand: "Tata",

    displayDetails: function(ownerName){
        console.log(ownerName + " this is your car: " + this.registrationNumber + " " + this.brand);
    }
}


var carDetails = car.displayDetails.bind(car,"Aaryan");
carDetails();

var employee = {
    referenceId: "AK0028",
    Profile: "Software Developer",
    displayDetails: function(employeeName){
        console.log(employeeName + " these are your details: " + this.referenceId + this.Profile);
    }
}

var empDetails = employee.displayDetails.bind(employee,"Akshay");
empDetails();

// using apply and call
var employee = {
    referenceId: "AK0028",
    Profile: "Software Developer"
}
function displayDetails(employeeName){
    console.log(employeeName + " these are your details: " + this.referenceId  + this.Profile);
}

displayDetails.apply(employee,["Aaryan"]);
displayDetails.call(employee,"Aaryan");

var car = { 
    registrationNumber: "GA12345",
    brand: "Tata"
}
function display(ownerName){
        console.log(ownerName + " this is your car: " + this.registrationNumber + " " + this.brand);
}

display.apply(car,["Aaryan"]);
display.call(car,"Aaryan");

/*var house = new Object({"Florida": "Bungalow","New-York":"Apartment"});
console.log(Object.keys(house));*/