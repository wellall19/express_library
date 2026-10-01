const express = require('express');
const router = express.Router();
const User = require('../modules/User');
const passport = require('passport');
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => {
    res.render('user/login', { title: 'Вход' });
});

router.get('/me',
    (req, res, next) => {
      if (!req.isAuthenticated()) {
        return res.redirect('/api/user/login')
      }
      next()
    },
    (req, res) => {
      res.render('user/me',  { title: 'Профиль', user: req.user })
    }
);

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/api/user/login' }),
    (req, res) => {
        console.log("req.user: ", req.user)
        res.redirect('/')
  }
);

router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.redirect('/api/user/login')
    } catch (e) {
        return res.redirect('/404')
    }
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.redirect('/404');
        }
        res.redirect('/api/user/login');
    });
});

module.exports = router;