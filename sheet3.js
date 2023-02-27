////OOP
Single Responsibility
Coupling
ES6
    Babel: installation/usage
    JSON:  write, to and from convert
Asynchronous code: 
    CallBacks (summarized)
    Promise with examples (summarized)

Async Promises: Requesting API data (s)
upload data to server using fetch (s)
Async/Await to cause sync code, on API fetches (s)

    
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

vatapi.com > country code lookup
JSON file, rates object, fetch sendpoint


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


