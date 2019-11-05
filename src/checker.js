
function passwordIsValid() {

	let password = "2019Giants!";

	try {

		if (password == '') throw('Should exist');

		if (password.length <= 8) throw('Should be longer than than 8 characters');

		if (password.match(/[a-z]/g) == null) throw('Should have at least one lowercase letter');

		if (password.match(/[A-Z]/g) == null) throw('Should have at least one uppercase letter');

		if (password.match(/[0-9]/g) == null) throw('Should at least have one digit');

		if (password.match(/[!@#$%^&*()_{}+'"]/g) == null) throw('Should have at least one special character');	

	} catch(err) {

		console.log(err);

	}		

}

function passwordIsOk() {

	let password = "2019Giants!";

	if (password !== '' && password.length > 8) {
		if (password.match(/[a-z]/g) !== null || password.match(/[A-Z]/g) !== null || password.match(/[0-9]/g) !== null || password.match(/[!@#$%^&*()_{}+'"]/g) !== null) {
			return true;
		}
	}

	return false;

}

passwordIsValid();
console.log(passwordIsOk());