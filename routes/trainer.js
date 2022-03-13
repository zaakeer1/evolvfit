const router = require('express').Router();
let Trainer = require('../models/trainer.model');

router.route('/').get((req, res) => {
  Trainer.find()
    .populate('Trainer.userRef')
    .then(trainer => res.json(trainer))
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

module.exports = router;
