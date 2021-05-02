export const jsonResponse = (_, res, next) => {
	res.setHeader('Content-Type', 'application/json')
	next()
}