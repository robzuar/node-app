//console.log('hello world');
var express = require('express')
var app = express()

var router = express.Router();

var controller = require('./src/controllers/default');
router.get('/', controller.default );
router.get('/fuck', controller.new );
app.use(require('express-status-monitor')());
app.use('/', router);

// respond with "hello world" when a GET request is made to the homepage
/*
app.get('/', function (req, res) {
  res.send('hello world')
})
*/

app.listen(3000, () => console.log("test"));