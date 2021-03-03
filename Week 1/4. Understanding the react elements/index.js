//import modules
import {  } from "module";
//export modules 
export default modules;
export function modules(){}
export const modules=()=>{}

//class
class className {

}

class className extends{

}

//react render
render(){
 return{

 }
}

//components name has to be in capital letter
export class ComponentName{}
export function ComponentName(props){}

//function name isn't case sensitive
// you can use as similar to core javascript

export const functionName=()=>{

}
function Name(){}

//events has to be in camelcasing and function must be curly bracket not string("")
'<button onClick={functionName}/>'

//class name has to be given with className attr rather than simply class
//class is a keyword in javascript and JSX is an extension of javascript. 
//That's the principal reason why React uses className instead of class.
'<div className="container"></div>'

// In React, all DOM properties and attributes
//  (including event handlers) should be camelCased. 
//  For example, the HTML attribute tabindex corresponds to the attribute tabIndex 
//  in React. The exception is aria-* and data-* attributes, which should be 
//  lowercased. For example, you can keep aria-label as aria-label.

// htmlFor
// Since for is a reserved word in JavaScript, React elements use htmlFor instead.

//inline-styling is different
// Object must be used for style element 
`<div style={{ height: 10 }}>
  Hello World!
</div>`


//string interpolation

import React from 'react';

export function BuyProductsButton({ count, buy }) {
  return (
    <button
      title={`Buy ${count} products`}
      onClick={buy}
    >
      Buy {count} products
    </button>
  );
}