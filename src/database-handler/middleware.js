export const jsonHeader = (_, res, next) => {
	res.setHeader('Content-Type', 'application/json')
	next()
}