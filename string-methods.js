

console.log("//////////////////");
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//// localeCompare, returns a value based on a/b precedence

//localeCompare(compareString, locales, options);

// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0

// numeric using options:
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1


const items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//eval executes a string calculation
//should not be used in security because it exposes code
let x = 10;
let y = 20;
let text11 = "x + y";
let result = eval(text11);


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//match() returns number of occurances

let text2 = " here we are here";
let result2 = text2.match(/ere/g); //search global or gi case-insenstive
console.log(result2);

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//str1.padEnd(25, '.');
// expected output: "Breaded Mushrooms........"

//console.log(str2.padEnd(5));
// expected output: "  200" total string length is 5, spaces placed by default

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//let new_text = text3.repeat(2); //returns the text repeated n times


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/* returns new string with all matches of pattern/string/RegExp
*/

//p = "quickly jump over the box of the box";

//console.log ( p.replaceAll('box','box2') ); 

//console.log ( p.replace('box','box2') );  //first occurrence only

//console.log ( p.search("ui"));  //search beginning of string


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//takes a string and output a string
//let string2 = string.valueOf();

//let text = String.fromCharCode(65);   //outputs A
//let result = text.includes("world"); //returns true if found

/*////////////////////////////////////////////////////////////////////*/

//Wrapper Methods
//better use concatenate tags it may not be supported in future versions

//methods output the string as an html element to be used in innerHtml

//anchor, link
//big
//blink, 
//bold, 
//fixed <tt>,
//font color  <font color="red"></font>, 
//font size
//italics <i> </i>
//small
//strike
//sub
//sup


let text2210 = "Hello world";
let text22102 = text2210.sup("red");
//console.log(text22102);




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*//*
                            HTML DOM EVENTS
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/





//media loading issues : onabrot, onerror, onsuspend
//.afterprint

//on-canplay    //when browser has buffered media and ready to play it
//on-canplaythrough     //without stopping for buffering, fully loaded

//media onerrors
// onabrot, onemptied, onstalled, onsuspend



/*////////////////////////////////////////////////////////////////////*/
//Css animation related 

//  .animationstart, .animationiteration, .animationend

//onclick this function

let myDiv2410 = document.getElementById("animation_event");

myDiv2410.addEventListener("click", clickFunction);

function clickFunction (para) {
    
    let myDivHere = para.target;
    myDivHere.style.animation = "animation1 2s 2";


    myDivHere.addEventListener("animationstart", startFunction );
    myDivHere.addEventListener("animationiteration", repeatFunction );
    myDivHere.addEventListener("animationend", endFunction );


    function startFunction () {
        myDivHere.style.background = "red";
        myDivHere.style.color = "white";

    }

    function repeatFunction () {
        myDivHere.style.background = "red";
        myDivHere.style.color = "lime";

    }

    function endFunction () {
        myDivHere.style.background = "purple";
        myDivHere.style.color = "grey";

    }

}

/*////////////////////////////////////////////////////////////////////*/


//before print, about to be printed

//before unload, before the document becomes unloaded, custom message
    //<body onbeforeunload="return unloadfunction();">

    function unloadfunction () {
        return "message here will be displayer only in IE else default";
    }

//alternatively to onunload there is onpageHide
//that allows page to be cached
//to find out if page is loaded from server or cashed, 
//use the returned from the persisted event property, false if not cached



//alternatively to onload there is onpageshow
//onload does not run when page loaded from cache, but pageshow does




    //onfocus, onblur/onfocusout
    //onfocusin (about to get focus)




/*////////////////////////////////////////////////////////////////////*/

//onchange, for selection/checked inputs
//click
//contextmenu, right click, firefox has a contextmenu attribute to be edited
//onshow when menu html element is shown as a context menu
//oncopy
//oncut
//dblclick
//drag


//drag start, drag end
//drag over
//drop
//drag


//drag leave
//drag enter
//



//ondragstart
function drag_start (event) {
    event.dataTransfer.setData("Text", event.target.id);
}


//ondragover
function on_drag_over (event) {
    event.preventDefault(); //prevents element to appear on div1 ?
}


//ondrop
function on_drop (event) {
    event.preventDefault(); //prevents element to appear on div1 ?

    let data =   event.dataTransfer.getData("Text");
    
    event.target.appendChild(document.getElementById(data)); //append div with text?

    document.getElementById("demo").innerHTML = "The Element was dropped";


}

/*misc*/
//ondrag
function on_drag (event) {
    document.getElementById("demo").innerHTML = "the element is being dragged";
}


