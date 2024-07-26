
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




for(let i=0 ; i < greetingSplitText.length ; i++) 
  myGreetingElement.innerHTML += "<span class='animate'>" +greetingSplitText[i]+ "</span>";






for(let i=0 ; i < nameSplitText.length ; i++) 
  myNameElement.innerHTML += "<span class='animate'>" +nameSplitText[i]+ "</span>";






for(let i=0 ; i < fieldSplitText.length ; i++) 
  myFieldElement.innerHTML += "<span class='animate'>" +fieldSplitText[i]+ "</span>";



for(let i=0 ; i < quoteSplitText.length ; i++) 
  myQuoteElement.innerHTML += "<span='animate'>" +quoteSplitText[i]+ "</span=>";



let charGreeting = 0 , charName = 0, charField = 0, charQuote = 0;
let timer = setInterval(onTick, 50);




function onTick() {
  const spanGreeting = myGreetingElement.querySelectorAll('.greeting span')[charGreeting];
  const spanName = myNameElement.querySelectorAll('.name span')[charName];
  const spanField = myFieldElement.querySelectorAll('.field span')[charField];
  const spanQuote = myQuoteElement.querySelectorAll('.quote span')[charQuote];


  if (spanGreeting) {
    spanGreeting.classList.add('fade');
    charGreeting+=1;
  }

  
  if (spanName) {


      spanName.classList.add('fade');



    charName++;
  } 


  if (spanField) {

    if(spanField.classList.contains('animate'))
      spanField.classList.add('fade');

    else
      spanField.classList.add('fade');

    charField++;
  }



  if (spanQuote) {
    spanQuote.classList.add('fade');
    charQuote++;

  }


  if (charGreeting === greetingSplitText.length && charName === nameSplitText.length && charField === fieldSplitText.length && charQuote === quoteSplitText.length) {
    complete();
    return;
  }

}


function complete() {
  clearInterval(timer);
  timer = null;
}




