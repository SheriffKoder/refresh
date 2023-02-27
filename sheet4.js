

Recursive functions (s)
Understanding algorithms, datastructures (s)
	.binary search algorithm (s)
	.stacks/queues datastaructure (s)
	.binary tree breath/depth-first algorithms (s)
Linked Lists (s)
Testing with Jest (s)
	.pure functions and tight coupling reduce (s)




/*////////////////////////////////////////////////////////////////////*/
/*

Recursive methods; functions that call itself internally
until some sort of answer is achieved
recursive way of thinking gives simpler code, easier to maintain
however loop algorithm is more memory-saving


//ex//
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

2^3

 2x   2x   2x
(3)  (2)  (1)
//////


recursion depth, in this example is n (3)
recursion depth is limited by js engine, around 10000
as calls consume memory of n contexts
automatic optimizations help alleviate this "tail calls optimizations"

the information about the process of execution of a running function
is stored in its execution context (internal data structure)
memory can be optimized by minimizing the parameters/internal variables or by using an explicit stack structure

on function finish, the returned values are collected backwards
//each iteration returns 
itration(1)
  itration(2)
    return2 //not matched
    itration(3)
    return3
return1



//ex//
let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

alert(sumSalaries(company)); // 7700
//////

pass into objects (case 2), if found an object will get into it
if found an array will reduce and return (case 1)
Loop for(val of Object.values(obj)) to iterate over object values: Object.values returns an array of them.
//////

//ex//
function SumRangeRecursive (n) {
  if (n <= 0) {
    return total
  }
  return SumRangeRecursive(n-1, total + n);
}


//ex//
//function for outputting all children in an object family tree
function printChildrenFamilyTree(t) {
  if (t.children.length ===0) {
    return
  }
  t.children.forEach(child =>{
    console.log(child.name);
    printChildrenFamilyTree(child)
  })
}

//ex//
function factorial(n)
    { return (n == 0) ? 1 : n * factorial(n-1); }

//fibonacci
int fib(int n)
{ return (n == 0 || n == 1) ? 1 : fib(n-2)+fib(n-1); }

Merge Sort
sort smaller arrays and then combine/merge them together in sorted order





/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

check JV bookmark Algorithms

pseudo code: english resembling programming_language
talking through your algorithm

Algorithm; method of solving problems
takes the same amount of steps no matter the quantity of input
process/perform complicated transformations on large data to transform from one state to another
breaking down a problem into two or more sub problems, solutions then combines to give a solution to the original problem
task split into simpler several tasks


on typical websites, algorithms are not necessary
hash tables and other caching methods helpful

web applications are nothing but CRUD

when solving a problem ask yourself, can we do better ?

Algorithms like:
Depth-first search
Breadth-first search
Writing sorting algorithms
Binary Search Algorithm



[////////////////////////////////////////]
Binary Search
in an array of unsorted numbers
array first sorted
reducing the search area by half each time trying to find a target number
steps 
calculate the middle point of the current sub array
if the target is at the middle stop,
if target less than, change end point to be left to middle
if target more than, change start point to be right to middle
new middle point

target, start/end/middle (changed)
try with a number not exist in the array

//divide any problem in longN number of times

a use of it is to match start to destination in a game, family tree, city map
There may be multiple paths for the character to follow, 
and the program needs to choose the best of those paths.

[////////////////////////////////////////]






/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

a data structure is a collection of data values, 
the relationships among them, and the functions or 
operations that can be applied to the data

store/ organize storage and retrieval data for app needs
when have number of in depth items

using procedures written to create and manipulate instances


Types of Data-structures
Array X
Linked List X
Record
Hash tables, graphs, binary trees
Queue, stacks X



////////////////////
stacks and queues do not have indexes, cant be called, 
sorted by insertion order

stacks accessing add/remove only from the top : add/pop
last element in is first out

stack:
last in first out
have a pointer variable to locate last
push, look for pointer, push item there, move item up
pop, move pointer down, remove item
errors are when pushing when full or pulling when empty

////
queues have front and back
can add(inQueing) only from back but remove(deQueue) only from front
first person get served

modulo function for queue
the remainder of a division X % Y
(Pointer +1) % array length 
keeps the pointer circulating in the array






///////////////////
Binary Tree Traversal (falling tree)

logical start, logical end
process of visiting each node in the tree exactly once in some order

visit -> reading/processing data in a node

Methods
breath-first
depth-first

breath-first
visit all nodes at same depth or level
before visiting the node on next level
divide in levels and go level by level from above from left to right
used when: solution not far from the tree root, or deep tree, 
example: find neighbor nodes like torrent peers, GPS nearby, withing specified distance

depth-first
visit every branch independently
like  root point/node, the right subtree, left subtree (preorder traversal)
inorder traversal, post order traversal (location of root then left right)
any order but same strategy
used when: wide tree (bec. BFS will take much memory), deep tree with frequent solutions
example: Each choice leads to further choices like games


///////////////
Level Order Traversal of a binary tree (falling tree)

pass on each level from up to down from left to right 







*/



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
a linked list is an object
with value + next property referencing the next linked list element or null at end
//this allows more control on the insertions better than arrays
//but arrays allow accessing using numbering


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

