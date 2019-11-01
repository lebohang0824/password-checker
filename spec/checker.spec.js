
const { passwordIsValid, passwordIsOk } = require('../src/checker.js');

describe('Password is valid', function () {

	let password = "2019Giants!";

	it('Should exist', function () {
		expect(password).toBeTruthy();
	});

	it('Should be longer than than 8 characters', function () {
		let length = password.split(' ').join('').length;
		expect(length).toBeGreaterThan(8);
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
		expect(password).toMatch(/[!@#$%^&*()_{}+'"]/);
	});
});

describe('Password is ok', function () {

	let password = '2019Giants!';

	it('Should exist', function () {
		expect(password).toBeTruthy();
	});

	it('Should be longer than than 8 characters', function () {
		expect(password.split(' ').join('').length).toBeGreaterThan(8);
	});
	
	it('Should at least have one digit', function () {
		expect(password).toMatch(/[0-9]/);
	});
});