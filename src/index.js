const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const path = require('path');
const { join } = require('path');

//static check file trong folder - show img
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));
//==================================

// template engine new
app.engine ('hbs', handlebars(
  {
    extname: '.hbs'
  }
));
app.engine ( 'hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources\\views'));
// old dot extension defaule handlebars
// app.engine ('handlebars', handlebars());
// app.set('view engine', 'handlebars');
//===========================================

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})