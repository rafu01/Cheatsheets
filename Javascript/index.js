//array in js
let a = [1,2,3,0,'',"H", true];
// === datatype and value , == only value
//function in js
function count(a){
    let count =0;
    for(let v of a)
        if(v)
            count++;
    return count;
}
//declaring a object
//even functions are object in javascript
let movie = {
    title: "Homecoming",
    director: "ME",
    rating: 7.6,
    point : 15
};
//for in to show properties of object
//for of to access element in array
//transfer properties of object to array using
function showProperties(m){
    for(let p in m){
        if(typeof m[p]=='string')
            console.log(m[p]);
    }
}
//transfer properties of object to array using Object.keys
let circle2 = {
    rad :1,
    draw(){
        console.log('drawing a circle');
    }
};
for(let key of Object.keys(circle2))
    console.log(circle2[key]);
//using  constructor 1st type
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('3123');
        }
    };
}
//2nd way to construct object
function Circle(rad){ 
    this.rad = rad;
    this.draw = function(){
        this.rad++;
        console.log(this.rad);
    }
}

//for in for object , for of for array
//copying object
let circle = {
    radius: 1,
};


//1st way using for in
let another = {};
for(let key in circle)
    another[key] = circle[key];
console.log(another,' first');
//2nd way using assign
let n = Object.assign({}, circle);
console.log(n,' 2nd');
//adding extra key to it
let n1 = Object.assign({
    ra:1
}, circle)
console.log(n1,' 3rd');
//3rd way
let n2 = {...circle};
console.log(n2,' 4th');


//Math functions
//Math.random provides different random numbers
//Math.floor
//use math formula to generate numbers within range
function randomWithinRange(min, max){
    return Math.random()*(max-min)+min;
}
console.log(Math.floor(randomWithinRange(11,20)));
//Math.round --> 1.9 returns 2
//Math.max(1,2,3,4...n) will return highest value


//JS has two types of string --> primitive and object
let string1 = 'Hi';
let string2 = new String('Hello');
typeof(string1); //outputs string
typeof(string2); //outputs object


//string function
// string1.length
//string1[0]
//string1.includes('H'); case sensitive returns boolean
//string1.startsWith('i'); endsWith();
//indexOf('i');
//replace('H','i'); --> returns new string iH
//string1.trim(); --> gets rid of whitespace in begin and ending 
//trimLeft() --> gets rid of whitespace in the begin
let te = `this is 'helpful' and
this is another line same as code in output`;


//putting variables in this string
let nu = 22;
let te2 = `this is my age ${nu}`;

//date object
let now = new Date();
console.log(now);
// date format: year, month, day, hour, min;
// 0 = january, so 4 here is may
let d1 = new Date(2020, 4, 11, 9, 0);
console.log(d1);
d1.setFullYear(2018); // setting year in d1 object
console.log(d1);

//Arrays
// const varaible means can't change value
// const onject means can't change the object but we can change the elements of it
const arra = [3,4];
//adding to array
//push() --> back of the array
//unshift() --> adding element in front
//splice(index, how many elements to del, element to add) --> adding in middle of array

arra.push(5,6);
arra.unshift(1,2);
arra.splice(2,0,10);

//finding in array primitive type

//indexOf() returns -1 if it doesn't exists;
//lastIndexOf();

//finding reference type (Object) in array 

let course = [{id: 1, name:`a`},{id:2, name:`b`}];
console.log(course.includes({id:1, name:`a`})); // return false because
//this basically creates a new obj and searches thus gives false
//find for array searches first element that satisfies the condition
//we pass a function as parameter
//here element is every object/ element of array
//returns the 1st element/ object if it finds it
let cc = course.find(function(element){
   return element.id===1;
});
console.log(cc);
// use arrow function when you want to pass function as parameter
//here element is the parameter for the function, returns element 
let cc1 = course.find(element=> element.id===1);
console.log(cc1);
//for multiple parameter in function use parenthesis
//let cc2 = course.find((element, data) ==> )
//for empty parameters use empty parenthesis
// let cc3 = course.find(()==>)


