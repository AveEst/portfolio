var typed=new Typed (".auto-input", {
    strings:["Ave", "Ave Arak"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

window.onscroll = function() {
    showBackToTopButton();
  };
  
  function showBackToTopButton() {
    var backToTopButton = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
 

// Select the elements
const workListContainer = document.querySelector(".work-list");
const seeMoreBtn = document.getElementById("see-more-btn");

// Set the initial number of items to show
let visibleItemCount = 3;

// Hide items beyond the initial visible count
const workItems = Array.from(workListContainer.querySelectorAll(".work"));
workItems.slice(visibleItemCount).forEach((item) => {
  item.style.display = "none";
});

// Add event listener to the "See More" button
seeMoreBtn.addEventListener("click", () => {
    event.preventDefault(); // Prevent scrolling to the top
  // Show the next three items
  workItems.slice(visibleItemCount, visibleItemCount + 3).forEach((item) => {
    item.style.display = "block";
  });

  // Update the visible item count
  visibleItemCount += 3;

  // Hide the "See More" button if all items are visible
  if (visibleItemCount >= workItems.length) {
    seeMoreBtn.style.display = "none";
  }
});