const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");


//Create new variable and assign it to an empty object  
const learning = {};

//Create a property of your learning object called topic with a value of "JS"
learning.topic = "JS";

//Create another object property named learningGoals and assign it an array that contains four learning goals as elements, like “Build JS Programs.” 
learning.learningGoals = ["Build JS Programs", "Become a Web Developer", "Make a great portfolio", "Have fun with this!"];

//Create an object property called category with a value of "Front End Development"
learning.category = "Front End Development";

//Create another object property called topicImportance and give it a value of "High"
learning.topicImportance = "High";

//Log out the learning object in the console to check for the four properties
//console.log(learning);

//After console.log(), change the value of the topic property to “JavaScript”
learning.topic = "JavaScript";

//On the next line, remove the second item from the learningGoals property array. Hint: Use splice()
learning.learningGoals.splice(1,1);

//Log out the learning object to make sure your changes worked.
console.log(learning);

//Use the innerText property to set the value of the topicElement variable (see the top of the script.js file) to the string: “I’m learning <topic>.” Substitute <topic> for the value of the topic property using template literals and dot notation.
topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;

//Remove the class “hide” that’s given to the topicElement. Reload the browser window to see the changes.
topicElement.classList.remove("hide");

//Set the innerText of the countElement to the string “I have <number> learning goals.” Substitute <number> with the length of the learningGoals property array.
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`

//Remove the class “hide” that’s given to countElement. Reload the browser window to see the changes.
countElement.classList.remove("hide");