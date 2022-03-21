// import React from "react";
// import ReactDOM from "react-dom";

const rootElement = document.getElementById('root');
// const newElement = document.createElement('div');
// newElement.textContent="haiii";
// newElement.setAttribute('class', "container");
// rootElement.append(newElement);

// const newElement= React.createElement('div', null, 'Hello');
const newElement= <div><h2>Hello World</h2></div>
ReactDOM.render(newElement, rootElement);
// console.log(newElement);
