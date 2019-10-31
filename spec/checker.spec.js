
const { passwordIsValid, passwordIsOk } = require('../src/checker.js');

describe('Password is valid', function () {

	let password = passwordIsValid();

	it('Should exist', function () {
		expect(password).not.toBeNull();
	});

	it('Should be longer than than 8 characters', function () {
		expect(password.split(' ').join('').length).toBeGreaterThan(8);
	});
	
	it('Should have at least one lowercase letter', function () {
		expect(password).toMatch(/[a-z]/);
	});
	
	it('Should have at least one uppercase letter', function () {
		expect(password).toMatch(/[A-Z]/);
	});
	
	it('Should at least have one digit', function () {
		expect(password).toMatch(/[0-9]/);
	});
	
	it('Should have at least one special character', function () {
		expect(password).toMatch(/[{_^%@!%&*"']/);
	});
});

describe('Password is ok', function () {

	it('Should exist', function () {
		expect(passwordIsOk()).not.toBeNull();
	});

	it('Should be longer than than 8 characters', function () {
		expect(passwordIsOk().split(' ').join('').length).toBeGreaterThan(8);
	});
	
	it('Should at least have one digit', function () {
		expect(passwordIsOk()).toMatch(/[0-9]/);
	});
});