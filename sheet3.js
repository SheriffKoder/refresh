////OOP
Single Responsibility
Coupling
ES6
    Babel: installation/usage
    JSON:  write, to and from convert
Asynchronous code: 
    CallBacks (summarized)
    Promise with examples (summarized)

    
/*
Notes on object design:
everything an class/object/module should 
part of one responsibility, standalone, 
code should accept new change without re-working existing code
reduce coupling
any module should be easily swapped out at any time for a 
different module.
coupling: when one module directly references/knows about another module
Loose coupling is very important for promoting code reuse, 
independent testability, interchangeability, and protection against a single point of failure.
keeping code simple, not nested and split up into small modules.


Object Roles:
DOM, state logic, UI Controls, etc.
Information Holder: know info/provide info to others
Structurer: maintains/knows relationships between objects
Service Provider: does specific work, offers services to others
Controller: make decisions and control a complex task
coordinator: no decisions, delegate work to others
interfacer: transforms information between distinct parts

//////////////////////////////////////////////////////////////////

>Webpack/Npm module export import Odin4.js/side_notes/ex_restaurant
>Babel to allow applying on older browsers (Odin4.js)
>JSON universal browser/server language format (Odin4.js)


higher-order function
A function that takes other functions as arguments/returns functions as its result 


> Asynchronous code: functions that happen in the background, while the rest of code executes (Odin4.js)
synchronous code - it sequentially runs top to bottom.

javascript is single threaded, it can do one thing at a time
one call stack


doA( function(){
	doC();

	doD( function(){
		doF();
	} )

	doE();
} );

doB();

//////////////////////////////////////
//////////////////////////////////////
////Callback
Function that is passed into another function as an argument
called back by the higher order function
but the callback time may differ
some people nest callback after callback and it cause complexity
by skipping/bouncing from one function to another

ex//
downloadPhoto('http://coolcats.com/cat.gif', handlePhotoFunction)
handlePhotoFunction is passed to downloadPhoto but wont run until
downloadPhoto finishes its task, which could take a long time
and the output is live/synchronously undefined




*/
//////////////////////////////////////
//////////////////////////////////////
////Promise
/*
Promises are better than callbacks because they compose
encapsulating and composing future values.
once a Promise is resolved, it stays/never changed
the code will run without blocking or waiting for the result. 
Anything that needs to wait for a promise to proceed is put in .then.
remote call to get the result, you need to wait, and you can’t get the result immediately.
You don’t want your entire process to be blocked while waiting for the result.
*/

Promise()
//Creates a new Promise object. The constructor is primarily used to wrap functions that do not already support promises.



Function1ThatTakesTimeToReturn()
    .then(Function2ThatisCalledWhenFunction1Returns)

//new promise has two method parameters of success/fail
//and returns a promise, promise card, later in time

var MyPromise = new Promise ((resolve, reject)=>{ //default parameters

        if (goodCondition) {
            //code
            resolve(successProperty);
        }
        else {
            //code
            reject(failProperty);
        }
});

//the promise chain
MyPromise.then((result)=>{
        //on success do something with result
}).catch((result)=>{
        //do something when promise is rejected
}).finally(()=>{
    //executes regardless of success or failure, but there has to be a return
})

//example
var askMom = function () {
    console.log('before asking Mom'); // log before (1)

  willIGetNewPhone //the new Promise
  .then(showOff) // chain it here //showoff takes an object/resolved return and outputs object.name etc.
  .then(function (fulfilled) {
          console.log(fulfilled);
       // output: 'Hey friend, I have a new black Samsung phone.' (3)
      })
      .catch(function (error) {
          // oops, mom don't buy it
          console.log(error.message);
       // output: 'mom is not happy'
      });
          console.log('after asking mom'); // log after (2)

};
askMom();   //this invokes the function, promise, promise chain



//.then creates another promise, thus another resolve to be used for output
//takes two arguments, first: for fulfillment, second: for rejection


//////another example
var rejectedTh = {
	then: function(resolved,rejected) {
		rejected( "Oops" );
	}
};

var rejectedPr = Promise.resolve( rejectedTh );
Promise.reject();
//.resolve returns a new promise, resolved with the given value
//if has .then, the returned promise will follow it
//otherwise will be fullfilled with the value


//////another example
function fulfilled(msg) {
	console.log( msg );
}

function rejected(err) {
	console.error( err );
}

p.then(
	fulfilled,
	rejected
);


//////another example: chaining .then
let handleFulfilledA = function (tweets) {
    console.log(tweets);
    return get("data/friends.json");
  }
  
  myPromise
    .then(handleFulfilledA) 1
    .then(handleFulfilledB) 2
    .then(handleFulfilledC) 3
    .catch(handleRejectedAny);
  //with each then return variable to next then for input 
  


////////////////////Promise.all
say you have created multiple promises and want to bind a common 
.then to them


//takes array
Promise.any() //Fulfills when any of the promises fulfills; rejects when all of the promises reject.
Promise.allSettled() //Fulfills when all promises settle.
Promise.race([promise1, promise2])   //when any promise is completed
or
Promise.all([promise1, promise2])   //Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

.then(Fn)   //when resolve
.catch(Fn)  //when rejected

