////////good practices////////
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

















check other stylings in this lesson


*/