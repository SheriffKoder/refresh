
// write each component in a separate file 
// then combine all in the parent component
// thus having reusable components

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
import React from 'react'; //all component
import ReactDOM from 'react-dom'; //all component
//import Hello from './app/Hello.jsx'; //in main component

//comments in react
{
    /* comment here * /
}


class App_1A extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name;
        }
    }

    this.setState({name: 'Hello'}); // Do this, not direct call


    render() { //was outside of component
        return {
            <div className="App">
                <h1> Hello World 1A {props.name} </h1>
                
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>

            </div>
        }
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



//why does a class has a render inside it?
//while in comp1 the render was outside the class?
//


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

