
// write each component in a separate file 
// then combine all in the parent component
// thus having reusable components

//React doesn't require using JSX code
//but it allows react to show more useful error warning messages
//after compilation, JSX expressions become regular JS function calls
//and evaluate to JS objects


//component names start with a capital letter
//DOM tags start with lower case 

//////Handling events
//<button onclick="activateLasers()">  //Html
//<button onClick={activateLasers}> //JSX, //camelCase, {functionName}
//Activate Lasers
//</button>


//App in App.js is the root component
//can only return one element/wrapper but it can have other nested elements



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


//check react_app_1 files for code

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/*

//if part of UI is complex or used several times
//try to extract from it into separate components

//a component should ideally only do one thing. single responsibility
//If it ends up growing, it should be decomposed into smaller subcomponents.

//state is reserved only for interactivity not for static versions


//Rule: All React components must act like pure functions 
//with respect to their props.

//Pure
function sum(a, b) {
  return a + b;
}

//not Pure
function withdraw(account, amount) {
  account.total -= amount;
}




// React is a library for creating user interfaces
// builds single components or widgets
// angular 2 supports building whole single page applications



//header.js
import React from "react";
export Class Header extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <div className="nav navbar-nav">
                            <li><a href="#"> Home</a></li>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

//React supported events
https://reactjs.org/docs/events.html


//after class can set the default values for states if undefined
CustomButton.defaultProps = {
  color: 'blue'
};
//but if want a null, give value = {null} in the return

**
//need to set the state based on a previous state ?
//using componentDidUpdate() or a setState callback
(setState(updated, callback)) either of which are
guaranteed to fire after the update has been applied

//unless shouldComponentUpdate() returns false
//setState() will always lead to re-render

this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
//props is an optional callback










////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

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


// jsx lines can be used as variables
// use inside if/for, argument, return it from functions




/*////////////////////////////////////////////////////////////////////*/
/*

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));



////lifecycle methods
//Mounting
//set up a timer whenever the clock is rendered to the DOM for the first time
//When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.


//unmounting
//clear that timer, whenever the dom produced by the clock is removed
//If the Clock component is ever removed from the DOM, 
//React calls the componentWillUnmount() lifecycle method 
//so the timer is stopped.


special methods in the class for each
  componentDidMount() {
  componentWillUnmount() {




//returning/passing state to the next component
//makes it not visible if its a state, props to the next component

//The ‘this.props’ is a kind of global object which stores all 
of a components props.


//preventing default behavior in JSX
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}



//if used onClick={this.handleClick}, you should bind that method.
//or used arrow function in the calling line,
//but a different callback is created each time the class renders
<button onClick={() => this.handleClick()}>
//or define the function 
  handleClick = () => { };


//passing arguments
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
//e is passed automatically in the bind


//////conditional rendering cont...
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);



//////inline if with logical && operator
//note: falsy conditions will have the expression be returned
//It works because in JavaScript, true && expression always evaluates 
//to expression, and false && expression always evaluates to false.

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Mailbox unreadMessages={messages} />);



//another example
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}



//////use return null to hide a component
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Page />);






*/













//React DOM ensured you never inject anything not explicity written
//in your application, everything is converted to a string before being rendered
// this helps prevent XSS cross-site-scripting attacks
