import fetch from 'node-fetch'
import { DB_API_KEY } from './environment.js'

export async function getUserToken(name, pass) {
	const userInfo = await fetch(`http://localhost:5000/user/${name}`, { headers: { 'Api-Key': DB_API_KEY } }).then(res => res.json())
	if (!userInfo || !userInfo.password || !userInfo.token) return null 
	return pass === userInfo.password ? userInfo.token : null
}

export async function validUserToken(name, token) {
	const userInfo = await fetch(`http://localhost:5000/user/${name}`, { headers: { 'Api-Key': DB_API_KEY } }).then(res => res.json())
	if (!userInfo || !userInfo.token) return false

	return token === userInfo.token
}