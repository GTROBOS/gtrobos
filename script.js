document.getElementById("min-bar").onclick = function() {myFunction()};
document.getElementById("segment1").onclick = function() {myFunction1()};
document.getElementById("close1").onclick = function() {myFunction2()};
document.getElementById("close2").onclick = function() {myFunction2()};
document.getElementById("close3").onclick = function() {myFunction2()}
document.getElementById("close4").onclick = function() {myFunction2()}
function myFunction() {
 document.getElementById("navigation-div").style="dispay:block;height:100vh";
 document.getElementsByClassName("navigation-div-items").style="display:block";
 document.getElementById("segment1").style = "display:block";
 document.getElementById("min-button").style = "display:none;";
 }
 function myFunction1() {
 document.getElementById("navigation-div").style="height:0%";
 document.getElementById("min-button").style = "display:block;";
 document.getElementById("segment1").style = "display:none;";
 
}
function myFunction2() {
    document.getElementById("navigation-div").style="width:0%";
    document.getElementById("min-button").style = "display:block;";
    document.getElementById("segment1").style = "display:none;";
    
  }