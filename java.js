// Input variables
const myForm = document.querySelector('#my-form');
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorField = document.querySelectorAll(".error-field");
const pattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';


// Form validation check event on submit if conditions are not met
myForm.addEventListener('submit', (e)=> {

	// First name validation check
	if(firstName.value.length <= 1) { // Condition -> If input value is less than 1 character error message display
		e.preventDefault()
		errorField[0].style.display = "block"; // errorField[] Array Index of each error field with same class name
		errorField[0].style.color = "hsl(0, 100%, 50%)";
		errorField[0].innerHTML = "First Name cannot be empty";
		firstName.classList.toggle('invalid');
	} else {
		errorField[0].style.display = "none";
		firstName.classList.remove('invalid');
	}

	// Last name validation check
	if(lastName.value.length <= 1) {
		e.preventDefault()
		errorField[1].style.display = "block";
		errorField[1].style.color = "hsl(0, 100%, 50%)";
		errorField[1].innerHTML = "Last Name cannot be empty";
		lastName.classList.toggle('invalid');
	} else {
		errorField[1].style.display = "none";
		lastName.classList.remove('invalid');
	}

	// Email validation check
	if(email.value.match(pattern)) { // Condition -> If email input value matches email pattern, email is valid. Else error message will display
		errorField[2].style.display = "none";
		email.classList.remove('invalid');
		
	}  else {
		e.preventDefault()
		errorField[2].style.display = "block";
		errorField[2].style.color = "hsl(0, 100%, 50%)";
		errorField[2].innerHTML = "Looks like this is not an email";
		email.classList.toggle('invalid');
	}

	// password validation check
	if(password.value.length <= 1) {
		e.preventDefault()
		errorField[3].style.display = "block";
		errorField[3].style.color = "hsl(0, 100%, 50%)";
		errorField[3].innerHTML = "Password cannot be empty";
		password.classList.toggle('invalid');
	} else {
		errorField[3].style.display = "none";
		password.classList.remove('invalid');
	}
});

