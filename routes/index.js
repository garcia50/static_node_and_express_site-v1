//Set dependencies and add them to variables
const express = require('express');
const router  = express.Router();
//Require data from data.json; set data to variable
const { projects } = require('../data.json');

//Setup homepage path to render index pug view
router.get('/', (req, res) => {
  res.render('index', { 
    projects: projects 
  });
});

//Setup about path to render about pug view
router.get('/about', (req, res) => {
  res.render('about');
});

//Expose router as a module
module.exports = router;
