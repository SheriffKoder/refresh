/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*


//react library has nothing to do with the browser
//so we use react-dom (was included before)

//setting up React environment without create-new-react-app
//install npm, react libs, webpack, babel


# npm init
# npm i react react-dom

//webpack is what allows react to share modules together
//and webpack dev server for having a local host

# npm i --save-dev webpack webpack-dev-server webpack-cli


//transpile ES6 code into browser friendly code
//babel preset react and babel preset env
//also a loader to compile jsx
//html webpack plugin

# npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin

>>create webpack.config.js


////// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


//__dirname (current directory), ./dist (directory for bundle file) and its name
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}

/////////////////////

>> create ./.babelrc

{
    "presets": ["env", "react"]
}




/////////////////////
//package.json

>> scrips > replace test
with 
"start" : webpack-dev-server --mode development --open --hot",
"build" : "webpack --mode production"



>> create src/index.html, index.js
//this is the place for anything related to react application

//import and write code normally

//npm start


//this is a file to use react without un-necessary stuff
//with hot reload

ctrl c to stop
npm run build //will create the bundle file in dist folder

https://www.youtube.com/watch?v=deyxI-6C2u4



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

npm is a library of tools, libraries that you can download and use 

in html
<script src="https://unpkg.com/react016.5.1/....js"/>
<script src="https://unpkg.com/react-dom016.5.1/....js"/>
<script src="https://unpkg.com/babel/....js"/>


in console write
ReactDOM //this will give all ReactDOM methods

const root = document.getElementById('root');

const Element = React.createElement("div", [
    className: 'container,
    children:[
        'Current Time', //text
        Date.now().toLocaleString(),
        React.createElement('span', [children: 'Hey there!']);
    ] 
])

//ReactDOM.render(element, container, callback);
ReactDOM.render(Element, root);

//if got syntax error for using jsx
//can enter babeljs.io
//paste jsx code and will output a js code

const string = `
    sweet! ${js_expression}
`;



*/
