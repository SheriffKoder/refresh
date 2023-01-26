

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


    /*
    Constructor's this.name Can be used outside global using 
    window.name, to avoid that use "use strict"; line to disallow 
    for lines below
    */

    //typeof constructors is Object



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/* Classic/Function-Constructors *////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////////////
/* Object-Constructors *////////////////////////////////////////////////
    
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
/* Class-Constructors */////////////////////////////////////////////////

//class syntax, new way for defining constructors
class City26 {
    constructor(name*, traveled*) {
    this.name = name;
    this.traveled = false;
    }
  
    //methods here, shared like prototypes
    eat(amount) {
    }
    
  }
  
  //take these, put like in City, add new definitions
  //mixin pattern, superclass/base(city) and sub-class(Street)
  //use extends/super to take from a previous class's constructor
  class Street extends City26 {
    constructor (TownName*, TownTraveled*,streetsCount) {
    super(TownName*, TownTraveled*)     //pass these to the city object and will return this.name/traveled
        this.streetsCount = streetsCount; //write what is not written in City26
    }
  
  
  }
  
  const Street100 = new Street("101", false, 3);
  console.log(Street100);
  //output: Street {name: '101', traveled: false, streetsCount: 3}
