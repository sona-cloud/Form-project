// 1. Change the text of the heading (h1) element to "Text Changed!".
const header = document.getElementById("header");
header.textContent = "hello world";

// 2. Change the text color of all paragraphs with the class "text" to blue.
const paragraphs = document.querySelectorAll(".text");
paragraphs.forEach(paragraph => {
  paragraph.style.color = "blue";
});

// 3. Log the text content of each li element to the console.
const listItems = document.querySelectorAll(".list-item");
listItems.forEach(item => {
  console.log(item.textContent);
});

// 4. Change the background color of the first li element to yellow.
listItems[0].style.backgroundC;

// 5. Change the text color of all li elements to green.
listItems.forEach(item => {
  item.style.color = "green";
});