function dragEnter (event) {

    if (event.target.className == "droptarget") {
        document.getElementById("demo2").innerHTML = "entered drop zone";
        event.target.style.border = "3px dotted red";
    }
}


function dragLeave (event) {

    if (event.target.className = "droptarget" ) {
        document.getElementById("demo2").innerHTML = "left drop zone";
        event.target.style.border = "";
    }

}



/* explanation: send the id, take the id, append that element */
/*
para.dataTransfer.setData("Text", para.target.id); //dataTransfer the id of type text

let DataReceived_id = para.dataTransfer.getData("Text");  //get the data of the type text
let DataReceived = document.getElementById(DataReceived_id); // data is an id so get the element of this id
para.target.appendChild(DataReceived_id);
*/



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

// Media

//when the total duration of video changes i.e from 0 to loading the duration
//videoName.ondurationchange = function {};
//audioName.onended = function ();


/*////////////////////////////////////////////////////////////////////*/
/* fullscreen, does not work, also has editions for each browser*/

/*
var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();

    } else if (elem.webkitRequestFullscreen) { //Chrome, Safari & Opera
      elem.webkitRequestFullscreen();

    }
  }


  var output = document.getElementById("demo");

  document.addEventListener("webkitfullscreenchange", function() {
    output.innerHTML = "webkitfullscreenchange event fired!";
  });

  
  document.addEventListener("fullscreenerror", function() {
    alert("Fullscreen denied");
  });

  document.addEventListener("mozfullscreenerror", function() {
    alert("Fullscreen denied");

  });


console.log("//////////////////");


/*////////////////////////////////////////////////////////////////////*/


/* add event on hash change 

html <body onhashchange="myFunction()">
html <button onclick="changeHash()"> Try it </button>

*/

/*

function myFunction () {
    alert("anchor part has changed");
}


window.location.hash = "part5";

function changeHash() {
    location.hash = "part5";
    x = location.hash;
    document.getElementById("demo").innerHTML = "Anchor now is " + x;
}

//////////


const hashUpdate = document.getElementById('hash-update-p');

window.addEventListener("hashchange", function () {
        //alert("the hash has been changed");
        hashUpdate.textContent = window.location.hash.substring(1); //after#
});



/*////////////////////////////////////////////////////////////////////*/

/*
x.parentNode.nodeName
document.body.childNodes
//nodes are elements, text, comments, whitespaces

children are elements, but nodes contains elements, text, comment, whitespaces

.parentNode
.childNodes //list of child nodes   //can loop on them
    .firstChild, .lastChild,
.nextSibling, .previousSibling

element.hasChildNodes();    //true if it has children
element.removeChild

x.nodeName
x.nodeType, 1(element), 2(attribute), 3(text), 8(comment)
x.nodeValue



/*////////////////////////////////////////////////////////////////////*/
/*

innerHTML, including all spacing and inner HTML Tags
innerText, just the text content of the element and its children, no css tags
textContent, text content of element and children, with spacing/css but without tags


const foo = null ?? "default string " //default string
returns the right hand side operand 
if the left hand side is null or undefined
otherwise returns the left




*/



/*////////////////////////////////////////////////////////////////////*/

/*input is similar to onchange event, but
oninput: occurs immediately on change 
onchange: after element loses focus, works on <select> */
/*
<input type="text" id="myInput" oninput="myFunction()">
*/

/*
function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + x;
  }
*/


/*////////////////////////////////////////////////////////////////////*/

//oninvalid
/*
<form action="/action_page.php" method="get">
  Name: <input type="text" oninvalid="alert('You must fill out the form!');" name="fname" required>
  <input type="submit" value="Submit">
</form>
/*


/*////////////////////////////////////////////////////////////////////*/
/*

.onkeypress //does not work for all keys like ATL,CTRL Etc,

.onload     //body onload=""
.onloaddata //works with video, first frame, 
.onloadmetadata //for audio/video, duration, dimensions and next tracks info has been loaded
.onloadstart    //loading process: when browser starts looking for the specified audio/video

*/





/*////////////////////////////////////////////////////////////////////*/
/*
//on message
//when a message is received through an event source


.onmousedown   //click initiate
.onmouseup     //click release


//// enter/leave, over/out, move
.onmouseenter/leave   //hover over, when enters the div
.onmouseover/out //does bubble,  propagate up(uses) the hierarchy
//when the mouse pointer enters the div element, and its child elements (p and span).

.onmousemove    //every time the mouse move(px)

.onwheel        //when scroll or zoom with wheel up/down



*/