//removing elements from array
let numb = [1,2,3,4];
numb.pop(); // pops last element
numb.shift(); // removes first element
numb.splice(2, 2) // splice(start index, number of elements to remove from starting index)
// emptying an array
//numb = [] or numb.length = 0
//numb.splice(0, numb.length);


//slice and combine array
let numb2 = [5,6,7,8];
numb.concat(numb2); // 1,2,3,4,5,6,7,8
numb.slice(2, 4)  // slice(starting index, ending index+1) --> 3,4
numb.slice(2) // 3 4 5 6 7 8 only starting index

let fir = [{id:1}];
fir.concat(numb2); // id:1, 5 6 7 8 
//using spread operator to combine
let combined = [...fir, 'a',...numb2]; //id:1, 'a', 5 6 7 8
//copying elements in an array
let copy = [...fir];
//looping array using forEach()
numb2.forEach((element, index)=> console.log(index, element)); // here index auto prints index 
//joining and slicing
let sj = numb2.join(','); // returns a string after concating each element with ','
console.log(sj);
let msg = 'this is my message';
let parts = msg.split(' '); // returns--> ['this', 'is', 'my','message']
console.log(parts); 
console.log(parts.join(' ')); // reverse engineering turning it to prev string
let nn = [1,2,5,2,4,7,4,3,9];
nn.sort();
nn.reverse();
console.log(nn);
let coursess = [{id:1,name:'nodejs'}, {id:2, name:'js'}, {id:3, name:'p'}];
//sort according to name
//this will sort according to ASCII code
//use toLowerCase , toUpperCase
//changing sort function to sort according to element of object
coursess.sort(function(a,b){
    if(a.name<b.name) return -1;
    if(a.name>b.name) return 1;
    return 0;
});
//every and some
let ap = [-1,1,2,3,4,5,6];
ap.every(function(elem){
    return elem>=0;
});
//checking if all element is positive, it'll return boolean false
//so checking if all element satisfies the condition or not
ap.some(function(elem){
    return elem>=0;
});
// will check if one element is satisfying the condition or not
//filtering array: removing element from array according to condition
//filter can take 2 paramters: value, index
const aap=ap.filter(function(element){
    return element>=0;
});
console.log(aap); //1,2,3,4,5,6
// reduce method: reduce(callback function, accumilative initial)
//sum of all elements in array
let r =[1,2,3,4];
const sum1 = r.reduce((accumilator, currentvalue)=>accumilator+currentvalue);
//reduce the returned number is added to accumilator if condition is met
// it's used to caclulate some kind of sum. eg: occurance
// getting one value from a array use reduce method
console.log(sum1); //10;

//functions:
//Hoisting: js writes its functions in the top of code
//if you use let c = function(){} and call c() before declaration it will not work
//but if you draw(){} and call before declaration, it will work

//number+undefined = NaN (not a number)
//arguments is a iterator of arguments for every function 
function sum(){
    let total =0;
    for(let v of arguments)
        total+=v;
    return total;
}
sum(4,2,1); // 7

//rest operator Myfunction(...args) turns all my arguments to an array
//looks similar to spread operator but not the same
function sm(...args){
    console.log(args);
}
sm(1,2,4,21,4); // [1,2,4,21,4]
//using rest to calculate array
function smaa(...args){
    return args.reduce((a,v)=> a+v);
}
console.log(smaa(2,4,6,4)); //16
//using || to set default parameters
function interest(principal, rate, year){ 
    rate = rate || 3.5; // if rate not provided it will take 3.5 as default
    year = year || 1;
    return principal*(rate/100)*year;
}
function interest2(prinicpal, rate = 3.5, year =1){
    //works as well
}
//getter and setter are not function but properties
let person1 = {
    firstName : `N`,
    lastName : `R`,
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(val) {
        let part = val.split(' ');
        this.firstName = part[0];
        this.lastName = part[1];
    }
};

// returns fullname
console.log(person1.fullName);
console.log(person1);
person1.fullName = `naye ams` //sets fullname
console.log(person1);

