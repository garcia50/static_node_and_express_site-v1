const express = require('express');
const router  = express.Router();

const { projects } = require('../data.json');


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const project = projects[id-1]; 

  res.app.locals = project;

  if (project !== undefined) {
    res.render('project'); 
  } else {
    console.log("The page your looking for does not exist.");
    res.redirect('/')
  } 

});

module.exports = router;