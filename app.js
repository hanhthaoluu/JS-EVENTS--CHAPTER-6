'use strict';
//  TRADITIONAL DOM EVENT HANDLERS
element.onevent = functionName;
//EVENT LISTENERS
element.addEventListener('event', functionName[,Boolean]);
//USING PARAMETERS WITH EVENT HANDLERS AND LISTENERS
el.addEventListener('blur',function(){checkUsername(5);}, false);



//  using TRADITIONAL DOM EVENT HANDLERS
//element.onevent = functionName;
//all modern browers understand this way of creating an event handler, but you can only attach one function to eachy event handler

//declare function
function checkUsername() {
  //get feedback element
  var elMsg = document.getElementById('feedback');
  //if username is too short
  if (this.value.length <5) {
    //set msg
    elMsg.textContent = 'Username must be 5 characters or more';
    //otherwise
  } else {
    //clear message
    elMsg.textContent = ' ';
  }
}
//get username input
var elUsername = document.getElementById('username');
//when it loses focus call checkusername()
elUsername.onblur = checkUsername;


//EVENT LISTENERS
//event listeners are a more recent approach to handling events. They can deal with more than one function at a time but they are not supported in older browsers

//bind an event to an element using an event listeners
element.addEventListener('event', functionName [, Boolean]);
//element = DOM element node to target
//


function checkUsername () {
  var elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    elMsg.textContent = '';
  }
}
//The DOM element node(s) is stored in a variable.
//Here the text input (whose id sttribute has a value of username) is placed nto a variable called elUsername
//get username input
  var elUsername = document.getElementById('username');

//when it loses focus call checkUsername()

elUsername.addEventListener('blur', checkUsername, false);
//.addEventListener() method takes 3 parameters
//1. the event you want it to listen for. In this case4, the blur event
//2. the code you want it to run when the event fire.  In this case, it is the checkUsername() function
//3.a boolean indicates how eve3nts flow.  This usually set to false.


//USING PARAMETERS WITH EVENT HANDLERS AND LISTENERS
el.addEventListener('blur', function(){checkUsername(5);}, false);
//.addEventListener() method
//event name = 'blur'
//function(){} The anonymous function is used as the second argument. It wraps around the named function.
//checkUsername(5); = the named function inclues parentheses containing the parameter
//false = event flow Boolean
//EVENT FLOW = the order in which the events fire, events flow in 2 directions: event bubbling and event capturing
//EVENT BUBBLING =  The event starts at the most specific node and flows outwards to the least specific node. This is the default type of event flow with very wide browser support.
//FALSE = BUBBLING PHASE (false is often a default choice bc capturing was not supported in IE8 or earlier)
//; = end of statement

//get username input
var elUsername = document.getElementById('username');
//get feedback element
var elMsg = document.getElementById('feedback');
//declare function
function checkUsername(minlength) {
  //if username too short
  if (elUsername.value.length < minLength) {
    //set the error message
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
    //otherwise
  } else {
    //clear msg
    elMsg.innerHTML = '';
  }
}

//when it loses focus
//pass arguments here
//the value that is passed into the checkUsername() function is used in the conditional statement to check if the name is long enough, and provide feedback if the username is too short.
elUsername.addEventListener('blur', function(){checkUsername(5);}, false);
