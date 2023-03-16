console.log("Difference between var, let and const");
//1. var is globally scoped where as let and const are block scoped
//2. var can be updated and re-declared within its scope
//3. let can be updated but can't be redeclared
//4. const can neither be updated nor be redeclared
//5. var variables are initialized with undifined whereas let and const variables are not initialized
//6. const must be initialized during declaration unlike var and let


//Here we can clearly see that let is block scoped
let a = "Sudip"
{
  let a = "Roy"
  console.log(a)
}
console.log(a)
console.log("")


//Here we can see that var is globally scoped
var b = "Sumit"
{
  var b = "Gupta"
  console.log(b);
}
console.log(b)
console.log("")


//constants can not be updated or re declared.
const lang = "JavaScript"
console.log(lang)
lang = "Sudip" //this will throw an error