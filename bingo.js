/*
   ------------------------------------------------------------------------------
   |                            BUZZWORD BINGO
   ______________________________________________________________________________
   ------------------------------------------------------------------------------  */
var express = require('express');
var bodyParser = require('body-Parser');
var app = express();

//storage
var buzzWordHolder = {};
var arr =[];
var PORT = 4000;
/*                ROUTES
 ____________________________________________________
 ----------------------------------------------------  */

/*              MIDDLEWARE
 ____________________________________________________
 ----------------------------------------------------  */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

 /*              EXPRESS
 ____________________________________________________
 ----------------------------------------------------  */
// app.use('/buzzword', buzzwordRouter);
// app.use(bodyParser.json());ß

//  __    __ _____  _____ \_ __    _____  _____  __ __  __ _____
//  \\ /\ //((   )) ||_// ||<<     ||_// ((   )) || ||\\||  ||
//   \V/\V/  \\_//  || \\ || \\    ||     \\_//  || || \||  ||

//app.put('/buzzwords', upload.array(), function (req, res) {
app.put('/buzzwords', function (req, res) {
  var body = req.body;

  if(typeof body.buzzWords === 'string' && body.buzzWords && typeof Boolean(body.heard) === 'boolean' && body.heard) {
    if(buzzWordHolder.hasOwnProperty(body.buzzWords)) {
      buzzWordHolder[body.buzzWords].heard = body.heard;
      return res.json({"success" : true});
    }
  }
  return res.json({"success" : false});
});

app.delete('/buzzWords', function (req, res) {
  var body = req.body;
  if(buzzWordHolder.hasOwnProperty(body.buzzWords)) {
      delete buzzWordHolder[body.buzzWords];
      return res.json({"success" : true});
    }
  return res.json({"success" : false});
});

app.post('/reset', function (req, res) {

});

/*  ----------------------------------------------------------------------------
   / ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★   COMPLETED!  ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★  \
   ______________________________________________________________________________
   ------------------------------------------------------------------------------  */

/*  app.get
 --------------*/
app.get('/', (req, res) =>{
  res.send('./public/');
});

app.get('/buzzwords', (req, res) => {
  res.send(buzzWords);
//res.json(buzzWords);
});

 /*  app.post
 --------------*/
// app.post('/buzzwords', upload.array(), (req, res) => {
app.post('/buzzwords', (req, res) => {
   var body = req.body;
  if(typeof body.buzzWords === 'string' && body.buzzWords && typeof Number(body.points) === 'number' && body.points) {
    buzzWordHolder[body.buzzWords] = body;
    return res.json({"success" : true});
  }
  return res.json({"success" : false});
});

 /*  server
 --------------*/
var server = app.listen(PORT, function (){
  var host = server.address().address;
  var port = server.address().port;
  //console.log(`Example app listening at :localhost:${port}`);
}); // server---<<<
