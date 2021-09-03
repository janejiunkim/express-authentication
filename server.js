require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');

const session = require('express-session');
const SECRET_SESSION = process.env.SECRET_SESSION;
console.log(SECRET_SESSION);

console.log(process.env);


app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(session({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}))

app.use(flash());


app.get('/', (req,res) => {
  res.render('index');
})

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
