module.exports = (err, req, res, next) => {
  if (err.isBoom) {
    res.status(err.output.statusCode)
    res.send(err.message)
  }
}
