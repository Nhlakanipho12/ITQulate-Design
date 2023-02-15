
window.onscroll = function() {
   document.getElementById("myBtn").style.display="inline-block";
}

//scroll to view function
function viewscroll() {
const element = document.getElementById("GetArticle");
element.scrollIntoView();
}

function viewscroll2() {
const element = document.getElementById("IndustriesOverview");
element.scrollIntoView();
}

/* About us Heading opens page*/
function openServices() {
	      window.open("https://www.google.com");
	    }
/* About us Heading opens page*/
function openPage() {
	      window.open("https://www.google.com");
	    }

/* function increases the width of about us content and hides partner image*/		
function mFunction() {
document.getElementById("green").style.display="none";
document.getElementById("Continue").style.display="block";
document.getElementById("red").style.width="100%";
}

function myFunction() {
document.getElementById("green").style.display="block";
document.getElementById("Continue").style.display="none";
document.getElementById("red").style.width="50%";
}

function showMenu() {	
	document.getElementsByClassName("myBtn").style.display="inline-block";
	document.getElementsByClassName("HeaderIcons").style.display="none";
}