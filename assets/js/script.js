

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










