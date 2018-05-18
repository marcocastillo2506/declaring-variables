var myVar = "A global variable";

function grandparent() {

  function parent() {

    function child() {
      //This will console.log global variable
      console.log(myVar);
    }
    child();

  }
  parent();

}
grandparent():

/*Try declaring same variable with inside of
functions to see what result you would get.

Example :
********************************************
var myVar = "A global variable";

function grandparent() {
var myVar = "local variable to grandparent";

  function parent() {

    function child() {
      //This will console.log global variable
      console.log(myVar);
    }
    child();

  }
  parent();

}
grandparent():
**************************************************
After trying out varivble inside diffrent functions
you will notice that the result of console.log will
be which ever one is closest to it's scope.
