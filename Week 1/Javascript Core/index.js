//spread

let array=[1,2,3,4];
let newArray=[...array,5,6,7];
let array=[{id:1,name:"dsd"},{id:2,name:"sds"},];

let object={id:1,name:"dsd"};
let newObject={...object,name:"fdfdf"};


// destructing

let object={id:1,name:"dsd"};
object.id;
object["id"];
const {id=21,name="dsd"}=object;


//modules
//constant.js
 const fss =()=>{
 return false;
}
 const asd =()=>{
    return false;
   }

export default function ds(){
    return '';
}

export {fss,asd};

//index.js
import * as Function from './con'
import {fss} from './constant.js'
import sghsg from './constant.js'

Function.fss;
Function.asd;

// String interpolation
let lastName="Rug";
let name=`Niyon ${lastName}`
let name='Niyon '+lastName;
