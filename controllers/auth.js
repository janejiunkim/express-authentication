const passport = require("../config/ppConfig");
module.exports = router;

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});



router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    successFlash: 'Welcome back ...',
    failureFlash: 'Either email or password is incorrect' 
}));