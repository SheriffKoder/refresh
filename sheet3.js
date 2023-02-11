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
Promises are better than callbacks because they compose
encapsulating and composing future values.
once a Promise is resolved, it stays/never changed
the code will run without blocking or waiting for the result. 
Anything that needs to wait for a promise to proceed is put in .then.
remote call to get the result, you need to wait, and you can’t get the result immediately.
You don’t want your entire process to be blocked while waiting for the result.


Promise()
//Creates a new Promise object. The constructor is primarily used to wrap functions that do not already support promises.



Function1ThatTakesTimeToReturn()
    .then(Function2ThatisCalledWhenFunction1Returns)

//new promise has two method parameters of success/fail
//and returns a promise, promise card, later in time

var MyPromise = new Promise ((resolve, reject)=>{

        if (goodCondition) {
            //code
            resolve(successProperty);
        }
        else {
            //code
            reject(failProperty);
        }
});

MyPromise.then((result)=>{
        //on success do something with result
}).catch((result)=>{
        //do something when promise is rejected
}).finally(()=>{
    //executes regardless of success or failure
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



//.then creates another promise
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