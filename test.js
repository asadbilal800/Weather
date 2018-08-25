var request =  require('request');
var prompt =  require('prompt');
var sub_moduele=  require("./testsub.js");


var asad = {

  function1 : () => {console.log('jani wtf');},
  function2 : () => { console.log('jani wtf 2');}
};


asad.function1().function2();
