// check saved theme in browser storage
let darkmode = localStorage.getItem("darkmode");

// button to toggle dark mode
const themeSwitch = document.getElementById("theme-switch");

// function to enable dark mode
const enableDarkmode = () => {
  document.body.classList.add("darkmode"); // adds darkmode class to body
  localStorage.setItem("darkmode", "active");
};

// function to disable dark mode
const disableDarkmode = () => {
  document.body.classList.remove("darkmode"); // removes darkmode class from body
  localStorage.setItem("darkmode", null);
};


// if dark mode already enabled, applies it
if (darkmode === "active") {
  enableDarkmode();
}

// listens for click on theme switch btn
themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode"); //check theme state again


  //if dark mode is not enabled, enables it
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode(); //else disables it
  }
});


//mobile  menu-icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
 
  navbar.classList.toggle("active");
};







