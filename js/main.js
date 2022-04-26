const form = document.querySelector('#trial-form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
	let errors = [];
	let message;

	// regex for email format
	const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

	if (fname.value === '' || fname.value == null) {
		message = 'First Name cannot be empty';
		errors.push(message);
		showError(fname, message);
	}

	if (lname.value === '' || lname.value == null) {
		message = 'Last Name cannot be empty';
		errors.push(message);
		showError(lname, message);
	}

	if (email.value === '' || email.value == null) {
		message = 'Email cannot be empty';
		errors.push(message);
		showError(email, message);
	} else if (!pattern.test(email.value)) {
		message = 'Looks like this is not an email';
		errors.push(message);
		showError(email, message);
	}

	if (password.value === '' || password.value == null) {
		message = 'Password cannot be empty';
		errors.push(message);
		showError(password, message);
	}

	if (errors.length > 0) {
		e.preventDefault();
	}
});

function showError(el, message) {
	el.style.borderColor = 'hsl(0, 100%, 74%)';
	el.style.color = 'hsl(0, 100%, 74%)';
	el.parentNode.querySelector('.icon-error').style.display = 'block';
	el.parentNode.querySelector('.error-message').textContent = message;
	el.parentNode.querySelector('.error-message').style.display = 'block';
}