//try catch 
//use Error Exception
// try{

// }
// catch(e){
//     console.log(e);
// }

//let vs var
//var can be accessed from outside it's scope it is limited to it's function

// this keyword
//if it is used inside a method (function inside a object) then it refers to that object
//if it is used inside a function it refers to global object which is the window object by default for browser

const video = {
    title: `s`,
    tags : [`a`,`b`,`c`],
    show(){
        this.tags.forEach(function(element){
            console.log(this,element); // this refers to windo bcz it's inside a call back function name forEach
        });
    }
};
//using self and saving it before
const video1 = {
    title: `s`,
    tags : [`a`,`b`,`c`],
    show(){
        const self = this; // saving this in a const
        this.tags.forEach(function(element){
            console.log(self,element); // this refers to windo bcz it's inside a call back function name forEach
        });
    }
};
//technique 2
//using call or apply or bind. bind sets the object permanently
function sep(){
    console.log(this);
}
sep.call({ name: `h`}); // call or apply method takes object as argument is sets this keyword to that object;
const video2 = {
    title: `s`,
    tags : [`a`,`b`,`c`],
    show(){
        this.tags.forEach(function(element){
            console.log(self,element); // this refers to windo bcz it's inside a call back function name forEach
        }.call(this)); // here this is video2
    }
};
// or use arrow function so it won't access window object
const video3 = {
    title: `s`,
    tags : [`a`,`b`,`c`],
    show(){
        this.tags.forEach(element=>{
        console.log(self,element)
        });
    }
};
//Array.isArray(array)// returns true if array is an array
//exercise

function arrayFromRange(start, end){
    let a = [];
    for(let i=start;i<=end;i++)
        a.push(i);
    return a;
}
let asp = arrayFromRange(4,10);
console.log(asp);
let aspp = [1,2,3,4,5,6,1,2];
function excludeArray(array, exclude){
    let a =[];
    for(let i of array)
        if(!exclude.includes(i))
            a.push(i);
    return a;
}
let aaspp = excludeArray(aspp, [1,2,3]);
console.log(aaspp);

function sum(limit){
    let sus=0;
    for(let i=1;i<=limit;i++){
        if(i%3==0 ||  i%5==0)
            sus+=i;
    }
    return sus;
}
function star(n){
    for(let i=1;i<=n;i++){
        let pat = '';
        for(let j=1;j<=i;j++){
            pat+='*';
        }
        console.log(pat);
    }
}
//prime numbers 
function prime(limit){
    let count;
    for(let i=1;i<=limit;i++){
        count =0;
        for(let j=1;j<=i;j++){
            if(i%j==0)
                count++;
        }
        if(count==2)
            console.log(i);
    }
}
let address = {
    street: `puran`, city:`dhaka`, zipcode: 1100 
};
function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}
showAddress(address);
function createAddress(){
    return {
        street: `purana`, city: `dha`, zip: 1100
    }
}
function Address(){
    this.street = `puranaaa`;
    this.city =`dhaka`;
    this.zip= 1100;
}
let add1 = createAddress();
console.log(add1);
let add2 = new Address();
console.log(add2);

let blogPost = {
    comment:[{author: `nice`, time:8},{author:`nais`, time: 4}]
};
console.log(blogPost);
let aw = [1,2,7,1,9,0,4,6];
let pw = aw.reduce((a,i)=> Math.max(a,i));
console.log(pw);
let movies = [
    {title:`a`, year:2019, rating:6.7},
    {title:`b`, year:2010, rating:7.7},
    {title:`c`, year:2010, rating:6.3},
    {title:`d`, year:2010, rating:4.5},
    {title:`e`, year:2042, rating:9.3},
];
//filtering
let titles =movies.filter(v=> v.year===2010 && v.rating>4.0)
.sort((a,b) => a.rating-b.rating)
.reverse()
.map(m=> m.title); 
console.log(titles);
function smsa(...items){
    if(Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a,v)=> a+v);
}
console.log(smsa([1,2,3]));
