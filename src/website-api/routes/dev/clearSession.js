export default (req, res) => {
	req.session.destroy()
	res.end('ok')
}