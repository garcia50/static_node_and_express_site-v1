const express = require('express');
const router  = express.Router();
// const path = require('path'); 


const { projects } = require('../data.json');


router.get('/:id', (req, res) => {
  var { id } = req.params


  const project = projects.filter(function(proj) { return proj.id == 2 });
  
  const title = project[0].project_name
  const description = project[0].description
  const technologies = project[0].technologies
  const live_link = project[0].live_link
  const github_link = project[0].github_link
  const image_urls = project[0].image_urls


  const projectsData = {title, description, technologies,live_link, github_link, image_urls};

  res.locals.projectsData = projectsData  
  res.render('project', projectsData); 

});

module.exports = router;