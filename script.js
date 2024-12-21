// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];



const body=document.querySelector("body");
function printPersons(persons){
persons.forEach(person => {
  const element=document.createElement("p");
  element.textContent=person.name;
  body.appendChild(element);
});


};
printPersons(persons);
