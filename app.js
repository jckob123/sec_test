const express= require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");    
  res.write('hello ' + req.param('j'));
  console.log(req.param('j'));
  res.end();
});

app.get('/jscript.js', (req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.sendFile('jscript.js',{ root: __dirname });
  });
  

app.listen(1000);

