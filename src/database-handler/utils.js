export const generateKey = () => {
	const length = 32
	const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

	let retVal = ''
	for (let i = 0, n = charset.length; i < length; i++)
		retVal += charset.charAt(Math.floor(Math.random() * n))
	
	return retVal
}