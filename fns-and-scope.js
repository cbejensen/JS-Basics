//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code here

function isTyler(name) {
  if(name === 'Tyler'){
    return true;
  } else {
    return false;
  }
}

console.log(isTyler(name));


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

  //Code Here

var getName = function(){
  var name = prompt("What is your name?");
  return name;
}

console.log(getName());

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome(){
    alert("Welcome, " + getName() + "!");
}
console.log(welcome());

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

  //Arguments are passed in to the function
  //Paramters are declared in the functon before knowing what the argument will be
  

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

  //false
  //0
  //""
  //null
  //undefined
  //NaN

  //You can use an if statement to check if something is falsy or truthy

//Next Problem



//Create a function called myName that returns your name

  //Code Here
function myName(name){
    return name;
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

var newMyName = myName("Christian");

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

function outerFn() {
    return function() {
        var name = prompt("Your name please!");
        return name;
    }
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();

//Now invoke innerFn.
alert(innerFn());