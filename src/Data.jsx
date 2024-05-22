import './Data.css'

export let titles = [ "Introduction" , "GetStarted" , "Input",  "Output"];
        //                 0              1             2           3  

export let contents = [

    <div className='content-container'>
        <h2> What is React? </h2>
        <div className="ans-div">
            <p>
                React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                React is a tool for building UI components.
                React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                React is a tool for building UI components.
            </p>
            <p>
                React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                React is a tool for building UI components.
                React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                React is a tool for building UI components.
            </p>
        </div>

        <div className='code-div-container'>
            <h3> Coding Example </h3>
            <div className='code-div'>
            <code>
            <pre>   
                {`  import React from 'react';
                    import ReactDOM from 'react-dom/client';

                    function Hello(props) {
                        return <h1>Hello World!</h1>;
                    }

                    const container = document.getElementById("root");
                    const root = ReactDOM.createRoot(container);
                    root.render(<Hello />);
                `}
            </pre>
      </code>
            </div>
        </div>
    </div> ,

<div className='content-container'>
<h2> React Directly in HTML </h2>
<div className="ans-div">
    <p>
        To get an overview of what React is, you can write React code directly in HTML.

        But in order to use React in production, you need npm and Node.js installed.    
    </p>
    <p>
        Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.

        You will learn more about JSX in the React JSX chapter.
    </p>
</div>

<div className='code-div-container'>
    <h3> Coding Example </h3>
    <div className='code-div'>
    <code>
    <pre>   
        {`  
            <!DOCTYPE html>
            <html>
              <head>
                <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
                <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
              </head>
              <body>
            
                <div id="mydiv"></div>
            
                <script type="text/babel">
                  function Hello() {
                    return <h1>Hello World!</h1>;
                  }
            
                  const container = document.getElementById('mydiv');
                  const root = ReactDOM.createRoot(container);
                  root.render(<Hello />)
                </script>
            
              </body>
            </html>
        `}
    </pre>
</code>
    </div>
</div>
</div>,



<div className='content-container'>
<h2> Upgrade to React 18 </h2>
<div className="ans-div">
    <p>
        Upgrading an existing React application to version 18 only requires two steps.

        If you are already using the latest version of create-react-app which uses React version 18 you can skip this section.   
    </p>
    <h3> Step 1: Install React 18 </h3>
    <p>
        To install the latest version, from your project folder run the following from the terminal:
    </p>

    <h3> Step 2: Use the new root API </h3>
    <p>
    In order to take advantage of React 18's concurrent features you'll need to use the new root API for client rendering.
    </p>
</div>

<div className='code-div-container'>
    <h3> Coding Example </h3>
    <div className='code-div'>
    <code>
    <pre>   
        {`  
            // Before
            import ReactDOM from 'react-dom';
            ReactDOM.render(<App />, document.getElementById('root'));
            
            // After
            import ReactDOM from 'react-dom/client';
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<App />);
        `}
    </pre>
</code>
    </div>
</div>
</div>,


<div className='content-container'>
<h2> What is ES6? </h2>
<div className="ans-div">
    <p>
        ES6 stands for ECMAScript 6.

        ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.   
    </p>
    <h3> Why Should I Learn ES6? </h3>
    <p>
        React uses ES6, and you should be familiar with some of the new features like:
    </p>
    <ul>
        <li>Classes</li>
        <li>Arrow Functions</li>
        <li>Variables (let, const, var)</li>
        <li>Array Methods like .map()</li>
        <li>Destructuring</li>
        <li>Modules</li>
        <li>Ternary Operator</li>
        <li>Spread Operator</li>


    </ul>
</div>

<div className='code-div-container'>
    <h3> Coding Example </h3>
    <div className='code-div'>
    <code>
    <pre>   
        {`  
        class Car {
            constructor(name) {
            this.brand = name;
            }
        }
        `}
    </pre>
</code>
    </div>
</div>
</div>






    ];
