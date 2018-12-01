var request = require("request");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var keys = require("./keys.js");
let liriInput = process.argv[2];
let input = process.argv[3];

switch (liriInput) {
  case "concert-this":
    concertThis(input);
    break;
  case "spotify-this-song":
    spotifyThisSong(input);
    break;
  case "movie-this":
    switch (input) {
      case "h":
        movieThis("Mr.+Nobody");
        break;
      default:
        movieThis(input);
    }
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    console.log(`----------------------------------------------
Please utilize one of the following four Liri Bot functions:
    1. concert-this
    2. spotify-this-song
    3. movie-this
    4. do-what-it-says
----------------------------------------------`);
}

// `concert-this`
function concertThis(inputArg) {
  request("https://rest.bandsintown.com/artists/" + inputArg + "/events?app_id=" + keys.bandsInTown.id, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', JSON.parse(body)); //Print HTML into string
    var arr = JSON.parse(body); //converts string into object and captures it to a variable
    console.log(`Venue Name: ${arr[0].venue.name}
Venue Location: ${arr[0].venue.city}, ${arr[0].venue.region}, ${arr[0].venue.country}
Event Date: ${moment(arr[0].datetime).format("MM/DD/YYYY")}`)
  });
};

// // `spotify-this-song`
// function spotifyThisSong(inputArg) {
//   var spotify = new Spotify(keys.spotify);
//   spotify.search({ type: "track", limit: 1, query: inputArg }, function(err, data) {
//     if (err) {
//       return console.log("Error occured: " + err);
//     }
//     var results = data.items.tracks
//     // console.log(results.album
//     console.log()
//       for (i=0; i < results.artists.length; i++) {

//       }
//       results.artisty});
//     console.log(results.name);
//     console.log("Link" + results.href)
//   })
// };

// `movie-this`
function movieThis(inputArg) {
  request("http://www.omdbapi.com/?r=json&type=movie&t=" + inputArg + "&apikey=" + keys.omdb.key, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', JSON.parse(body)); // Print the HTML into string
    var arr = JSON.parse(body); //converts string into object and captures it to a variable
    console.log(`------------------------
Title: ${arr.Title}
Year: ${arr.Year}
IMDB Rating: ${arr.imdbRating}
Rotten Tomatoes Rating: ${arr.Ratings[1].Value}
Country Produced: ${arr.Country}
Language: ${arr.Language}
Plot: ${arr.Plot}
Actors and Actresses: ${arr.Actors}
------------------------
`)
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
    let inputDo = dataArr[1];

    console.log(dataArr);

    switch (liriInput) {
      case "concert-this":
        concertThis(inputDo);
        break;
      case "spotify-this-song":
        spotifyThisSong(inputDo);
        break;
      case "movie-this":
        movieThis(inputDo);
        break;
      default:
        console.log(`----------------------------------------------
    Please utilize one of the following three Liri Bot functions within random.txt before the comma:
        1. concert-this
        2. spotify-this-song
        3. movie-this
    ----------------------------------------------`);
    }
  });
};



//HAVE TO INCLUDE SCREENSHOTS, A GIF, AND/OR A VIDEO SHOWING GRADER 
//THAT YOU GOT THE APP WORKING WITH NO BUGS

//CAN INCLUDE THESE IN THE ** README.md ** FILE

//A WELL-WRITTEN README IS PART OF THE GRADING