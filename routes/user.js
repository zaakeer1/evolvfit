const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const date = Date.parse(req.body.date);
    const trainerRef = req.body.trainerRef;
    //const sessions = Number(req.body.phone);
  
    const newUser = new User({
      name,
      email,
      gender,
      phone,
      date,
      trainerRef,
      //sessions,
    });
  
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;