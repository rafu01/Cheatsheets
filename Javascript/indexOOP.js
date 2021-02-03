//2 ways declaring a function 
//assign to a variable: let f = function()
//or function f()
function creatCircle(radius){
    return {
        radius,
        draw(){
            console.log(`draw`);
        }
    }
};

function Circle(radius){
    this.radius = radius;
    this.draw = function(){ // this is assigning function to a variable 
        console.log(`made with constructor`);
    }
}
// every Object, variable is made with default constructor
// strings are made with String(), int are made with Numbers()
// functions are also objects and these are made with Function() constructor
function add(number){
    number++;
}
let number = 10;
add(number);
console.log(number); //10 bcz number is a value type not reference
//adding property to object
let circle1 = new Circle(5);
circle1.location = {x:2,y:3};
//or use bracket notation
circle1[`loc`]= {x:2};

//print only variables not methods
//Object.keys(circle) turns all keys to array
for(let key in circle1){
    if(typeof key !== 'function')
        console.log(key, circle1[key]);
}
//abstraction
//for making a property private just use let not this. keyword
function Circle2(radius){
    this.radius = radius; // this is a public property
    let area = radius; // this is a private property
    this.compute = function(){ //this is a public property
        draw();
    };
    let draw = function(){ // this i a private property
        
    };

// getter and setter for constructor
//defining a property (object, name of property, object with key value pair where key is get, set)
    Object.defineProperty(this, `area`, {
        get: function(){
            return area;
        },
        set: function(val){
            area = val;
        }
    });
}
let circle2 = new Circle2(10);
console.log(circle2.area);
circle2.area = 5;
console.log(circle2.area);
// getters and setters for object
let rc = {
    rad: 2,
    get radius(){
        return this.rad;
    },
    set radius(val){
        this.rad = val;
    }
};
rc.radius = 3;
console.log(rc.radius);

//prototype in constructor function
function Cir(radius){
    this.radius = radius;
}
//adding properties to prototype outside the constructor using prototype
Cir.prototype.draw = function(){
    console.log(`drawing Cir`);
};
//overriding a built-in function 
//use prototype when you need to use a method multiple times in different object
//prototype == parent class
Cir.prototype.toString = function(){
    return `this is the radius ${this.radius}`;
};
let ccir = new Cir(5);
//toString isn't called when object is printed like in java
console.log(ccir.toString()); 
//Object.keys() only returns general properties not prototype properties
//but for in loop returns all properties (prototype+general)

// inherit from parent object
function Shape(color){
    this.color = color;
}
Shape.prototype.duplicate = function(){
    console.log(`duplicate`);
}
function Sqaure(x){
    this.x = x;
    this.area = function(){
        console.log(this.x*this.x);
    }
}
//create new object and change prototype of child class
//Object.create returns a object 
Circle.prototype = Object.create(Shape.prototype); //changing proto of circle to shape from object
Sqaure.prototype = Object.create(Shape.prototype);
//this method does not include the general methods of parent to child for that use
Circle.prototype = new Shape();
Sqaure.prototype = new Shape();
let sq = new Sqaure(10); // now sq has duplicate function also
// but this method changes the constructor to parent prototype
// so also change the constructor after changing prototype
Circle.prototype.constructor = Circle;
Sqaure.prototype.constructor = Sqaure;
//calling parent constructor, super
function Circle3(radius, color){
    Shape.call(this, color); // super this refers to circle object
    this.radius = radius;
}
Circle3.prototype = Object.create(Shape.prototype);
let c3 = new Circle3(10, `red`);

