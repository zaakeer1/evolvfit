const router = require('express').Router();
let Session = require('../models/user.model');

router.route('/').get((req, res) => {
  Session.find()
    .then(session => res.json(session))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
  
    const newUser = new Trainer({
        name,
        email
    });
  
    newUser.save()
    .then(() => res.json('Trainer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});