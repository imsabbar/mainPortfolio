
// text animation for Greeting
const myGreetingElement = document.querySelector('.greeting');
const myGreetingText = myGreetingElement.textContent;
const greetingSplitText = myGreetingText.split("");

// get Name, Field and Quote
const myNameElement = document.querySelector('.name');
const myNameText = myNameElement.textContent;
const nameSplitText = myNameText.split("");

const myFieldElement = document.querySelector('.field');
const myFieldText = myFieldElement.textContent;
const fieldSplitText = myFieldText.split("");

const myQuoteElement = document.querySelector('.quote');
const myQuoteText = myQuoteElement.textContent;
const quoteSplitText = myQuoteText.split("");


myGreetingElement.textContent = "";
myNameElement.textContent = "";
myFieldElement.textContent = "";
myQuoteElement.textContent = "";


for(let i=0 ; i<2 ; i++)
  myGreetingElement.innerHTML += "<span class='hand-greeting'>" +greetingSplitText[i]+ "</span>";

for(let i=2 ; i < greetingSplitText.length ; i++) 
  myGreetingElement.innerHTML += "<span>" +greetingSplitText[i]+ "</span>";




for(let i=0 ; i<3 ; i++)
  myNameElement.innerHTML += "<span>" +nameSplitText[i]+ "</span>";

for(let i=3 ; i < nameSplitText.length ; i++) 
  myNameElement.innerHTML += "<span class='second'>" +nameSplitText[i]+ "</span>";




for(let i=0 ; i<10 ; i++)
  myFieldElement.innerHTML += "<span>" +fieldSplitText[i]+ "</span>";

for(let i=10 ; i < fieldSplitText.length ; i++) 
  myFieldElement.innerHTML += "<span class='second'>" +fieldSplitText[i]+ "</span>";



for(let i=0 ; i < quoteSplitText.length ; i++) 
  myQuoteElement.innerHTML += "<span>" +quoteSplitText[i]+ "</span>";



let charGreeting = 0 , charName = 0, charField = 0, charPower = 0;
let timer = setInterval(onTick, 50);




function onTick() {
  const spanGreeting = myGreetingElement.querySelectorAll('.greeting span')[charGreeting];
  const spanName = myNameElement.querySelectorAll('.name span')[charName];
  const spanField = myFieldElement.querySelectorAll('.field span')[charField];
  const spanPower = myQuoteElement.querySelectorAll('.quote span')[charPower];


  if (spanGreeting) {
    spanGreeting.classList.add('fade');
    charGreeting+=1;
  }

  
  if (spanName) {

    if(spanName.classList.contains('second'))
      spanName.classList.add('fadeSecond');

    else
      spanName.classList.add('fadeFirst');

    charName++;
  }


  if (spanField) {

    if(spanField.classList.contains('second'))
      spanField.classList.add('fadeSecond');

    else
      spanField.classList.add('fadeFirst');

    charField++;
  }



  if (spanPower) {
    spanPower.classList.add('fade');
    charPower++;

  }


  if (charGreeting === greetingSplitText.length && charName === nameSplitText.length && charField === fieldSplitText.length && charPower === quoteSplitText.length) {
    complete();
    return;
  }

}


function complete() {
  clearInterval(timer);
  timer = null;
}





// after finishing the text animation, now we move to second animation related to FIELD, so we need to remove the childs of h2 span tags (each character been set on each span tag, so we need to clear that and put the phrase in one tag)
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Select the parent element
    const field = document.querySelector('.field');

    // Rename the class from .field to .fieldUpdate
    field.classList.replace('field', 'fieldUpdate');
    
    // Clear existing child elements
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    }

    // Create new span elements
    const firstSpan = document.createElement('span');
    firstSpan.className = 'first-text';
    firstSpan.textContent = "and I'm a ";

    const secondSpan = document.createElement('span');
    secondSpan.className = 'second-text';
    secondSpan.textContent = 'Full stack WEB Developer';

    // Append the new spans to the field
    field.appendChild(firstSpan);
    field.appendChild(secondSpan);

    // Call the textLoad function after creating the spans
    textLoad(secondSpan);

  }, 3000); 
});

function textLoad(secondSpan) {
  setTimeout(() => {
    secondSpan.textContent = "Data Analyst";
  }, 0);

  setTimeout(() => {
    secondSpan.textContent = "Full Stack WEB Developer";
  }, 6100);

  setTimeout(() => {
    textLoad(secondSpan); // Recursive call to repeat the process
  }, 12000); // Total duration for both text changes
}