//making an extend function
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
function Rect(){

}
extend(Rect,Shape); //extending from Shape
let rect = new Rect();
//method overriding
Circle3.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this); //calling both parent,child method
    console.log(`dppp`);
}
//Mixins
//first make objects (feature) then assign them to your object as requirement
const canEat = { // feature object
    eat: function(){
        this.hunger--;
        console.log(`can eat`);
    }
};
const canWalk = {
    walk: function(){
        console.log(`walking`);
    }
};
Object.assign({}, canEat, canWalk); // assigning these 2 to {} empty object;
function Person(){

}
Object.assign(Person.prototype, canEat, canWalk); //adding these 2 to prototype
let per1 = new Person();
//creating function for mixin
function mixin(target, ...args){ //rest operator bcz we don't know how many args, it turns all args to array
    Object.assign(target.prototype, ...args); // this is the spread operator array to individuals object
}
function Goldfish(){

}
mixin(Goldfish,canEat);
let goldie = new Goldfish();

//classes was introduced in ES6
// this.name is public by default 
// every property under constructor is it's own property and other things written outside goes to prototype of that object
//static methods can only be called from Class itself
class Patient{
    constructor(name){
        this.name = name;
        let c=0;
    }
    wait(){
        console.log(`patient is waiting`);
    }
    static watch(){
        console.log(`this is a static method`);
    }
}
let p1 = new Patient(`patient 1`);
// symbol is a primitive type like int
// symbol = ne unique identity
// symbol can be used to make property private but don't
// use WeakMap these are basically map keys are object and values are element
const _name = new WeakMap(); 
const _move = new WeakMap(); // convention for private properties: _name
const _move2 = new WeakMap();
// weakmap has get and set method by default
class Patient2{
    constructor(name){
        _name.set(this, name); // now this _name is private
        _move.set(this, function(){ // for private method/ function
            console.log(`move`, this); // 'this' is inside a function and for classes it is undefined not window object
        });
        _move2.set(this,()=> {
            console.log(`move2`, this); // using arrow function 'this' will point the Object
        });
    }
    getName(){ // to access private property from outside.
        return _name.get(this);
    }
    // to access it like a property
    get name(){
        return _name.get(this); // this will access it like a property
    }
    set name(name){
        _name.set(this, name);
    }
    nameOfP(){
        console.log(_name.get(this)); 
    }
    print(){
        console.log(_move.get(this)()); // calling private method, empty () is for calling the method
        console.log(_move2.get(this)());
    }
}
const pt2 = new Patient2(`as`);
//inheritance, method overriding in ES6 -> same as java
class Shape2{
    constructor(rad){
        this.rad = rad;
    }
    move(){
        console.log(`move`);
    }
}
class Circle4 extends Shape2{
    constructor(rad, color){
        super(rad); // calling super and passing the parameter
        this.color = color; 
    }
    draw(){
        console.log(`draw`);
    }
    move(){ //overrides the method works like java
        super.move(); //to use parents move method (not mandatory)
        console.log(`move the circle`);
    }
}
let c44 = new Circle4(); // it has both draw, move method
//implementing Stack
let _item = new WeakMap();
class Stack{
    constructor(){
        _item.set(this,[]);
    }
    push(elem){
        _item.get(this).push(elem); // this push is the array's default push
    }
    pop(){
        if(_item.get(this).length===0)
            throw new Error(`stack is empty`);
        else 
            return _item.get(this).pop();
    }
}

// Modules
// Module = files. we create different file for a project each file is called module
// Module can be used in other projects
// we can access private prop if we are in the same file by doing  _item.get(st) (st= name of stakc object) 
// that's why we write class and weakmaps in separate files and import only the class
// import {Circle} from './circle';

//Babel is transpiler which turns code to ES5 and makes it readable for all browser
// npm = node package manager it is used to install 3rd party library

// excercise 
function StopWatch(){
    let start, stop, running, duration =0;
    this.start = function(){
        if(running)
            throw new Error(`Already running`);
        running = true;
        start = new Date();
    };
    this.stop = function(){
        if(!running)
            throw new Error(`Not started yet`);
        running = false;
        stop = new Date();
        const time = (stop.getTime() - start.getTime()) /1000;
        duration = time;
    }
    this.reset = function(){
        duration =0;
        start = null;
        stop = null;
        running = false;
    }
    Object.defineProperty(this, `duration`, {
        get: function(){
            return duration;
        }
    });
}
let st = new StopWatch();

