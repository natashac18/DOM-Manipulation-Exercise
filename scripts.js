// Question 1

let container = document.getElementById("container");
let elementOne = document.createElement("p");
elementOne.style.color= "red";
elementOne.textContent= "Hey, I'm red!";
container.appendChild(elementOne);

// Question 2

let elementTwo = document.createElement("h3");
elementTwo.style.color="blue";
// Another method of adding text
let words = document.createTextNode("I'm a blue h3!");
elementTwo.appendChild(words);
container.appendChild(elementTwo);

