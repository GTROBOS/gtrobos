document.getElementById("segment").onclick = function() {myFunction()};
document.getElementById("segment1").onclick = function() {myFunction1()};
document.getElementById("close1").onclick = function() {myFunction2()};
document.getElementById("close2").onclick = function() {myFunction1()};
document.getElementById("close3").onclick = function() {myFunction1()};
document.getElementById("close4").onclick = function() {myFunction1()};

function myFunction() {
   document.getElementById("navigation-div").style="width:60%";
     document.getElementById("segment1").style = "display:block";
     document.getElementById("segment").style = "display:none;";
     }
function myFunction1() {
     document.getElementById("navigation-div").style="width:0%";
     document.getElementById("segment").style = "display:block;";
     document.getElementById("segment1").style = "display:none;";
     
   }
   function myFunction2() {
     document.getElementById("navigation-div").style="width:0%";
     document.getElementById("segment").style = "display:block;";
     document.getElementById("segment1").style = "display:none;";
     
   }
   /*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
origin: 'top',
distance: '80px',
duration: 2000,
reset: true
})

/*SCROLL HOME*/
sr.reveal('.main-contents', {})
sr.reveal('main-content-h1', {delay: 200})
sr.reveal('.main-content-h2', { delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about', {delay: 500})
sr.reveal('.About-us', {delay: 300})
sr.reveal('.About-us-h2', {delay: 400})
sr.reveal('.About-us-h3', {delay: 500})


/*SCROLL SKILLS*/
sr.reveal('.Tutorial', {})
sr.reveal('.Tutorial-heading', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.Tutorial-main', {delay: 400})
sr.reveal('.Tutorial-right', {delay: 500})
sr.reveal('.Tutorial-left', {delay: 500})



/*SCROLL CONTACT*/
sr.reveal('.contact', {})
sr.reveal('.contact-heading', {interval: 200})
sr.reveal('.contact-main', {delay: 400})
sr.reveal('.contact-main-h3', {delay: 600})
