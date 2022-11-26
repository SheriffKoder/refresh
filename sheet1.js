
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
    //////// CSS Specificity
    {/*
    
    CSS Cascade (Priority) for the same style-property only, else is applied
    1.HTML inline                                           score 1000
    1.1 html header style
    3.Direct specificity/Last specified
    2.Layer                                                 score 
    4.ID                                                   score 100
    5.Class/attribute(required, href=.. )/pseudo-selectors(::hover etc) score 10
    6.Type                                                  score 1
    * + > ~ _ || have no impact over specificity score      score 0
    
    .para:first-of-type << highest hit 5 5 (wins) -> color:white
    p.para << hit 5 6  -> color:red
    
    #para -> color:red (now color:red has been enhanced by a hit so wins with this)
    
    
    if same type, then the more count the more priority
    .class .class wins over .class
    #id .class wins over .class .class
    #id .class .class wins over #id .class
    
    
    Website style over browser style
    */}
    
    /*////////////////////////////////////////////////////////////////////*/
    /*CSS*/
    {
    
    ///// backgrounds 
    /*
    (color-in, color-out 75%)   //having total % of
    (circle on top, color1, %, color2)    //color1, tillhere, color2
    
    keyframes {
        0%, 100%  ease-out
        50% ease-in
    }
    
    */
    }
    
    
    ///// Javascript
    
    label:loop , break label; //apply on parent loop
    continue;(next loop) break; //out of current loop
    
    
    for (const indexname in ArrayName ){
         objectName[indexname];
    }
    
    0 is not '0'
    
    
    if ( numX.length !=8|| isNaN(numX.slice(0,3)) || numX.charAt(3)!="-"  || isNaN(numX.slice(4,8))      ) {
        console.log("not accepted");
    }
    
    OR chain , first true or last false
    AND chain, first false or last true
    
    
    
    /*////////////////////////////////////////////////////////////////////*/
    ///// Function types
    {
    
    
    //Arrow
    let fun = (para) => {expression};
    
    //declaration
    function fun () {
    
    }
    
    //expression
    let fun = function () {
    
    }
    
    
    
    
    /*1)global/local function execution context
    memory and code parts
    a)  memory creation phase
        allocates memory to vars/func vars, for a value of undefined
        allocates memory to def functionName, stores whole code
      
    b) code execution phase 
    */
    
    // console.log/warn/info/error/assert/clear/dir/count/time(it takes)/table
    
    
    let func = (arg1, arg2, ... ) = > expression;
    
    //if age then use this function, else func is another function
    let func = (age > 18) ?
        () => alert('hello'):
        () => alert ('greetings');
    
    //can ommit {} if one line
    //pass an arrow asyncronous function fn (  ()=>alert()     ) {}
    
    //fun(new_func) { newFunc(2)    //pass function to function
    //let newFunc = functionName (Declaration or expression)
    
    
    
    
    //divisible i%3 === 0
    
    
    function min (a,b) {
        //return (a > b)? a : b;
        return (a>b) || b;
      }
    
    }
    
    //FOREACH with ARROW function
    fruits.forEach( fruit => expression); (myFunction);
    
    
    //ARGS
    - function (...args)  {
            args.forEach(arg) //array of undefined n arguments
            
            //arguments without ... have to be converted to x= Array.from(arguments)
    }
    
    
    
      
    
    //////// Array methods
    {
    //array is a numbered object
    .join()     //outputs a string
    .map(fn)    //uses this function for each item in array
    isArray(x) , (x instanceof Array) //check if array
    array_name.filter(function_returns _true_cases) applies to each item if true is returned
    
    object/array.toString()
    
    
    array.slice(3,4); //output new array from start,end+1
    array.splice(2,0, str, str);	//placement position without holes, how many from exist remove = 0, inputs
    array.concat(a2,string1);
    
    array.unshift/shift();	//add/remove from beginning
    array.push/pop();,
    
    - array matrix =[ [,,][,,][,,]  ];
    - arrays can hold function, obj-ref, 
    
    
    }
    
    /*////////////////////////////////////////////////////////////////////*/
    Element Methods
    { 
    setAttribute
    getAttribute
    getElementbyId
    getElementbyClassName
    getByTagName
    .querySelectorAll
    Element.style.left
    Element.src 
    x.textContent
    //loop take event action on tag name array 
    
    x =parseInt(prompt()); //input into number
    let x = confirm(text); //like prompt but ok(true)/cancel(false)
    
    p.classList.contains("name");
    
    
    .setTimeout(fn, ms, argument_optional)
    let x = elem.setInterval(fn, ms); clearInterval(x);
    
    .addEventListener("click", fn);
    
    window.onload = fn;
    function fn (para) {
        para.target.setAttribute();
    }
    
    window.onresize = function () {};
    
    
    
    number > number
    number > string(converted)
    string (converted) > string (converted)
    letter > letter (unicode)
    ("stringnumber" + "" + "stringnumber") //concat without add
    
    
    }
    
    
    
    //////// string methods 
    {
    Number()
    toString()
    booleean(a)
    .slice()
    .substring()
    .split()
    .sortLocaleCompare()
    .eval(text); //eval executes a string calculation
    
    
    .concat()
    .repeat()
    .trim()
    .charAt(n)
    .padStart()
    
    .match(/ini/g)
    .includes()
    .endsWith()
    .indexOf() //.lastindexOf();
    .search()
    
    .replace(), .replaceAll()
    .repeat()
    
    .fromChartoCode()
    .valueOf()
    
    string.method1().method2();, //obj.m.m
    
    
    }
    
    
    //////// number methods 
    Math.trunc(x) //removes the characters or floats from a number
    
    
    //////// Window events
    {
    
    .onload
    .innerWidth
    .onhashchange  //window.location.hash = ;
    .onresize
    .onTouchstart
    
    .onbeforeunload
    elem.requestFullscreen();
    .fullscreenchange .fullscreenerror
    
    
    }
    
    //////// Events
    {
    
    - events, track of clicks, page scroll, touch quantity, 
    
    x = target.clientX; .clientY; //px position map.onclick = fn();
    - screenX user's screen, pageX browser's screen
    
    x = new Date().toString, getfullyear, getDay //Date sub-methods
    .ondragStart/.ondragEnd
    .onDrop, onDragOver .onDrag .onLeave onDragEnter
    .onPlay
    
    .onmouseover
    .onfocusout/onblur
    .onfocusin
    .keydown (para.key)
    .onkeyup
    .onkeypress
    .onclick
    .contextmenu    //rightclick
    .oncopy/oncut/dbclick
    
    
    .animationstart
    .animationend
    .animationiteration
    myDiv.style.animation 
    
    
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
    
    
    }
    
    