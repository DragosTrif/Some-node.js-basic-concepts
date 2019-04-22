var firstname = 'Jane';

// beacuse this limits scopes vars
// it behave like a module
(function(lastname) {
  var firstname = 'John';
  console.log(firstname);
  console.log(lastname);
}('Doe'));

console.log(firstname);
