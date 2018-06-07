// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)
/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/
// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.
/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.
Examples:

    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1

    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/


function Person(fN, lN, fC, fNum) {
  this.fN = fN;
  this.lN = lN;
  this.fC = fC;
  this.fNum = fNum;
  this.family = [];
}

Person.prototype.fullName = function() {
  return this.fN + ' ' + this.lN;
}

Person.prototype.addToFamily = function(someone) {
  if(someone instanceof Person && this.family.indexOf(person) === -1) {
      this.family.push(someone);
  }
  return this.family.length;
}

var person = new Person("Elie", "Schoppik", "purple", 34);
var anotherPerson = new Person();
person.addToFamily(anotherPerson);
