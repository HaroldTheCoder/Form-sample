/*const firstName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('my-form');
const errorField = document.querySelector('.error-field');

form.addEventListener('submit', (e) => {

    if(firstName.value === '') {
        errorField.innerText = "Field cannot be empty";
        errorField.style.color = 'red';
        e.preventDefault();
    }

})*/


const submitButton = document.querySelector(".form-button");
const errorField = document.querySelectorAll(".error-field");
//Const Validation with built in function
const validate = (e) => {
	e.preventDefault(); // Prevents default behavior on reload page on submit

    // Declare inputs variables
	const firstName = document.getElementById("name");
	const lastName = document.getElementById("last-name");
	const email = document.getElementById("email");
	const passwordD = document.getElementById("password");

    // Creates conditions for error message display
	if (firstName.value < 1) { // Condition -> If input value is less than 1 character error message display
		errorField[0].classList.toggle("error-active"); // Array Index of each error field with same class name
		errorField[0].style.color = "red";
		firstName.classList.toggle("invalid");
	}

	if (lastName.value < 1) { 
		errorField[1].classList.toggle("error-active");
		errorField[1].style.color = "red";
		lastName.classList.toggle("invalid");
	}

	if (email.value < 1) {
		errorField[2].classList.toggle("error-active");
		errorField[2].style.color = "red";
		email.classList.toggle("invalid");
	}

	if (password.value < 1) {
		errorField[3].classList.toggle("error-active");
		errorField[3].style.color = "red";
		passwordD.classList.toggle("invalid");
	} else {
		passwordD.classList.remove("invalid");
		errorField.forEach((f) => {
			f.classList.remove("error-active");
			f.style.color = "black";
		});
		return true;
	}

	return false;
};

submitButton.addEventListener("click", validate);