or 
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.tail = null;

//to delete a part of it
let secondList = list.next.next;
list.next.next = null;

//to join it again
list.next.next = secondList;

//update the head of the list
// prepend the new value to the list
list = { value: "new item", next: list };

//remove a value from the middle
list.next = list.next.next;



//recursive function to output a list
function printList(list) {
  alert(list.value); // output the current item
  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }
}
printList(list);

// the loop does not spend resources for nested function calls. more effective
function printList(list) {

  while(list) {
    alert(list.value);
    list = list.next;
  }

}


*/







/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

Test Driven Development TDD

writing automated tests for isolated units of the code 
before writing complete code
testing out different inputs for outputs
allows to map and know what tests are needed to be tested first
one at a time

tools like: mocha, jasmine, Tape, "Jest" help in testing and provide automatic mocking
goal: clean code that works
benefit: less bugs, improved quality and design, thinking pace, 
cons: tedious, slow down development

> try making it work by it fail with a subset of the code
> then continue building the code
> then test the code
> then make necessary changes to code if it fails and repeat

test cases should be written
. describe the feature that is being tested in plain english
. provide the expected outcome of the test
. compare that to the actual value

two kinds of coverage:
Code coverage: how much of the code is exercised, and
Case coverage: how many of the use-cases are covered by the test suites

//////////////////////////////////////
Pure functions in testing

Tightly coupled code is hard to test
the tighter the coupling, the harder it is to maintain or extend 
the application.

but pure functions are immediately testable because

the output only depends on passed input arguments
will always return the same result with the same input
does not use (observable) requests from network, i/o, date, 
  math.random() , console/screen print, data etc.
do not require mocking (fake tests)

observable:
any interaction with the outside world "from within the function"
external variable change
calling another method or outer scope variable


Types of coupling: 
control/state/state-shape dependencies, subclass/event/message coupling

-------------------------
tightly couples code problem solution
1) remove dependencies
for example instead of having an if statement that alerts a string
put the if statement in another function that returns the string
to this function based on inputs

2) mocking: fake versions of a function that always behaves 
exactly how you want, the more tight coupling the more mocking

let the function do one thing
isolate side-effects
composition not class inheritance
Module imports without side-effects
Message passing/pubsub
Immutable parameters

-------------------------


//code ex
const someOrder = {
  items: [
    { name: "Dragon food",          price: 8,   quantity: 8 },
    { name: "Dragon cage (small)",  price: 800, quantity: 2 },
    { name: "shipping",             price: 40,  shipping: true}
  ]
}

function orderTotal(order) {
  return order.items.reduce((prev, cur) => cur.price + (cur.quantity || 1 ) + prev, 0);
}

if (orderTotal({
  items: [
    { name: "Dragon food",          price: 2,   quantity: 3 }
  ]
}) !==6) {
  throw new Error("check fail: quantity");
}



////////////////////////////////////
////////////////////////////////////
//installing jest and testing with it

also can use with babel or webpack by following the getting-started
page on jestjs.io

# npm init
enter enter

install jest
# npm i --save-dev jest

//change package.json>script>test to "jest"
and add "watch": "jest --watch *.js" //for each time save test runs

//////

//create 
order-total.js
order-total-test.js

//main file 
put the function
module.export = functionName;

//test file
const Name = require('./main-filename);
put test cases inside "it.expect(Function).toBe(expected_value)" 

//to test
#npm test


///////////////////////////////////////
mock functions allow test links between code
by erasing the actual function implementation
either by mock functions or manual mock

//ex// using mock in jest

.mock property
[users.js]
import axios from 'axios';
class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}
export default Users;

users.test.js
import axios from 'axios';
import Users from './users';
jest.mock('axios');
test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});
//////////


////provide a name for mock functions
will be displayed instead of jest.fn()
mockName outputs an identifier in case of an error

const myMockFn = jest
  .fn()
  .mockReturnValue('default')
  .mockImplementation(scalar => 42 + scalar)
  .mockName('add42');






////exporting/importing
export const foo = 'foo';
export const bar = () => 'bar';
export default () => 'baz';
import defaultExport, {bar, foo} from '../foo-bar-baz';

messages
Query: return something / change nothing
command: return nothing / change something


return to file: Odin2/side_notes/JestTest1




//////////
Notes:
//////////////////////////////////////
By default, the current version of Jest will not recognize 
ES6 import statements. In order for you to be able 
to use ES6 modules for this project you may do the following:

Install the @babel/preset-env package
npm i -D @babel/preset-env

Create a .babelrc file in the project’s root with the following lines of code:
{ "presets": ["@babel/preset-env"] }


Jest BeforeAll,afterAll, beforeEach, afterEach ?

*/



