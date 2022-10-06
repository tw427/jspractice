let myModule = (function() {
  'use strict';

  let _privateProperty = 'Hello World';
  let publicProperty = 'I am a public property';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty
  };

})();

myModule.publicMethod();
console.log(myModule.publicProperty);
console.log(myModule._privateProperty);
myModule._privateMethod();