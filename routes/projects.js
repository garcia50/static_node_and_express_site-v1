//Set dependencies and add them to variables
const express = require('express');
const router  = express.Router();
//Require data from data.json; set data to variable
const { projects } = require('../data.json');

//Setup projects path to render index pug view if no specific path is given
router.get('/', (req, res) => {
  res.redirect('/')
});

//Setup projects path to render project pug view for specific project
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const project = projects[id-1]; 

  //Setup local variables to be accesed in the views
  res.app.locals = project;

  //Use if statement to determine if an id was passed into the url
  if (project !== undefined) {
    res.render('project'); 
  //If no id is passed the user is redirected to homepage/index
  } else {
    console.log("The page your looking for does not exist.");
    res.redirect('/')
  } 

});

//Expose router as a module
module.exports = router;