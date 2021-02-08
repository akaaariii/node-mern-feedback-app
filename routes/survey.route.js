const express = require('express');
const mongoose = require('mongoose');

const Survey = mongoose.model("Survey"); //comming from mongoose
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mailer = require('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const router = express.Router();

router.get('/thanks', (req, res) => {
  res.send({ msg: 'Thank you for participating...' })
})

router.post('/', requireLogin, requireCredits, async (req, res) => {
  const { title, subject, body, recipients } = req.body;

  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map((email) => { return { email: email.trim() }}),
    _user: req.user.id,
    dateSent: Date.now()
  })

  try {
    // helper function to blast out email
    await mailer(survey, surveyTemplate(survey));
    await survey.save();
  
    req.user.credits -= 1;
    const user = req.user.save();
  
    res.send(user);
  } catch (error) {
    res.status(422).send(error)
  }
})

module.exports = router;