//Set dependencies and add them to variables
const express = require('express');
const app = express();  
//Require data from data.json; set data to variable
const { projects } = require('./data.json');

//Set middleware
app.set('view engine', 'pug');
//Setup a static route to directly send images to client/browser
app.use('/static', express.static('public'));

//Setup routes for homepage and project path
const routes = require('./routes');
const projectsRoute = require('./routes/projects');

//Invoke the app.use for the "layers"/routes created and later set up middleware
app.use(routes);
app.use('/projects', projectsRoute); 

//Setup error handler when user visits non-exiting site (path)
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err); 
});

//Setup error handler when user encounters other errors 
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

//Setup app.listen handler to return the http server instance from which express created
app.listen(3000, () => {
  console.log('The app is running on locolhost:3000');
});