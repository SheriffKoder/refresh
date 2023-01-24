
//Code in english
//Code is self explanatory
//put all lets in one object

/*////////////////////////////////////////////////////////////////////*/
//////// RegEx
{
    /*
    const patterns = {
        // only, 11 digits
        telephone: /^\d{11}$/ ,
        username: /^[a-z\d]{5,12}$/i,  //a-z can also be digits
        password: /^[\w@-]{8,20}$/,     //the pattern is repeated, looking for (a-z A-Z also 0-9 and _)or @ or -
        slug: /^[a-z\d-]{8,20}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/               //also dots \.
               // domain with . - .. @ .. domain .. dot .. com ..  .uk(optional)
                //        sheriff.koder@hotmail.com.uk
    };
    */
    
    }
    
    
    /*////////////////////////////////////////////////////////////////////*/
    ///// Javascript
    

    //use '' when inside in html events when outer is " "


    /*////////////////////////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////////////////////////*/

    //Objects
    //everything in js is an object

    //Copy or convert an object to an array
    //but not use when adding methods inline to it
    const objectname = [...foo]; 
    

    






    //prototype chain
    //Array.prototype / arr.__proto__ gives all its js-methods
    //arr.__proto__.__proto__  (gives the object.prototype because its an instance of object) (up+1)
    //arr.__proto__.__proto__.__proto__ gives null (up+2) (JS-Object-type which has prototype of null)




    //the constructors are from an Object parent which has no prototype(null)
    //when calling js checks the object then the prototype

    function Object1 (name1) { //this is a prototype of JS-Object-type
        this.name = name1;      //copied later

        /* closures with constructors */
        //initializing methods in the constructor) 
        //can take advantage of closures by making use of local variables 
        //defined within the constructor in your methods.
        var barkCount = 0;
        this.bark = function() {
            barkCount++;
            alert(this.name + " bark");
        };

        
    }




    Object1.prototype.sayName = function () { //shared later
        return this.name;
    }

    //copy constructors
    //new keyword cannot be used with arrow functions
    let Object2 = new Object1 ("Obj2");
    Object2.sayName();

    //copy constructors's prototypes - prototypal inheritance
    Object2.prototype = Object.create(Object1.prototype);
    let prototypeOfLeo = Object.getPrototypeOf(Lion);





    person[myDataName] = myDataValue;
    Obj.["two letter"]
    Obj.[name+ "extension"]

    // Object.keys only returns own keys/property names
    console.log(Object.keys(constrcutorName));   
    // constrcutorName's properties

    =transfer structured data
    // for..in loops over both own and inherited keys, so use hasOwnProperty to filter for its properties
    // because its inherited from its "own" prototype methods
    for(let prop in constrcutorName ) {
        
        if ( constrcutorName .hasOwnProperty(prop)) {
            console.log(prop); 
        }
    }

    Let obj = { [promptfruit]: 4 };	alert(obj.apple);
    Obj in obj

    let x = object.toString();


    //Literal/constructor object prototype methods
    .constructor, hasOWnProperty(), isPropertyOf(), propertyIsEnumerable(), 
    toLocaleString (), toString (), and valueOf ().
    //"new Object" does not have these

    /* Object-Constructors */////////////////////////////////////////////////
    
    const cat = {
        makeSound: function () {
          console.log(this.sound);
        }
      }
      
      let cat2 = {
        jumps: true,
        __proto__: cat   //cat2 has cat as a prototype
      };
      
      // Object.keys only returns own keys/property names
      console.log(Object.keys(cat2));   //jumps
      
      const kiko = Object.create(cat);
      //cat is a prototype of kiko, which is/should-be the constructor
      kiko.sound = "mew";
      kiko.makeSound();
      



    /* Class-Constructors */////////////////////////////////////////////////

    //class syntax, new way for defining constructors
    class City {
        constructor(name, traveled) {
        this.name = name;
        this.traveled = false;
        }

        //methods here, shared like prototypes
        eat(amount) {
        }
        
    }

    //use extends and super to take from a previous class's constructor
    class Street extends City {
        constructor (name) {
        super(name)
        }
    }
    
    const myTown = new Street("Name");
    console.log(myTown.name);
  

    /* Function-Constructors */////////////////////////////////////////////////
    /*
    Constructor's this.name Can be used outside global using 
    window.name, to avoid that use "use strict"; line to disallow 
    for lines below
    */




    function Toy (sound) {
        this.soundnew = sound;
        this.quacknew = fnPara or function () {
                        console.log(this.sound);
                    }
    }

    var Duck = new Toy ("quack"); // new copy of Toy is named accessed by the name Duck
    console.log (typeof toy); //object
    console.log (Duck instanceof Toy); //true
    Duck.constructor === Toy; //true
    Duck.soundnew //quack
    var Toys = [Duck, Car]; //array of constructor-children


    

    function family (father1, mother1) {
        this.father = father1;
    }

    Let mark = new person(green, 38); //mark instance of person
    Let family1 = new family (mark, Anna);
    Family1.father.eyecolor;    //add on fly?
    
    //Pass objects to constructors (type of object)
    this.make = parameter.makeyear;
    
    Fido instance of Dog // true
    Fido.hasOwnProperty("protovalue"); //false
    Fido.hasOwnProperty("directvalue"); //true
    

    DogConstructor.prototype.bark = fn ();
    Fido.bark(); //direct access or extended access
    //prototypes are invoked when called not stored in memory
    //they inherit the object's properties
    //its code shared between between on creations but not copied

    //Keep prototypes to methods
    //Methods check on this.value and change it
    //starting with the constructor object first then the prototype

    Dog.prototype = {
        eat() {return this}, 
        //method, this returns the new apple creations called on
      }

    ShowDog.prototype.constructor = ShowDog; //set creator
    
    ShowDog.prototype = new Dog();   //or aDog;
    //For the new showDog to inherit from Dog's properties also
    //Predefined, for ready methods/text
        

    function ShowDog2 (name, breed, weight, handler) {
 
        Dog.call(this, name, breed, weight);    
        //call reuse these parameters here to be processed
        //the this. and name etc.
        //instead of writing it again
        //pass ShowDog2 parameters to the Dog parameters and return here
        //similar to using extend/super in class constr
        this.handler = handler;
   }



    /* create custom methods */////////////////////////////////////////////////
    //this is "fido"
    fido.toString = function () {
        return this.name + " Dog Weight " + this.weight;
    }
    Element.function	//function this is element

    console.log(fido.protoVar); //proto taken from Dog, but fido not have property yet
    console.log(fido.prototype); //undefined


    //any function will have this prototype property now
    function.prototype.mybind = function () {};



    /* Object.create */////////////////////////////////////////////////
    //Object.create on constr / constr
    //copy prototypes
    Employee.prototype = Object.create(Person.prototype); 

    //Object.create on object / object
    //cat is a prototype of kiko
    const kikoObj = Object.create(catObj);
    //cat { name = "defaultName"; } // Kiko.name = "Kiko"
    //if Kiko.name not declared, the default will be used


    //manual prototype assign
    function objectCreate (proto) {
        const obj = {};
        Object.setPrototypeOf(obj, proto);
        return obj;
    }
  


    /*////////////////////////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////////////////////////*/



    label:loop , break label; //apply on parent loop
    continue;(next loop) 
    break; //out of current loop
    
    
    for (const indexname in ArrayName ){
         objectName[indexname];
    }
    
    0 is false not '0' the string
    
    
    if ( numX.length !=8|| isNaN(numX.slice(0,3)) || numX.charAt(3)!="-"  || isNaN(numX.slice(4,8))      ) {
        console.log("not accepted");
    }
    
    OR chain , first true or last false
    AND chain, first false or last true
    
    if typeof ===

    //what are your true statements then all will be else
    
    
    /*////////////////////////////////////////////////////////////////////*/
    ///// Function types
    {
    
    
    //Arrow
    let fun = (para) => {expression};
    const comment = comments.find(comment => comment.id === 823423); 
    //Return without return
    //understand what it says if comment.id === return true

    
    //declaration
    function fun () {
    
    }
    
    //expression
    let fun = function () {
    
    }
    

    //return anonymous objects
    Return { name, age, }
    Return {name: , age: }

    //return an anonymous function/anon-obj+method that uses an arg 
    //and returns something like a function or comparison
    //outside use returnedObj.method()

    
    
    
    /*1)global/local function execution context
    memory and code parts
    a)  memory creation phase
        allocates memory to vars/func vars, for a value of undefined
        allocates memory to def functionName, stores whole code
      
    b) code execution phase 
    */
    
    // console.log/warn/info/error/assert/clear/dir/count/time(it takes)/table
    //console.table( object ); //neat object representation

    
    let func = (arg1, arg2, ... ) = > expression;
    
    //if age then use this function, else func is another function
    let func = (age > 18) ?
        () => alert('hello'):
        () => alert ('greetings');
    
    //can ommit {} if one line
    //pass an arrow asyncronous function fn (  ()=>alert()     ) {}
    
    //fun(new_func) { newFunc(2)    //pass function to function
    //let newFunc = functionName (Declaration or expression)
    
    ?? > const foo = null ?? "return_this";
    //if_null_or_undefined, return string

    
    
    //divisible by 3 ? 
    //i%3 === 0
    //remainder
    
    function min (a,b) {
        //return (a > b)? a : b;
        return (a>b) || b;
      }
    
    }
    
    //FOREACH with ARROW function (arrays) (Array.from(Div.elements).forEach (i => {i}))
    fruits.forEach( fruit => expression); (myFunction);
    //forEach with eventListeners
    
    //ARGS
    - function (...args)  {
            args.forEach(arg) //array of undefined n arguments
            
            //arguments without ... have to be converted to x= Array.from(arguments)
            //if (args.includes(item) array.push(item)
        }
    
    //multi method usage
    Return string.split("").reverse().join(""); 
    //->array // -> array method //-> output string

    
      
    
    //////// Array methods
    {
    //array is a numbered object
    .join()     //outputs a string
    .map(fn)    //uses this function for each item in array
    isArray(x) , (x instanceof Array) //check if array
    array_name.filter(function_returns _true_cases) applies to each item if true is returned
    
    object/array.toString()
    Array.reverse();
    Array.join("-"); //outputs in a string form

    
    array.slice(3,4); //output new array from start,end+1
    array.splice(2,0, str, str);	//placement position without holes, how many from exist remove = 0, inputs
    array.concat(a2,string1);
    
    array.unshift/shift();	//add/remove from beginning
    array.push/pop(); //add/remove from end
    
    - array matrix =[ [,,][,,][,,]  ];
    - arrays can hold function, obj-ref, 

    - array.sort( () => num1-num2 );

    links.map(link => link.textContent).filter(place => place.includes("Wall");


    array.findIndex(fn); //fn returns true on p se value //where
    array.find(fn); //fn returns true on p se value //returns 1st item found
    array.every(fn); //fn returns a single true running on all items if p matches cond. //all items match cond
    Array.some(fn); //fn returns a single true on p matches cond //at least one item 

    array.sort(fn) //fn passes over array and takes two paras, returns 1/-1 if greater/smaller

    array.reduce(fn, {}); //fn has loop initials p, item p - initial object //returns the initials after passing though all items

    array.filter(fn); //fn returns items that return true o meeting condition to a new array
    initials[item] //give value if not true,/found //inc this specific item
    
    Const newComments = [ ...method1, ...method2]; 
    //add two array outputs into one array //spread
    Const links = [...x.querySelectorAll("a")]; 
    //every item into an array
    Const [aLast, aFirst] = lastOne.split(", ") 
    //return in tow arrays rather than one, useful to spearate
    

    
    }
    
    /*////////////////////////////////////////////////////////////////////*/
    Element Methods
    { 

    //document.body acts as target mode when nothing in particular has focus
    document.body...
    console.dir(document) //the doc properties
    console.dir(document.all[30) //all elements
    console.dir(document.links) //array of links

    //div2611.setAttribute("id", "idName")
    //div2611.getAttribute("id")
    //div2611.removeAttribute("id")
    const div2611 = document.createElement("div"); //allocates memory to be appended later in the DOM
    getElementbyClassName
    getByTagName
    .querySelectorAll
    Element.style.left
    Element.src 
    x.href
    x.alt
    x.textContent
    //div2611.innerHTML


    
    //loop take event action on tag name array 
    //Array.From used on query not elementsByTag

    //classes
    x.className = "class1 class2";
    //div2611.classList.add("new");
    //div2611.classList.remove("new");
    //div2611.classList.toggle("new");

    //styles
    div2611.style.color = "blue";
    div2611.style.cssText = "color: blue;   background: white;" ;  //add several styles
    `--dark-color:${randomfn()};`

    div2611.setAttribute("style", "color: blue;   background: white;");

    //div2611.style.backgroundColor //to access b-c use camelCase and remove -
    //div2611.style["background-color"] //or use in brackets


    x =parseInt(prompt()); //input into number
    let x = confirm(text); //like prompt but ok(true)/cancel(false)
    
    p.classList.contains("name");
    
    
    .setTimeout(fn, ms, argument_optional)
    clearTimeout(returned_setTimeout)

    let x = elem.setInterval(fn, ms); clearInterval(x);
    
    ////Events
    .addEventListener("click", fn, optionalArgument); //can use more events than in html or .onEvent
    .addEventListener(click, fn, {once:true}); //click only once

    window.onload = fn;
    function fn (para) {
        para.target.setAttribute();
    }
    
    window.onresize = function () {};

    e.keyCode == "65";
    if (e.key == "v" && e.ctrlKey)
    e.propertyName
    consol.log(e.altKey) //output true if event+altpressed


    //conversion 
    number > number
    number > string(converted)
    string (converted) > string (converted)
    letter > letter (unicode)
    ("stringnumber" + "" + "stringnumber") //concat without add
    
    
    }
    
    
    
    //////// string methods 
    {
    let newString = "";
    newString += array[i);
    string.replace(/[^a-z]/g, "");
    processedString.split("").reverse().join("");
        
    Number()
    toString()
    booleean(a)
    .slice() //selected elements in an array, as a new array.
    .substring()
    .split()
    .sortLocaleCompare()
    .eval(text); //eval executes a string calculation
    
    
    .concat()
    .repeat(n)
    .trim()
    .charAt(n)
    .padStart()
    
    .match(/ini/g)  //returns matched in an array
    .includes() //for arrays, if its found return true, (value,starting position)
    .endsWith()
    .indexOf() //.lastindexOf();    (value,startingposition)
    itemName.indexOf(text) != -1  //indexOf return

    .search()   //returns first match index, -1 if not found
    
    .replace(), .replaceAll()
    .repeat()
    
    .fromChartoCode()
    .valueOf()

    .toLowerCase()	//to default inputs for processing

    
    string.method1().method2();, //obj.m.m
    
    
    }
    
    
    //////// number methods 
    {
    Math.trunc(x) //removes the characters or floats from a number
    
    //Number(x.toFixed(1)); .123 => .1 
    //Math.round( x * 10) / 10
    }
    
    //////// Window events
    {
    
    .innerWidth
    .onhashchange  //window.location.hash = ;
    .onresize
    .onTouchstart
    
    .onbeforeunload
    elem.requestFullscreen();
    .fullscreenchange .fullscreenerror
    
    body.ononline
    body.onoffline

    .onload/.onunload
    .onpagehide //like unload but allows cashing
    .onpageshow //like load but runs even when cash 
    //e.persisted returns false if not cached

//    console.time('fetching data');
//    console.timeEnd('fetching data'); //calc time taken for a function



    
    }
    
    //////// Events
    {

    
    console.lo(e) //show all properties 
    e.type //type of event
    
    
    events, track of clicks, page scroll, touch quantity
    e.preventDefault();   //prevent default behavior, ex link not open but does another thing

    .ontoggle 	//works with >details/summary tags
    .touchcancel    //when touch is interrupted
    




    //position and placing
    x = target.clientX; .clientY; //px position map.onclick = fn();
    - screenX users screen, pageX browsers screen
    //  pageX //mouseclick to draw
    e.offsetX/Y //position from the element itself
    //Rgb values based on offsetX
    .offsetWidth //size/position of an element, read only
    .offsetLeft //ret left position relative to parent
    .clientTop //ret width of top border
    .offsetParent //ret nearest ancestor
    .clientHeight/Width //size/position of a child in element with padding but ignores borders
    rect = x.getBoundingClientRect();	  //return elements position on screen
    rect.top/bottom/right/left.toFixed();
    window.pageXOffset, window.pageYOffset //add pointer position

    let w = window.outerWidth; //rightaway
    //get the size of an element use client/inner/outer/offset height/width properties
    //onresize works on window only
    

    //scrolling
    .scrollTop/ scrollLeft //property gives number of pixels scrolled , read/write
    .scrollWidth //read only, compared against  offsetWidth to determine if overflow happened
    div.scrollTo(x,y,behavior);
    window.scrollBy(100,100);   //force scroll, can be on an overflown scroll item like p
    para.scroll(100, 0);
    .scrollWidth
    .offsetWidth
    
    element.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'/'instant'
      });
      


    //divTest.style.cssText = "overflow: scroll;";
    //divTest.onScroll = fn;

    .deltaX, scrolling value, -left, +right otherwise 0, read-only, most mouses does not use
    .deltaY, -up/+down
    .deltaZ, returns value on zoom -out/+in
    .deltaMode, returns deltaX,Y,Z



    // get variable from inline style
    element.style.getPropertyValue("--my-var");

    // get variable from wherever
    getComputedStyle(element).getPropertyValue("--my-var");

    // set variable on inline style
    element.style.setProperty("--my-var", jsVar + 4);

        









    
    x = new Date().toString, getfullyear, getDay //Date sub-methods
    New Date().toString();
    New Date("your date as text");
    



    .ondragStart/.ondragEnd //in string.js
    .onDrop, onDragOver .onDrag .onLeave onDragEnter
    .onPlay
    
    .invalid (with html required attribute)
    .valid
    .input
    .change

    .onmouseover
    .onfocusout/onblur
    .onfocusin
    .keydown (para.key) //ms hold repeat
    .onkeyup
    .onkeypress //not work with alt, cmd etc
    .onclick
    .contextmenu    //rightclick
    .oncopy/oncut/onpaste
    .dblclick
    HTMLBodyElement.ongamepaddisconnected
    .wheel          // mouse wheel roll 



    .onmouseup/down
    .onmouseenter/leave (div only)
    .onmouseover/out (propagate inner element fires too)
    .onmousemove	(px move event)
    .onwheel (scroll/zoom out/in)

    .onscroll

    .ontouchstart	
    .ontouchmove	
    .ontouchend	
    .touchcancel    //when touch is interrupted


    e.touches.length
    let {pageX, pageY} = e.touches[i];

    
    
    .animationstart
    .animationend
    .animationiteration
    myDiv.style.animation 

    .transitionend  //end of css transition

    //hmtl Form/input-submit, 
    form on submit, e.preventDefault(); //avoid refreshing
    .ontoggle 	//works with >details/summary tags
    //form like a div with inputs text/reset on it
    //input type reset, form .onreset

    //<input type="search" id="searchInput" onsearch="searchFunction()">
    //searchPoutputID.innerHTML = searchinputID.value;

    //textID.onselect = fn;

    
    
    }
    
    
    ///////media events
    {
    
    .oncanplay
    .oncabplaythrough   //fully loaded
    .onabrot
    .onemptied
    .onstalled
    .onsuspend
    .ondurationchange
    .onended
    .ondurationchange
    .onended
    
    .onload
    .onloaddata(video frame)
    .onloadmetadata (audio/video info)
    .onloadstart (start looking for the file)

    audio.currentTime =0; //end

    .onplay
    .onpause
    .onplaying //media is playing after being paused or stopped
    .onprogress //when downloading i.e buffering
    .onratechange //when playback speed changes
    
    videoID.playbackRate = 0.3;
    .onseeking     //started change time scroll
    .onseeked   //finished change time scroll
    vidID.currentTime   //a value, either get or set time for a video
    .onstalled  //when media data is not available
    .onsuspend //when loading of media is prevented/suspended intentionally
    .ontimeupdate //when time scroll changes for any reason, can be used with current time to display time
    .volumechange
    .waiting        //media needs to buffer
    

    }
    
    

    ///////DOM Methods
    

    .querySelectorAll("div[attribute=data-name"); //where data-Name, name is a custom attribute 
    //multi attribute, different numbers
    item.querySelctior from its children


    .parentNode
    .nodeName/type/value
    .childNodes
    .firstChild
    .lastChild

    .nextSibling, 
    .previousSibling

    .hasChildNodes(x); 
    .removeChild();

    If (e.target.classList.contains("delete"))
    itemList.removeChild(e.target.parentElement);
    
    .replaceChild 	//removes
    .insertBefore(x,x); //to insert in Dom after creation and appending

    Node.TEXT_NODE  , node.nodeValue//holds the string text 
    Node.COMMENT_NODE
    Node.ELEMENT_NODE

    Li.appendChild(document.createTextNode(valueVar));

    //childNodes,firstChild, nextSibling  (incl text/space nodes)
    //children, first/LastElementChild (not incl text/space)

    console.dir(container2611.firstElementChild);
    console.dir(container2611.previousElementSibling);
        
    //parentNode.appendChild(childNode);    //append to last of children
    //parentNode.insertBefore(newNode, referenceNode);  //append before reference node in parent node
    //parentNode.removeChild(childname)

    .children //only elements
    item.firstChild.textContent



    ////Forms
    . DOMContentLoaded
    div.hidden = true/false;
    e.target.checked
    //Get attribute type password to text to show password
    e.preventDefault(); //avoid going to another page on submit

    //JSValidation for form button,fieldset,input,output,select,textarea
    .validationMessage //returns message describing validation concerns
    .validity  //returns a validityState //has many states to check online*
    .valid //returns true if element meets all its validation
    .valueMissing  //true if required attribute but no value
    .willValidate //true if element will be validated when form is submitted


    .checkValidity(); //checks whether any inputs are subject to constraint validation.
    .reportValidity();  //reports invalid fields using events useful with preventDefault() in an onSubmit event handler
    .setCustomValidity('message');  //element is invalid if set this message and the specified error is displayed
    .myform.noValidate = true; //disable default validation and error messages and validate function on submit event
    





    ///////DOM Properties


    .currentTarget, returns the element whose event listeners triggered the event
    .target, returns the element on which the event occured
    e.data, returns the characters inserted with the event like on input
    .dataTransfer, returns the object containing the data being dragged/dropped or inserted/deleted


    .wheel          // mouse wheel roll 
    .altKey, returns whether the ALT key was pressed
    .animationName, return animation name
    .bubbles,  bubbling event ?
    .button,    which mouse button pressed when mouse event triggered
    .buttons,    which mouse buttons pressed when mouse event triggered
    .cancelable,    event can have its default action prevented?
    .charCode,  returns unicode character code of the key tiggered the event
    .changeTouches, returns all touch objects state changed between previous touch and this touch
    
    .clipboardData, returns an object of data affected by the clipboard operation
    .code, returns code of the key triggered the event
    .composed, returns whether the event is composed or not
    .ctrlKey, whether the CTRL key was pressed when the mouse event is triggered, mouse/keyboard/touch event
    
    .defaultPrevented, pereventDefault was called for the event?








    ///JS-practices

    //
    function getFullName(user) {
        const { firstName, lastName } = user; // instead of const firstName = user.firstName;
        return `${firstName} ${lastName}`;
    }
  
    //// another way of returning
    function processInput(input) {
        // then a miracle occurs
            return { left, right, top, bottom };
    }
    // the caller selects only the data they need
    const { left, top } = processInput(input);
  
    //return `How are you, ${name}?`; better than   return 'How are you, ' + name + '?';
  

    //
    const [first, second] = arr; // first = arr[0], second = arr[1]


    //
    const newFunction = function DescriptiveFunctionNameHere () {
    }

    //wrap immediately invoked functions
    (function () {

    }();)

    //declare function names if will use in if/loops
    let test;
    if (currentUser) {
    text = () => {};
    }

    //never name a parameter the name "arguments" not to take precedence over the arguments object
