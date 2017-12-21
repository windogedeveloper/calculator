// JavaScript Document

//Change Display
function d(val) {
		document.getElementById("d").value=val;
}

//Type numbers and operators
function v(val) {
	document.getElementById("d").value+=val;	
}

//Evaluate the equation
function e() {
		try {
			 d(eval(document.getElementById("d").value));
		}
		catch(err) {
				d("Error");
		}
}
function negative() {
	// evaluate the current equation
	e();
	// get teh value on the display and multiply it by -1
	var x = Number(document.getElementById("d").value);
	var y = x*(-1);
	// display the result
	d(y);
}
function absolute() {
	// evaluate the current equation
	e();
	// get teh value on the display and multiply it by -1
	var x = Number(document.getElementById("d").value);
	if (x>=0) {
		var y = x;
	}
	else {
		var y = x*(-1);
	}
	// display the result
	d(y);
}
function square() {
	// evaluate the current equation
	e();
	// get teh value on the display and square it
	var x = Number(document.getElementById("d").value);
	var y = Math.pow(x, 2);
	// display the result
	d(y);
}
function cubic() {
	// evaluate the current equation
	e();
	// get teh value on the display and square it
	var x = Number(document.getElementById("d").value);
	var y = Math.pow(x, 3);
	// display the result
	d(y);
}
function fourthpow() {
	// evaluate the current equation
	e();
	// get teh value on the display and square it
	var x = Number(document.getElementById("d").value);
	var y = Math.pow(x, 4);
	// display the result
	d(y);
}
function squareroot() {
	// evaluate the current equation
	e();
	// get teh value on the display take  a square root of it
	var x = Number(document.getElementById("d").value);
	var y = Math.pow(x, 1/2);
	// display the result
	d(y);
}
function cuberoot() {
	// evaluate the current equation
	e();
	// get teh value on the display take  a square root of it
	var x = Number(document.getElementById("d").value);
	var y = Math.pow(x, 1/3);
	// display the result
	d(y);
}
function fourthroot() {
	// evaluate the current equation
	e();
	// get teh value on the display take  a square root of it
	var x = Number(document.getElementById("d").value);
	var y = Math.pow(x, 1/4);
	// display the result
	d(y);
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}