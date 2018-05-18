var myVar = "A global variable";

function myFunction(){
  var myVar = "A local variable";
}
myFunction():

console.log(myVar);

//This will go head and return global variable

/*If you were to console.log variable inside the myFunction
it will go ahead and return local variable
example:
****************************************
var myVar = "A global variable";

function myFunction(){
  var myVar = "A local variable";
  console.log(myVar);
}
myFunction():
****************************************
