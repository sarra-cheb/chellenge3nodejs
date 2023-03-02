const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 4000
// app config
require('./dataBase/connect')
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// testing app
app.get('/home', async (req, res) => {
  res.send({ message: 'hello world' })
})
// routes
app.use('/api/todos', require('./routes/todoAPI'));
app.use('/api/users', require('./routes/userAPI'));
//test fonctionalités
app.listen(port, () => {
  console.log('now listening for requests serving on port ' + port)
});