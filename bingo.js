/*
   ------------------------------------------------------------------------------
   |                            BUZZWORD BINGO
   ______________________________________________________________________________
   ------------------------------------------------------------------------------  */
var express = require('express');
var bodyParser = require('body-Parser');
var app = express();

//storage
var buzzWords = {};
var PORT = 4000;
/*                ROUTES
 ____________________________________________________
 ----------------------------------------------------  */

/*              MIDDLEWARE
 ____________________________________________________
 ----------------------------------------------------  */
app.use(express.static('public'));

 /*              EXPRESS
 ____________________________________________________
 ----------------------------------------------------  */
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));

// // app.use('/buzzword', buzzwordRouter);

var arr =[];
var buzzWords = {};

app.get('/', (req, res) =>{
  res.send('./public/');
});

app.get('/buzzwords', (req, res) => {
  res.send( { "buzzwords": arr});
//res.json(buzzWords);
});

app.post('/buzzwords', (req, res) => {
   var body = req.body;
  if(typeof body.buzzWord === 'string' && body.buzzWord && typeof Number(body.points) === 'number' && body.points) {
    buzzWords[body.buzzWord] = body;
    return res.json({"success" : true});
  }
  return res.json({"success" : false});
});


var server = app.listen(PORT, function (){
  var host = server.address().address;
  var port = server.address().port;
  //console.log(`Example app listening at :localhost:${port}`);
});

// server---<<<
/*___________________________________________________
  --------------------------------------------------- */


//  __    __ _____  _____ \_ __    _____  _____  __ __  __ _____
//  \\ /\ //((   )) ||_// ||<<     ||_// ((   )) || ||\\||  ||
//   \V/\V/  \\_//  || \\ || \\    ||     \\_//  || || \||  ||

/*  ----------------------------------------------------------------------------
   / ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★   COMPLETED!  ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★  \
   ______________________________________________________________________________
   ------------------------------------------------------------------------------  */
