
//Code in english
//Code is self explainatory


/*////////////////////////////////////////////////////////////////////*/
//////// RegEx
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




/*////////////////////////////////////////////////////////////////////*/
//////// CSS Specificity
/*

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
*/


/*////////////////////////////////////////////////////////////////////*/
///// backgrounds 
/*
(color-in, color-out 75%)   //having total % of
(circle on top, color1, %, color2)    //color1, tillhere, color2



/*////////////////////////////////////////////////////////////////////*/
///// Function types

/*1)global/local function execution context
memory and code parts
a)  memory creation phase
    allocates memory to vars/func vars, for a value of undefined
    allocates memory to def functionName, stores whole code
  
b) code execution phase 
*/

let func = (arg1, arg2, ... ) = > expression;

//if age then use this function, else func is another function
let func = (age > 18) ?
    () => alert('hello'):
    () => alert ('greetings');

//can ommit {} if one line
//pass an arrow asyncronous function


function min (a,b) {
    //return (a > b)? a : b;
    return (a>b) || b;
  }


  




//////// Array methods
.join()     //outputs a string
.map(fn)    //uses this function for each item in array


/*////////////////////////////////////////////////////////////////////*/

setAttribute
getAttribute
getElementbyId
getElementbyClassName
getByTagName
.querySelectorAll
Element.style.left
Element.src 
x.textContent
loop take event action on tag name array 

.setTimeout(fn, ms)
let x = elem.setInterval(fn, ms); clearInterval(x);

.addEventListener("click", fn);

window.onload = fn;
function fn (para) {
    para.target.setAttribute();
}


OR chain , first true or last false
AND chain, first false or last true

number > number
number > string(converted)
string (converted) > strng (converted)
letter > letter (unicode)
("stringnumber" + "" + "stringnumber") //concat without add


//////// string methods 
{
Number()
toString()
booleean(a)
.slice()
.substring()
.split()
.sortLocaleCompare()

.concat()
.trim()
.charAt(n)
.padStart()

.match()
.includes()
.endsWith()
.indexOf()
.search()

.replace(), .replaceAll()
.repeat()

.fromChartoCode()
.valueOf()

}


//////// Window methods
{
.onload
.innerWidth
.onhashchange  //window.location.hash = ;
.onresize
.onTouchstart

.onbeforeunload

}

//////// Events
{

x = .clientX; .clientY; //px position
.ondragStart/.ondragEnd
.onDrop, onDragOver .onDrag .onLeave onDragEnter
.onPlay

.onmouseover
.onfocusout/onblur
.keydown (para.key)
.onkeypress
.onclick
}