/*////////////////////////////////////////////////////////////////////*/
/* Online/Offline
        
<body ononline="onlineFunction()" onoffline="offlineFunction()">

//?document.body.addEventListener("ononline", onlineFunction);
//?document.body.addEventListener("onoffline", offlineFunction);

function onlineFunction () {
    alert ("Your browser is working online.");

}

function offlineFunction () {
    alert ("Your browser is working offline.");

}

*/


/*////////////////////////////////////////////////////////////////////*/
/* events when a connection with an event source is opened

onopen
onmessage (with properties like e.data, e.origin, e.lastEventId)
onerror

//(1) new Eventsource object

var source = new EventSource("file.php");
source.onopen = function () {
    
}






*/


/*////////////////////////////////////////////////////////////////////*/
/* media 2

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

*/


/*////////////////////////////////////////////////////////////////////*/
/*

let newDiv1212 = document.createElement("div");
newDiv1212.style.cssText = "height:30vh; width: 30vw;   background: blue;" ;
document.body.appendChild(newDiv1212);
//works with window only
//get the size of an element use client/inner/outer/offset height/width properties

newDiv1212.onresize = resizeFunction2;

function resizeFunction2 () {
    var w = window.outerWidth;
    var h = window.outerHeight;

    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demoResize").innerHTML = txt;
  

}


/*////////////////////////////////////////////////////////////////////*/
/*
Form Reset
*/

let form1212 = document.createElement("form");

let inputTextform1212 = document.createElement("input");
inputTextform1212.setAttribute("type", "input");

let inputResetform1212 = document.createElement("input");
inputResetform1212.setAttribute("type", "reset");

document.body.appendChild(form1212);
form1212.appendChild(inputTextform1212);
form1212.appendChild(inputResetform1212);


//form1212.onreset = () => alert("form reset");


/*////////////////////////////////////////////////////////////////////*/
/*
*/

//divTest.style.csstext = ("overflow: scroll;");
//divTest.onScroll = fn;

//onsearch, when search input has enter or x-icon clicked
let searchinput = document.getElementById("searchInput");
let searchoutput = document.getElementById("demo1612");


function searchFunction () {
    searchoutput.innerHTML = searchinput.value;
}

textID.onselect = fn;

/*////////////////////////////////////////////////////////////////////*/
/*

.touchstart
.touchcancel    //when touch is interrupted
.touchend
.touchmove

.transitionend  //give css on transition end

.volumechange
.waiting        //media paused because it needs to buffer
.wheel          // mouse wheel roll


*/

/*////////////////////////////////////////////////////////////////////*/
/*

DOM Properties

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

//
.currentTarget, returns the element whose event listeners triggered the event
.target, returns the element on which the event occurred
e.data, returns the characters inserted with the event like on input
.dataTransfer, returns the object containing the data being dragged/dropped or inserted/deleted

.defaultPrevented, pereventDefault was called for the event?

.deltaX, scrolling value, -left, +right otherwise 0, read-only, most mouses does not use
.deltaY, -up/+down
.deltaZ, returns value on zoom -out/+in
.deltaMode, returns deltaX,Y,Z


/*////////////////////////////////////////////////////////////////////*/
/*

e.detail // returns how many times the mouse was clicked in the same time, used in an onclick event as a property
e.elapsedTime //used with an animationiteration/transitionend event, returns how many seconds the animation has been running
e.eventphase //returns which phase of the event flow is currently being evaluated, NONE / CAPTURING_PHASE / AT_TARGET / BUBBLING_PHASE

e.getModifierState("capslock"); //returns true if a modifier key was pressed like alt/AltGraph/Control/Meta/Shift/Capslock/NumLock/Scrolllock with locks turn it on/off with the key
e.inputType //returns the type of change that was done by the event
isComposing //true/false


e.isTrusted // true if invoked by user (onclick) , false if with script (btn.click(); -- in IE all events are trusted except createEvent()
e.key   //what is pressed on a keydown event ?
e.location // for onkeydown/up key's group location on keyboard A/1:0, LCTRL:1, RCTRL:2, num:3
e.lengthComputable //true or false for length of the progress can be computable or not
e.loaded    //how much work has been loaded





/*////////////////////////////////////////////////////////////////////*/
/*

//event
<body onhashchange="myFunction(event)">
function myFunction() {
event.oldURL;
}

e.metaKey //returns true if windows/CMD-mac pressed
MovementX/Y //returns the horizontal/vertical coordinate of the mouse pointer 
        //relative to the position of the last mousemove event
new/oldValue //returns the new/old value of the changed storage item
newURL/oldURL //onclick[location.hash="part5"], onhashchange=[e.oldUrl, e.newURL]

offsetX/Y //horizontal/Vertical coordinate of the mouse pointer relative to the position of the edge of the target element






*/