function HtmlElement(){
    this.click= function(){
        console.log(`click`);
    }
};
HtmlElement.prototype.focus = function(){
    console.log(`focus`);
}
function HtmlSelectElement(array=[]){
    this.array= array;
    this.addItem = function(elem){
        this.array.push(elem);
    }
    this.removeItem = function(elem){
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]==elem){
                this.array.splice(i,1);
                break;
            }
        }
    }
}
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
//cheat sheet provided from codewithmosh
// cheat sheet on objects
// console.log(`cheatsheet from codewithmosh`);
// // The simplest way to create an object is using an object literal 
// const circle = { 
//     radius: 1, 
//     draw: function() {}
//  }; 
    
//  // To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 
 
//  // Factory function 
//  function createCircle(radius) { 
//     return {
//        radius, 
//        draw: function() {}
//     } 
//  } 
 
//  // Constructor function 
//  function Circle(radius) { 
//      this.radius = radius; 
//      this.draw = function() {}
//  } 
     
//  // Every object has a "constructor" property which returns the function that was used to construct or create that object. 
//  const z = {};
//  z.constructor; // returns Object() 
    
//  // In JavaScript, functions are objects. They have properties and methods. 
//  Circle.name; 
//  Circle.length;
//  Circle.constructor; // returns Function()
//  Circle.call({}, 1); // to call the Circle function 
//  Circle.apply({}, [1]);
 
//  // Value types are copied by their value, reference types are copied by their reference. 
//  // Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
//  // Reference types are: Object, Function and Array 
    
//  // JavaScript objects are dynamic. You can add/remove properties: 
//  circle.location = {};
//  circle['location'] = {};
                       
//  delete circle.location; 
                       
//  // To enumerate the members in an object: 
//  for (let key in circle) console.log(key, circle[key]);
 
//  Object.keys(circle); 
                       
//  // To see if an object has a given property
//  if ('location' in circle)
                       
//  // Abstraction means hiding the complexity/details and showing only the essentials. 
//  // We can hide the details by using private members. Replace "this" with "let". 

//  function Circle(radius) { 
//     // Public member 
//     this.radius = radius; 
 
//     // Private member                       
//     let defaultLocation = {};                      
//  }                       
 
//  // To define a getter/setter, use Object.defineProperty():
//  Object.defineProperty(this, 'defaultLocation', {
//      get: function() { return defaultLocation; },
//      set: function(value) { defaultLocation = value; }
//  });
// // cheatsheet on prototypes
// // Every object (except the root object) has a prototype (parent). 
// // To get the prototype of an object:
// let obj = new Circle(5);
// Object.getPrototypeOf(obj); 

// // In Chrome, you can inspect "__proto__" property. But you should 
// // not use that in the code. 

// // To get the attributes of a property:
// Object.getOwnPropertyDescriptor(obj, 'propertyName');

// // To set the attributes for a property:
// Object.defineProperty(obj, 'propertyName', {
//     configurable: false,    // cannot be deleted
//     writable: false,
//     enumerable: false
// });

// // Constructors have a "prototype" property. It returns the object 
// // that will be used as the prototype for objects created by the constructor. 
// Object.prototype === Object.getPrototypeOf({})
// Array.prototype === Object.getPrototypeOf([])

// // All objects created with the same constructor will have the same prototype. 
// // A single instance of this prototype will be stored in the memory. 
// const x = {};
// const y = {};
// Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// // Any changes to the prototype will be immediately visible to all objects 
// // referencing this prototype. 

// // When dealing with large number of objects, it's better to put their
// // methods on their prototype. This way, a single instance of the methods
// // will be in the memory. 
// Circle.prototype.draw = function() {}

// // To get the own/instance properties:
// Object.keys(obj);

// // To get all the properties (own + prototype): 
// for (let key in obj) {}
