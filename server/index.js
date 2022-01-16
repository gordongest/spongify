const app = require('./app');
const PORT = 4003;

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
});