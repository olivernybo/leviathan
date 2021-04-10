export function validUser(name, pass) {
	return name == 'leviathan' && pass == '1234'
}

export function getUserToken(name) {
	return name
}

export function validUserToken(token) {
	return token == 'leviathan'
}