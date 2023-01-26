

/*
Index

Prototype-chain
context, Object.assign, 

1) Constructor-pattern: 
  Classic constructors 
    with Closures, .call extending, 
    Prototypes
    instance, ownproperty, constructor
    prototypal inheritance

    external object to store methods
    factory functions
  
  Class constructors
    Decorator style
    Singleton style
    Extending using extend/super
    Pseudo-classical Decorators


  
2) Module Pattern
  Object constructors
    prototypal inheritance

  Factory Functions
    Private/Public
    Iffy();

3) Mixins

*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//Objects
//everything in js is an object



// null < JS Object < constructor/ObjectName/Function/Array
//prototype chain
//Array/ObjectName.prototype / arr.__proto__ gives all its js-methods
//arr.__proto__.__proto__  (gives the object.prototype because its an instance of object) (up+1)
//arr.__proto__.__proto__.__proto__ gives null (up+2) (JS-Object-type which has prototype of null)


//js checks the object then the prototype, when calling for a value,

//when creating a new object "clone" use Object.create(ObjectReferenceName);
//if for a prototype, name.prototype

    /*
    Constructor's this.name Can be used outside global using 
    window.name, to avoid that use "use strict"; line to disallow 
    for lines below
    */

//typeof constructors is Object
//context === this
//scope === variable access scope
//window.a is the global scope
//a is a local scope

//changing-context//
//Dog.call(this, sd_name, sd_breed, sd_weight);
//obj.sayFoo.call(window,1,2); //changed the context to be in window, 2nd parameter+ is the passed arguments
//obj.sayFoo.apply(window,[1,2]); //changed, apply takes two arguments, the context, array or passed arguments
//var myBoundFoo = obj.sayFoo.bind(window); //takes one argument, returns a bound function, good for performance as functions not called
//click event runs on the context on what it was clicked in ex. body.onclick

//Object.assign(target,source)
//copies/replaces to target objects from one or more source objects


//return Object.assign({}, iffyCopy, {doSomething});
//assign creates joins an empty object with the following arguments
//
const greeter = (name) => Object.assign(Object.create(proto), {
    name
  });
const george = greeter('george');
//
const george = Object.assign({}, proto, {name: 'George'});
const msg = george.hello();



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/* Constructor Pattern: Classic/Function-Constructors *////////////////////////////////////////////////

function Object1 (name1, passObj) { //this is a prototype of JS-Object-type
    
    this.name = name1;      //copied later
    this.make = passObj.makeyear;   //passing objects

    /* closures with constructors */
    //initializing methods in the constructor) 
    //can take advantage of closures by making use of local variables 
    //defined within the constructor in your methods.
    var barkCount = 0;
    this.bark = function() {
        barkCount++;
        alert(this.name + " bark");

    this.walk = walkFunction;

    };
}

//function Dog (name, breed, weight) {};
function ShowDog2 (sd_name, sd_breed, sd_weight, sd_handler) {
 
    Dog.call(this, sd_name, sd_breed, sd_weight);
    //extending to Dog, Mixin
    //pass ShowDog2 parameters to the Dog parameters and return here
    //pass this object's (parameters)
    //instead of writing here the same lines
 
    this.handler = handler; 
    //the remaining property not in Dog, define it
    //any showDog will have this property
}

let delta = new ShowDog2("delta", "terrier", ["15","17"], "mark");





                        /* Prototypes */
//prototypes are shared between between on creations but not copied
//prototypes inherit the object's properties
//Keep prototypes to methods
//Methods check on this.value and change it
//starting with the constructor object first then the prototype

Object1.prototype.sayName = function () { //shared later
    return this.name;   //this is the instances
}

//inherit more properties from another constructor
ShowDog.prototype = new contestWinnerDogProperties();   //or aDog;

console.log(fido.protoVar); //proto taken from Dog, but fido not have property yet
console.log(fido.prototype); //undefined

//manual prototype assign
function objectCreate (proto) {
    const obj = {};
    Object.setPrototypeOf(obj, proto);
    return obj;
}
                        /* ********* */


                        



//copy constructors/create-instances of it
//new keyword cannot be used with arrow functions
let Object2 = new Object1 ("Obj2");
Object2.sayName();


//tools
console.log (Object2 instanceof Object1); //true
Fido.hasOwnProperty("protovalue"); //false
Fido.hasOwnProperty("directvalue"); //true
Object2.constructor === Object1; //true
ShowDog.prototype.constructor = ShowDog; //set creator manually
const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;



var newObjects = [Object2, Object3]; //array of constructor-children


//ex
Let mark = new person(green, 38); //mark instance of person
Let family1 = new family (mark, Anna);
Family1.father_property.eyecolor;    //add on fly?

//states are changed for each instance separately




////////////////////////////////////////////////////////////////////////
//copy constructors's prototypes - prototypal inheritance
Object2.prototype = Object.create(Object1.prototype);
let prototypeOfLeo = Object.getPrototypeOf(Lion);


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/* classic extras */

