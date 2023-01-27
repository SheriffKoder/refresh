////////good practices////////

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
Flyweight
optimizes code that is repetitive, slow, inefficiently shares data
aims to minimize the use of memory in an application by sharing as much data as possible

taking several similar objects or data constructs used by a number of objects
and placing this data into a single external object
so can pass through this object to those depending on this data

data-layer
sharing data between large quantities of similar objects stored in memory

DOM-layer
central event-manager to avoid attaching event handlers to every child element

*/



/*
Javascript MV patterns

three very important architectural patterns
.MVC - Model View Controller
.MVP - Model View Presenter
MVVM - Model View ViewModel


MVC
isolation of business data (models) from user interfaces (views)
with a third component (controllers) managing logic - user input


Models manage the data for an application

*/



/*
AMD 
Asynchronous Module Definition

*/


/*
Namespacing Patterns
logical grouping of units of code under a unique identifier
help avoid collisions with other objects or variables in the global namespace


*/

//Single global variable
//as our primary object of reference
/*
var myApplication = (function () {
  function() {
    //...
  },
  return {
    //...
  }
})();

*/


//Prefix namespacing
//use myApplication_ then define any methods/variables/other objects
var myApplication_propertyA = {};
function myApplication_myMethod() {};

//Object literal notation
//containing a collection of key:value pairs with a colon separating each pair
//can also add properties directly from outside
myApplication2 = {
  key1: 1,
  key2: { key3:1, key4:1}
}




myApplication2.foo = function () {}

//checking if already defined we use that instance otherwise assign an object literal
// Option 1: var myApplication = myApplication || {};



//decouple the default configuration for our application 
//into a single area that can be easily modified without 
//the need to search through our entire codebase just to alter them

var myConfig = {

  language: "english",

  defaults: {
    enableGeolocation: true,
    enableSharing: false,
    maxPhotos: 20
  },

  theme: {
    skin: "a",
    toolbars: {
      index: "ui-navigation-toolbar",
      pages: "ui-custom-toolbar"
    }
  }
}


//Nested namespacing
//myApp.model.special = myApp.model.special || {};


//Immediately-invoked Function Expressions (IIFE)s
;(function (parameter) {

  parameter.helloWorld = 1;
  
  parameter.sayHello = function () {console.log(parameter)};

})(window.namespace = window.namespace || {} );

namespace.sayHello();


//Namespace injection
//Deep object extension





/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
use CONST instead of VAR for all references
if will reassign use LET better than VAR for its scope properties

use const item = {}; instead of new Object();


const lukeSkywalker = 'Luke Skywalker';
const obj = {
    
    lukeSkywalker, //this kind is put here first

    value: 1,

    addValue(value) {
        return atom.value + value;
    },

    'data-blah': 5, //quote used on multi word names only

};


Use array spreads ... to copy arrays instead of for loops
const itemsCopy = [...items];

or convert an object to an array
const objectname = [...foo]; //but not use when adding methods inline to it

//use line breaks in multi line arrays
const objectInArray = [
  1,
  {
    id: 2,
  },
];


//
function getFullName(user) {
  const { firstName, lastName } = user; // instead of const firstName = user.firstName;
  return `${firstName} ${lastName}`;
}

//
const [first, second] = arr; // first = arr[0], second = arr[1]


//// another way of returning
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}
// the caller selects only the data they need
const { left, top } = processInput(input);


/*////////////////////////////////////////////////////////////////////*/
/*

//strings more than 100 chars not written in multiple lines
//   return `How are you, ${name}?`; better than   return 'How are you, ' + name + '?';


//
const newFunction = function DescriptiveFunctionNameHere () {
}

//wrap immediately invoked functions
(function () {

}();)


//declare function names if will use in if/loops
let test;
if (currentUser) {
  test = () => {};
}


/*////////////////////////////////////////////////////////////////////*/
/*

//never name a parameter the name "arguments" not to take precedence over the arguments object
//always put default parameters last

// good
function concatenateAll(...args) {
  return args.join('');
}

// never call a function and put its value in a new definition
//consistency in function declaration spacings
//try to not resuse same parameters in different functions

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}


/*////////////////////////////////////////////////////////////////////*/
/*

const x = [1, 2, 3, 4, 5];
console.log(...x);  //outputs a string of 1,2,3,4,5


// good
console.log(
  foo,
  bar,
  baz,
);

// good
function foo(
  bar,
  baz,
  quux,
) {
  // ...
}

//when providing a function inside a parameter of a method/function
better use arrow functions
// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});





*/








check other stylings in this lesson


*/