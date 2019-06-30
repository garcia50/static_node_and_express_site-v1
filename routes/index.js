const express = require('express');
const router  = express.Router();

const { projects } = require('../data.json');
const { thumbnail } = require('../data.json');


router.get('/', (req, res) => {
  res.app.locals = projects;
  console.log(projects[4]);
  // res.app.locals = thumbnail;
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