//ex1//
//using an external object to store methods
const AnimalMethods = {
    nameFn() {}
} 
function Animals (name) {
  this.displayName = AnimalMethods.nameFn; //(1) //one by one
    let AnimalCopied = Object.create(AnimalMethods); //(2) // many methods
}
//*****************/


//factory-functions//
//return parameters and properties to create new instances
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const jeff = personFactory('jeff', 27);
  jeff.sayHello();
//*****************/
  










////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/* Module Pattern: Object-Constructors *////////////////////////////////////////////////
    
    const cat1 = {

        name: "defaultCatName",
        makeSound: function () {
          console.log(this.sound);
        },
      }
      
      let cat2 = {
        jumps: true,
        __proto__: cat   //cat2 has cat as a prototype
      };
        
      let cat3 = {
        sleeps: true,
        __proto__: cat2   //cat3 has cat2/cat1 as a prototype
      };      

      const kiko = Object.create(cat3);
      //cat is a prototype of kiko, which is/should-be the constructor
      kiko.name = "KIKO";
      kiko.sound = "mew";
      kiko.makeSound();





////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/* Constructor Pattern: Class-Constructors */////////////////////////////////////////////////
//singleton, decorators


//class syntax, new way for defining constructors
let instance;
class City26 {
    constructor(name, traveled, actions) {
    this.name = name || "no name provided";
    this.traveled = false;

    //Decorator
    this.cost = 1000;

    this.methodsObject = actions;


    //instance = this;    //Singleton(1) this is the class
    //return instance;

    }

    //Decorator
    getCost() {
      return this.cost;
    }

    
    //methods here, shared like prototypes
    getName() {
        return this.name;
    }


  }

class Street extends City26 {
  constructor (TownName, TownTraveled,streetsCount) { 
  super(TownName, TownTraveled)     //pass these to the city object and will return this.name/traveled //can leave empty if will use nothing
      this.streetsCount = streetsCount; //write what is not written in City26
  }
}

//Decorator
class Trip extends City26 {
  constructor (Visit) {
      super();
      this.Visit = Visit;
  }

  getCost() {
      return this.Visit.getCost() + 75; //adjust to return this.cost" +75, where cost is already in the masterclass
  }

}

let Street100 = new Street("101", false, 3);
console.log(Street100);
//output: Street {name: '101', traveled: false, streetsCount: 3}

///** */
//Decorator
Street100 = new Trip(Street100);
console.log(Street100.getCost());//1075
Street100 = new Trip(Street100);
console.log(Street100.getCost());//1150


//Pseudo-classical Decorators
//pass the whole parameters using one object
const propertiesArguments = {
    name: 'Remember to buy the milk',
    traveled: false,
    actions: {
        summary() {
            return 'alot of cities to travel to!';
        },
        placeOrder() {
            return 'reserve ticket?';
        },
    },
  };
  
const todoItem = new City26(propertiesArguments);
console.log(todoItem.methods.summary());




////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/* Module Pattern: Factory Functions /Private-scope/Public-scope *//////

//iffy, self calling function, allows using its returns
//Factory functions contains private/public
//private: starts with _
//publics have access to private properties
var iffyFactoryFunction = (function (name) {
    var _myPrivateFunction = function () { //cant be called outside: private
      console.log("Private "+ name);
    }

    var myRevealingPublicFunction = function () { //cant be called outside: private
        console.log("Private "+ name);
      }

    //way1
    return {
        myPublicFunction : function () {
            console.log("Public "+ name);
  
        },
    }

    //way2: revealing mode, to use as variable .returned_1();
    return { returned_1: myRevealingPublicFunction  }
  
  })//(argument1 || argument2 );
  

  //iffyFunction.myPublicFunction();
  
  //call the factory function here instead of self call to use its returned
  //const function returns a new object containing iffy and defined properties
  //composition style, separating methods from states
  const Nerd2 = (name) => {
    const iffyCopy = iffyFactoryFunction(name);   //the myPublicFunction with custom parameter
    const doSomething = () => console.log("something");
    return Object.assign({}, iffyCopy, {doSomething});
  }
  
  let newNerd2 = Nerd2("jeff");
  console.log(newNerd2);
  newNerd2.myPublicFunction();
  

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/* Mixins *///////////////////////////////////////////////////////////

class Car {
    constructor({model, color}) {
      this.model = model || "no model provided";
      this.color = color || "no color provided";
    }
}

class LeftAnimator {
    moveLeft() {
        console.log('move left');
      }
  }
  

//function extends passed class
const MyMixins = (PassedClass) =>
    class extends PassedClass {
        moveUp() {
            console.log('move up');
        }
        moveDown() {
            console.log('move down');
        }
        stop() {
            console.log('stop! in the name of love!');
        }
    };

//here we pass a class and also extend it to a name to be used 
class myAnimator1 extends MyMixins(LeftAnimator) {};
class MyCar extends MyMixins(Car) {}; 
const MyCar2 = new MyCar({model: "ford", color:"blue"});
MyCar2.moveUp();


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

