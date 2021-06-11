const path = require('path')
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const ex_handlebars  = require('express-handlebars');
const { extname } = require('path');

// đường dẫn mặc định đến folder public "localhost" = "/public"
app.use(express.static(path.join(__dirname ,'public')))

// HTTP logger
app.use(morgan('combined'));

// template engine
// đổi đuôi handlebar thành hbs cho ngắn
app.engine('hbs', ex_handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');

// đổi đường dẫn đến folder views
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/trang_chu', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})