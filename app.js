const express = require('express');
const { projects } = require('./data.json');
const app = express();  
// const path = require('path'); 



app.set('view engine', 'pug');

app.use('/static', express.static('./public'));



const routes = require('./routes');
const projectsRoute = require('./routes/projects');

app.use(routes);
app.use('/projects', projectsRoute); 


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use((res, req, next) => {


});


app.listen(3000, () => {
  console.log('The app is running on locolhost:3000');
});