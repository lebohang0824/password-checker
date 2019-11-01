
function passwordIsValid() {

	let name = "2019Giants!";

	try {

		if (name == '') throw('Should exist');

		if (name.length <= 8) throw('Should be longer than than 8 characters');

		if (name.match(/[a-z]/g) == null) throw('Should have at least one lowercase letter');

		if (name.match(/[A-Z]/g) == null) throw('Should have at least one uppercase letter');

		if (name.match(/[0-9]/g) == null) throw('Should at least have one digit');

		if (name.match(/[!@#$%^&*()_{}+'"]/g) == null) throw('Should have at least one special character');	

	} catch(err) {

		console.log(err);

	}		

}

function passwordIsOk() {

	let results = true;
	let name    = "2019Giants!";

	if (name == '') results = false;

	if (name.length <= 8) results = false;

	if (name.match(/[0-9]/g) == null) results = false;

	return results;

}

module.exports = {passwordIsValid, passwordIsOk};