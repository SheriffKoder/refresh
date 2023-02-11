


Object prototype inheritance methods
>Webpack/Npm module export import Odin4.js/side_notes/ex_restaurant

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
    Constructor's this.x Can be used outside global using 
    window.x, to avoid that use "use strict"; line to disallow 
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

//Object.assign(target,source1, source2)
//copies/replaces TO target objects FROM one or more source objects


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


//in function constructors
//any thing that begins with this will be public
//regular var/const etc. variables are private
//however can be returned from a this method

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
    }

    this.walk = walkFunction;

    Object.defineProperty(this, "age", {
      get() {
          //
      }
    });

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
ShowDog.prototype.constructor = ShowDog; //set the right constructor for prototypes manually
const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;



var newObjects = [Object2, Object3]; //array of constructor-children


//ex
Let mark = new person(greenEye, 38); //mark instance of person
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

//anything starts with _ means it is internal and should not be touched outside
//class syntax, new way for defining constructors
//typeof function, special functions, and functions are objects
//can be // class User28 //declaration
//or const NewUser = class User28 //expression
//or anonymous
//Classes always use strict automatically
//Class methods are non-enumerable, sets enumerable flag to false for all methods. 
//can use a single method without a constr. and use that method like a normal object
//remember you can use not all lines in class, etc.
//“Class” notation favors “Inheritance over Composition”. opposing to functions


let instance;
class City26 {

    #width;               //private/not-public property starts with #
    height = 0;


    //static properties cannot be directly accessed on instances of the class
    //instead they are accessed on the class itself City.GPSparameters;
    //utility functions, config properties
    //to call a static method/property within, another static method of the same class, you can use the this keyword.

    static staticProperty = 'someValue here';   //React feature, if error/unsupported use babel compiler
    static staticMethod() {
    }
    static {  //static initialization block, can use more than one
    }
    static get staticMethod2() {
      //this inside a static points to the Class, not the instances like other
    }


    constructor(name, traveled, actions) {
    
    console.log("X" + ClassWithStaticMethod.staticProperty); // 'static property'
    console.log("X" + this.constructor.staticMethod()); // 'static property'
  
    this._name = name || "no name provided";
    this._traveled = false;

    //Decorator
    this._cost = 1000;


    this.methodsObject = actions; //pass functions in an object


    //instance = this;    //Singleton(1) this is the class
    //return instance;

    }

    #privateMethod () {

    }

    //Decorator
    getCost() {
      return this._cost;
    }   // no , between methods

    
    //methods here, shared like prototypes
    getName() {
        return this._name;
    }


    //look at this, runs by itself because not wrapped
    //school = prompt("what school ?", "ex");


    /////setters/getters properties
    get fullName() {
      //return way for value
      //fullName here used/set/called as a property
      //function: retrieve the info
      return `${this._name} ${this._surname}`; //string
      //return this.calcArea();
      //just console.log(obj.fullName) will output the fullName

    }

    set fullName (input) {
      //>>give value in a specific way
      //what if you want to give the property a value to handle
      //if code x return y
      [this._name, this._surname] = input.split(" "); //split input string into two arrays on space
      
      //this.setFirstNameMethod(value[0]); // method contains this.firstName = firstName;
      //this.setLastNameMethod(value[1]);
      //how it will be presented ? check getter, string of name name
    }


  }
  ///end-of-constructor///


//another way of defining properties even for setters/getters, use only one of two ways of setting setters/getters for the same variable
Object.defineProperty(City26, "fullName", {
  get () {

  }

  set (input) {

  }
});

class SubClassWithStaticField extends ClassWithStaticMethod {
  static subStaticField = super.staticMethod();
}


class Street extends City26 { //all streets are in cities but not all cities are in streets
  constructor (TownName, TownTraveled,streetsCount) { 
  super(TownName, TownTraveled)         //pass these to the city object and will return this.name/traveled //can leave empty if will use nothing
                                        //calling the constructor method of the person class
      this.streetsCount = streetsCount; //write what is not written in City26
  }

  sayHi () {
    //super();?          //super invokes the method it is in of the same name, constr/constr, sayHi()/sayHi()
  }

}

class Building extends Street {   //futher inheritance
  constructor(name, traveled, actions, TownName, TownTraveled,streetsCount, BuildingNumber ) { //yes will use/want all of these when creating a building instance,
    super(name, traveled, actions, TownName, TownTraveled,streetsCount);
    //what is missing will not be defined here ?
    //all but building number
    this.BuildingNumber = BuildingNumber;

  }
}

const NewBuilding = new Building("Zayed", true, actionsObject, "Beverly", true, 2, 153);
console.log(NewBuilding);

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

class DiscountTrip extends City26 {
  getCost() {
    super.getCost();
    return this._cost - 100;

  }
}

const Coupon = new DiscountTrip();  //const-100

const Street100 = new Street("101", false, 3);  //ES6 syntax const
console.log(Street100);
//output: Street {name: '101', traveled: false, streetsCount: 3}


console.log(Street100.prototype); //false
console.log(City26.prototype); //true, proto exists for constructor only not instances
/*thus*/console.log(City26 === City26.prototype.constructor); // true


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
  
const todoItem = new City26(propertiesArguments); //city takes {name,traveled,methods{}}
console.log(todoItem.methods.summary());




////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/* Module Pattern: Factory Functions /Private-scope/Public-scope *//////

//iffy, self calling function, allows using its returns
//Factory functions contains private/public
//private: starts with _
//publics have access to private properties
//private if declared, public if returned or this.variableName
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
  



//composition rather than using inheritance 
const barker = (state) => ({
  bark: () => console.log("Woof, I am " + state.name);
})

const murderRobotDog = (name) => {
    let state = {
      name,
      speed: 100,
      position: 0
    }
    return Object.assign(
      {},
      barker(state)
      //driver(state),
      //killer(state)
    )

}

murderRobotDog("sniffles").bark();


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
/*Summary

.assign a property to an object
change context using .call/.bind

pass objects as arguments/parameter-type-object(this.objProp)
group instances into an array
use closure functions that uses local variables
chain constructors using prototypes family.father.eyeColor


classic (new)
    properties
    prototypes(using = or .setPrototype) to store methods or use outer object

factory functions
returns properties whole/name, make them public by self calling ();


Objects (Object.create)
    __proto__ = another object

class
    constructor
    properties
methods


Mixins
make an arrow function(x) containing
    class extends x
        methods
to extend passed class (to give methods)


*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/*
Style recommendations

//use class extends for inheritance than function inheritance, it inherits also without breaking instance of
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}

//class methods can "return this;" to help with method chaining.
newPerson.jump().setHeight(20);



// good for referring to an empty constructor
class Rey extends Jedi {
  constructor(...args) {  
    super(...args);
    this.name = 'Rey';
  }
}

//import all what is needed from a single source in one line, separated if many
import foo, {
  named1,
  named2,
} from 'foo';

//export constants
//group all imports in the top of code

//modules with single export, prefer the default over named
export default function foo() {}


book2.multiplicity = book1
//adds a property of book1, //Association



*/