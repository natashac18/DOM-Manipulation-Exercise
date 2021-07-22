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

// Question 3

let newDiv = document.createElement("div");
newDiv.style.backgroundColor="pink";
newDiv.style.border="2px solid black";

let heading1 = document.createElement("h1");
heading1.textContent="I'm in a div";

let pText = document.createElement("p");
pText.textContent= "ME TOO!"

newDiv.appendChild(heading1);
newDiv.appendChild(pText);

container.appendChild(newDiv);
