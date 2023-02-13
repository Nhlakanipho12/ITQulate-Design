
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