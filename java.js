
// For typewriting occupations
var typed = new Typed('#element', {
    strings: ["Front-End Developer.", "Hip-Hop Artist.", "YouTuber."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });
  
  // Tab switching logic
  let links = document.getElementsByClassName("tab-links");
  let tabs = document.getElementsByClassName("tab-contents");
  
  function opentab(tabname) {
    Array.from(links).forEach(link => {
      link.classList.remove("active-link");
    });
  
    Array.from(tabs).forEach(tab => {
      tab.classList.remove("tab-active");
    });
  
    event.currentTarget.classList.add("active-link");
  
    document.getElementById(tabname).classList.add("tab-active");
  }
  

  let sidemenu = document.getElementById("sidemenu");
  function openmenu(){
    sidemenu.style.right="0";
  }

  function closemenu(){
    sidemenu.style.right="-200px";
  }




