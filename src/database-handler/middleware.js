export const jsonHeader = (_, res, next) => {
	res.setHeader('Content-Type', 'application/json')
	next()
}

export const jsonResponse = (_, res, next) => {
	res.json = function(obj, end = false) {
		this[end ? 'end' : 'send'](JSON.stringify(obj))
	}
	next()
}