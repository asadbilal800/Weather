var request =  require('request');
var prompt =  require('prompt');
var city;
prompt.start();

var bingApiKey = '&adminDistrict=WA&key=AgUZ4QyHolJ1KInQJ7J_8YVtcFhqcVaaJ_H6ok1HQe26bdHf91lwOBYR3NaYTujV';

prompt.get(['Enter the City For weather jani'],function(err,res){

  city = res.username;
  var url = 'http://dev.virtualearth.net/REST/v1/Locations?locality=' + city + bingApiKey ;
  request({


    url: url
     , json: true
  },function (err,resp,body) {


    var lang = body.resourceSets[0].resources[0].point.coordinates[0];
    var lat = body.resourceSets[0].resources[0].point.coordinates[1];

    var url =  'https://api.darksky.net/forecast/1ea67cc76b7300af225db3a2c6af08ce/' + lang + ',' + lat;

    request({

      url: url
       , json: true
    },function (err,resp,body) {

  console.log("Current status : ");
      console.log(body.currently.summary);
   console.log("Current Weather : ");
   var weather = (body.currently.temperature -32) * 5 ;
   weather = weather/9;
   weather = weather.toFixed(2);
        console.log(weather);


    });



  });





});

/* */
