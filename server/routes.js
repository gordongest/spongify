const { spongify } = require('../src/spongify.js')

module.exports = app => {
  app.post('/spongify', (req, res) => {
    try {
      const result = spongify(req.body.text);
      res.send(result);
    } catch (err) {
      console.log('ERROR:', err);
      res.json({ msg: err.message });
    }
  })
}