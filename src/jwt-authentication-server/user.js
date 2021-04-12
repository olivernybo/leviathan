import fetch from 'node-fetch'

export async function getUserToken(name, pass) {
	const userInfo = await fetch(`http://localhost:5000/user/${name}`)
	if (!userInfo || !userInfo.password || !userInfo.token) return null 

	return pass === userInfo.password ? userInfo.token : null
}

export async function validUserToken(name, token) {
	const userInfo = await fetch(`http://localhost:5000/user/${name}`)
	if (!userInfo || !userInfo.token) return false

	return token === userInfo.token
}