//Example
  let addImg = (src) => {
    let imgElement = document.createElement("img");
    imgElement.src = img.src
    document.body.appendChild(imgElement);
  })


  Promise.all([
    loadImagePromised('url'),
    loadImagePromised('url'),
    loadImagePromised('url'),
  ]).then(images) => {
    images.forEach( img => addImg(img.src));
  }).catch((error) =>{
    //handle error later
  })
//////


//example https://www.youtube.com/watch?v=yswb4SkDoj0
function1 returns a new promise function2 for a url parameter
   function2 on http.onload resolve, http.onerror reject

   give function1 a url and its returned in a variable
   variable.then does something and returns give function1 a url
                does something and returns give function1 a url


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

fetching data from a server (API) Application programming interface
link between applications and databases
async request

useful API's:
https://openweathermap.org/current
https://github.com/n0shake/Public-APIs#captcha
https://github.com/public-apis/public-apis

keep API keys safe from github by using Figaro

*/


//by using provided URLS (fetching previously XMLHttpRequest)
//differs from jQuery.ajax() wont reject on HTTP 404 or 500, only on network failure unless called with credentials option set to include wont send/set cookies sent back in cross-origin responses

fetch(url,{optional_init_object}).then().catch()






//browsers restricts HTTP requests to outside sources
//fixed by adding cors
fetch('url.url.com/api', { mode: 'cors' });







//example on fetching an image data
//can add fetch button, gif search box, .catch
/*
const newImage = document.querySelector('.imageAPI');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=xk53LAHxmWHiXw63IIkWi8pQXy0Vns2E&s=cats', { mode: 'cors' })
.then(function(response) {
  return response.json();   //will output a promise
})
.then(function(response) {
  console.log(response.data.images.original.url); //will output the image's url
});
*/


////////////////////////////////////////////////////////////////////////////
//async functions to use fetch
async function postData(url = '') { //if url not provided = ''
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
}


//EXAMPLES
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    /*** all of these are options ***/
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    /******************************/
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });


//////Uploading JSON data
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})

//////Uploading a file
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]); //formData.append(`photos_${i}`, photo);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})


//////////////////////////////////////
//Request fetch
//Request takes the same parameters as fetch and can be called in a fetch()
//also can pas an existing request object 
const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)


/*
options list:
Note that mode: "no-cors" only allows a limited set of headers in the request:
Accept, Accept-Language, Content-Language
Content-Type with a value of application/x-www-form-urlencoded, 
  multipart/form-data, or text/plain

to cause browsers to send a request with credentials included 
on both same-origin and cross-origin calls, add credentials: 'include'
more on credentials property
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

*/

// The Headers interface allows you to create your own headers object via the Headers() constructor

/*
if (window.fetch) {
  // run my fetch request here
} else {
  // do something with XMLHttpRequest?
}
*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
async and await
allows async code to act like sync code
async function automatically/always returns a promise
Other values are wrapped in a resolved promise automatically.
returning in an async function is the same as resolving a promise.
throwing an error will reject the promise.
use catch/throw/or a global unhandledrejection event handler.

async allows async code to act like sync code
await, tells js to wait for async actin to finish before cont. the function
      like pause here until done & cont. the next block
      uses in place of then

//await does not work on the global scope


*/


//////////////////////////////////
async function getPersonsInfo(name) { //async functions allows using await on promises
  
  const people = await server.getPeople();   //await is like .then? and makes code skip for now/pause this block until gets the value
  const person = people.find(person => { return person.name === name });
  return person;

}.catch(err => {
  console.log(err); //handle error using catch normally
  });

//another way of handling errors
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}
//////////////////////////////////




//////////
async function f() {
  return 1;
}
f().then(alert); // 1




//////////
//you can name any function async
//server here is a promise and will async its resolve
server.getPeople().then(async (people) => {
  people.forEach(person => {
  // do something asynchronously for each person
  });
});




//////////////// await with an API fetch
//from ex 295
const img = document.querySelector('img');

async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'});
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
getCats();




////////////////
//when await gets a non-promise object has 'then' in it,
//the then is treated as a promise-like 'then'
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  alert(result);
}

f();




///////////////////
//Async class methods

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()   //on call, returns resolve(1);
  .then(alert);   //.then(1 with alert)
  // 1 (this is the same as (result => alert(result)))




////////////////
// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);




///////////////
//Throw Error
//returns like Reject
//the catch can be attached later to the promise
//when there is a throw error in the promise body

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404


//same ex with await
  loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404

  async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
      let json = await response.json;
      return json;
    }
    throw new Error(response.status);
  }
///////////////


///////////////
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // shows 10 after 1 second
  wait().then(result => alert(result));
}

f();



//
let results = [];
for (let promise of promises) {
  results.push(await promise); //promises could be any promise
}
//
let results = await Promise.all(promises);
console.log(results);
const [wes,scott] = await Promise.all([wesPromise,scottPromise]);


//////////
const fruits = ["peach" "apple"];
const smoothie = fruits.map(v => getFruit(v));

const fruitLoop = async() => {
  for await (const emoji of pineapple){
    log(emoji);
  }
}

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