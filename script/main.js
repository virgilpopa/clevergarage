/*Resizes text on click*/
function resizeText(multiplier) {
		if (document.body.style.fontSize == "") {
			document.body.style.fontSize = "1em";
		}
			document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.02) + "em";
		}

/*Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

/*services button to open service.html*/
document.getElementById("myButton").onclick = function () {
        location.href = "service.html";
    };


//validating blank text fields an online form
		function validate_form ( )
		{ 
    		valid = true;
    		if ((document.inputform.firstname.value == "" )||
				(document.inputform.lastname.value == "" )|| 
				(document.inputform.email.value == "" ))  
		{
        	alert ( "Please fill in the required fields" ); 
			valid = false; }
    		return valid;
		}
//end of form validation

