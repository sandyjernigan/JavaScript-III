/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* This is a placeholder (pronoun) to use for an object. 
* 1. Principle 1: Window/Global Object Binding - This refers to the global or window object.
* 2. Principle 2: Implicit Binding - When using a function or method the object left of the dot is 'this'. Allowing you to pass objects.
* 3. Principle 3: New binding - This refers to the object that will be created.
* 4. Principle 4: Explicit binding - Using Javascripts .call or .apply will explicitly bind using this.
*
* write out a code example of each explanation above
*/

// Principle 1 - Window Binding

    console.log(this === window); //window defined in browser
    // this will point to the window unless otherwise specificied or "use strict"

    function cb() {
        "use strict";
        console.log(this);
    }   // this is undefined as it is using 'strict' to prevent binding to window.
    cb();

// Principle 2 - Implicit Binding

    const myObject = {
        name: "John",
        sayHello: function(name) {
            console.log(`Hello, my name is ${this.name}.`);
        }
    } // this refers to the object left of the dot where the function is called
    myObject.sayHello();

// Principle 3 - New Binding

    function Parent(person) {
        this.name = person.name;
        this.says = " says I am a Parent."
        this.speak = function() {
            console.log(this.name + this.says);
        } 
    } // this refers to the NEW object passed into the function
    const joe = new Parent({name: 'Joe'});
    joe.speak(); 

// Principle 4 - Explicit Binding

const employee1 = {
    "name": "Josh",
    "age": 35,
    "job": "HBA Rep"
}

const employee2 = {
    "name": "Emma",
    "age": 28,
    "job": ["Stocker", "Teacher"]
}

function employeeList(name, age, job) {
    return `${this.name} is ${this.age} and has the job title ${this.job}.`;
}

console.log(employeeList.call(employee1));
console.log(employeeList.apply(employee2));
