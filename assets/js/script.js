
// this is for scrolling
let calcScrollValue = () => {

    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight);  

    if (pos > 100) {
      scrollProgress.style.display = "grid";

    } else {
      scrollProgress.style.display = "none";
    }  

    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });  
    scrollProgress.style.background = `conic-gradient(#14d6d6 ${scrollValue}%, #e7e7e7 ${scrollValue}%)` ;
};    
  




// disapear Scroll Icon when scrolling
const scrollDownDiv = document.querySelector('.scroll-down');

function handleScroll() {
  if (window.scrollY > 150) 
    scrollDownDiv.classList.add('isHidden');

  else 
    scrollDownDiv.classList.remove('isHidden');
  
}

window.addEventListener('scroll', handleScroll);










// Select all sections and navigation links in the header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

// Select all navigation links and spans for dots in the right content bar
let barNavLinks = document.querySelectorAll('.content-right-bar .dot-map a');
let barNavLinks_Span = document.querySelectorAll('.content-right-bar .dot-map a span');

// Function to handle scroll event
window.onscroll = () => {

  calcScrollValue();

  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let sectionID = section.getAttribute('id');

    // Check if the current section is in view
    if (top >= offset && top < offset + height) {

      // Handle navigation links in the header
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector('header nav ul li a[href*=' + sectionID + ']').classList.add('active');


      // Handle dots in the right content bar (colors and size)
      barNavLinks_Span.forEach(bar_Span => {
        bar_Span.classList.remove('activeColor');
      });
      document.querySelector('.content-right-bar .dot-map a[href*=' + sectionID + '] span').classList.add('activeColor');


      barNavLinks.forEach(barLinks => {
        barLinks.classList.remove('activeExpand');
      });
      document.querySelector('.content-right-bar .dot-map a[href*=' + sectionID + ']').classList.add('activeExpand');


      
      // Store the active section in localStorage
      localStorage.setItem('activeSection', sectionID);
    }
  });
};


// Function to handle page load
window.onload = () => {

  calcScrollValue();

  // Retrieve the stored active section from localStorage
  let activeSection = localStorage.getItem('activeSection');

  // If an active section is found, apply the active styles
  if (activeSection) {
    navLinks.forEach(links => {
      links.classList.remove('active');
    });
    document.querySelector('header nav ul li a[href*=' + activeSection + ']').classList.add('active');

    barNavLinks_Span.forEach(bar_Span => {
      bar_Span.classList.remove('activeColor');
    });
    document.querySelector('.content-right-bar .dot-map a[href*=' + activeSection + '] span').classList.add('activeColor');

    barNavLinks.forEach(barLinks => {
      barLinks.classList.remove('activeExpand');
    });
    document.querySelector('.content-right-bar .dot-map a[href*=' + activeSection + ']').classList.add('activeExpand');
  }
};





// text animation for Greeting
const myGreetingElement = document.querySelector('.greeting');
const myGreetingText = myGreetingElement.textContent;
const greetingSplitText = myGreetingText.split("");

// get Name and Field
const myNameElement = document.querySelector('.name');
const myNameText = myNameElement.textContent;
const nameSplitText = myNameText.split("");

const myFieldElement = document.querySelector('.field');
const myFieldText = myFieldElement.textContent;
const fieldSplitText = myFieldText.split("");


// get Power H2 From Actions
const myPowerElement = document.querySelector('.power');
const myPowerText = myPowerElement.textContent;
const powerSplitText = myPowerText.split("");


myGreetingElement.textContent = "";
myNameElement.textContent = "";
myFieldElement.textContent = "";
myPowerElement.textContent = "";


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



for(let i=0 ; i < powerSplitText.length ; i++) 
  myPowerElement.innerHTML += "<span>" +powerSplitText[i]+ "</span>";



let charGreeting = 0, charName = 0, charField = 0, charPower = 0;
let timer = setInterval(onTick, 50);




function onTick() {
  const spanGreeting = myGreetingElement.querySelectorAll('.greeting span')[charGreeting];
  const spanName = myNameElement.querySelectorAll('.name span')[charName];
  const spanField = myFieldElement.querySelectorAll('.field span')[charField];
  const spanPower = myPowerElement.querySelectorAll('.power span')[charPower];


  if (spanGreeting) {
    spanGreeting.classList.add('fade');
    charGreeting++;
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


  if (charGreeting === greetingSplitText.length && charName === nameSplitText.length && charField === fieldSplitText.length && charPower === powerSplitText.length) {
    complete();
    return;
  }

}


function complete() {
  clearInterval(timer);
  timer = null;
}






// for Projects filter
$(document).ready(function() {
  $(".filter-item").click(function() {
    const value = $(this).attr("data-filter");

    if (value == "all") {
      $(".project-box").removeClass("hide").addClass("show");
    } else {
      $(".project-box").removeClass("show").addClass("hide");
      $(".project-box." + value).removeClass("hide").addClass("show");
    }
  });

  
  // add active btn 
  $(".filter-item").click(function() {
    $(this).addClass("active-filter").siblings().removeClass("active-filter")
  })

})