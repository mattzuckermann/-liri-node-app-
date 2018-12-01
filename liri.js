var request = require("request");
var moment = require("moment");
var nodeSpotifyApi = require("node-spotify-api");
var fs = require("fs");

var keys = require("./keys.js");
let liriInput = process.argv[2];
let input = process.argv[3];

switch (liriInput) {
  case "concert-this":
    concertThis();
    break;
  case "spotify-this-song":
    spotifyThisSong();
    break;
  case "movie-this":
    movieThis();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    console.log(`----------------------------------------------
Please utilize one of the four Liri Bot functions:
    1. concert-this
    2. spotify-this-song
    3. movie-this
    4. do-what-it-says
----------------------------------------------`);
}

// `concert-this`
function concertThis() {
  request("https://rest.bandsintown.com/artists/" + input + "/events?app_id=" + keys.bandsInTown.id, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', JSON.parse(body)); //Print HTML into string
    var arr = JSON.parse(body); //converts string into object and captures it to a variable
    console.log(`Venue Name: ${arr[0].venue.name}
Venue Location: ${arr[0].venue.city}, ${arr[0].venue.region}, ${arr[0].venue.country}
Event Date: ${moment(arr[0].datetime).format("MM/DD/YYYY")}`)
  });
};


// `spotify-this-song`
function spotifyThisSong() {
  // var URL = ;
};

// `movie-this`
function movieThis() {
  request("http://www.omdbapi.com/?r=json&type=movie&s=" + input + "&apikey=" + keys.omdb.key, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
};

// `do-what-it-says'
function doWhatItSays() {
  let fileName = "random.txt"
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('OK: ' + fileName);
    console.log(data)
    let dataArr = data.split(",");
    let liriInput = dataArr[0];
    let input = dataArr[1];
    console.log(dataArr);

    spotifyThisSong();
  });

};



// //Constructor Function
// BandsInTown() {
// console.log(`Didn't work`);
// };

// Omdb() {
// console.log(`Didn't work`);
// };

// Spotify() {
// console.log(`Didn't work`);
// };

// var bandsInTown = new BandsInTown(keys.bandsInTown);
// var omdb = new Omdb(keys.omdb);
// var spotify = new Spotify(keys.spotify);









//HAVE TO INCLUDE SCREENSHOTS, A GIF, AND/OR A VIDEO SHOWING GRADER 
//THAT YOU GOT THE APP WORKING WITH NO BUGS

//CAN INCLUDE THESE IN THE ** README.md ** FILE

//A WELL-WRITTEN README IS PART OF THE GRADING