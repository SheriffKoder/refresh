
// write each component in a separate file 
// then combine all in the parent component
// thus having reusable components

//React doesn't require using JSX code
//but it allows react to show more useful error warning messages
//after compilation, JSX expressions become regular JS function calls
//and evaluate to JS objects



//index.html contains one div with your divs/root elements nested inside it
// as React uses camelCase property naming

// If a tag is empty, you may close it immediately with />, like XML:
//const element = <img src={user.avatarUrl} />;



//////////// installation ////////////

//npx create-react-app my-first-react-app
//cd my-first-react-app
//npm start   //to view the project in browser

//this will create index.js (entry point) and App.js
//public > index.html, public > manifest.json (describes your application)
//to change name, change "App" in .js and in index render also
//webpack is used here to bundle code

////build > index.html
//and served from # run npm start
//and received from # npm run build

////package.json
//contains scripts like start, build, test, eject



//tweak app.js
//build components into src > components > folder and import inside app.js

//npm start   //to view the project in browser


/**
* Yarn is a package manager for JS dependencies
* alternative to the default Node.js package manager (npm)
* package managers allow use of packages/modules
* package.lock.json instead of yarn.lock if npm used when yarn not installed
* Yarn was created by Facebook in order to solve problems with npm
* Yarn has less installation duration, more secure
*/


/**
 * html contains root div
 * index renders app jsx
 * App.js is a component, 
 */





//////////////////////////////////////////////////////////

//imports
//App class/function
//render
//export

////main.js
//imports
//render


//States
//define this.state = state
//this.setState({state:"text"})
//state = useState("text")
//in render, {props.state}


////////////////////////////////////////////////////////////
////component1
import React, { Component, useState, setState } from 'react';
import ReactDOM from 'react-dom'; //all component
//import Hello from './app/Hello.jsx'; //in main component

//comments in react
{
    /* comment here * /
}


class App_1A extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name
        }
    }
    **
    this.setState({name: 'Hello'}); // Do this, not direct call


    render() {
        return (
            <div className="App_1A">
                <h1> Hello World 1A {props.name} </h1>
                
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>

            </div>
        )
    }

}


ReactDOM.render(
  App_1A,
  document.getElementById('root_1A')
);


////component using function syntax; function/arrow/direct_arrow_noreturn
const App_1B = (props) => {
    const [timeOfDay, setTimeOfDay] = useState('morning');
    const [count, setCount] = useState(0);
    
    return {
        <div> 
            <h1> Hello World 1B {props.name} {props.timeOfDay} </h1> 
            <p> You clicked {count} times </p>
            
            <button className={props.objectInput.class} 
                    onClick={() => setCount(count+1)}> 
                Click me
            </button>
        
        </div>;
        
    }



const element_1B = <App_1B name="Sara" />;
ReactDOM.render {
    element,
    document.getElementById('root_1B')
}


export default App_1A; //default no brackets
export { App_1B };
//export { ComponentA, ComponentB, ComponentC }; // multiple



////////////////////////////////////////////////////////////
////main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App_1A from './app/Component1.jsx';


let myDiv1 = document.getElementById('rootDiv1);
ReactDOM.render(<App_1A />, myDiv1);



class Component2 extends React.Component {
    render() {
        return {
        <div className="App">
            <h1> Hello World 2</h1>
        </div>

        }
    }
}

let myDiv2 = document.getElementById('rootDiv2);
ReactDOM.render(<Component2 />, myDiv2);




////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/*

add more components
in src/components/folder and import into App.js

make App.js the main js file
and index.js to render just the App module

App.js is the root component
that imports/uses other child components

Data flows from root to children through "props"
and flows back using callback functions



//React Developer tools
//button lights up when the website is using react
//extension to chrome dev tools elements
//helps check and edit component tree as well as props, state, hooks

ok so can export a module right away
Sometimes you may see components in the tree named Anonymous. 
This is usually caused by developers exporting the component 
as an unnamed default using syntax
//you can change that by adding names after default
export default () => {...};
export default function() {...}
export default class extends Component {...}


//can put any javascript code inside curly brackets
//for example 2+2, user.firstName, formatName(user) etc.

**
// jsx lines can be used as variables
// use inside if/for, argument, return it from functions











*/













//React DOM ensured you never inject anything not explicity written
//in your application, everything is converted to a string before being rendered
// this helps prevent XSS cross-site-scripting attacks
