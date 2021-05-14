// document.getElementById('count-el').innerText = 31;
console.log('It is working Manu!');
// Initialize the count as 0 --> Done!
// Listen for clicks on the increment button --> Done!
// Increment the count variable when the button is clicked (log it out) --> Done!
// Change the count-el in the HTML to reflect the new count --> Done!
// Grab the save-el paragraph and store it in a variable called saveEl
// Create a variable that contains both the count and the dash separator, i.e. "12 - "
// Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

let count = 0;

function increment() {
   count += 1;
   countEl.textContent = count;
}

function save() {
   let counting = ` ${count} - `;
   saveEl.textContent += counting;
   countEl.textContent = 0;
   count = 0;
}
