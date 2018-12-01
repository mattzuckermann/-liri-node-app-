var request = require("request");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var keys = require("./keys.js");
let liriInput = process.argv[2];
let input = process.argv.slice(3).join(" ");

switch (liriInput) {
  case "concert-this":
    concertThis(input);
    break;
  case "spotify-this-song":
    spotifyThisSong(input);
    break;
  case "movie-this":
    if (input == null) {
      movieThis("Mr.+Nobody");
    } else {
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
----------------------------------------------
`);
}

// `concert-this`
function concertThis(inputArg) {
  request("https://rest.bandsintown.com/artists/" + inputArg + "/events?app_id=" + keys.bandsInTown.id, function (error, response, body) {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    } else {
      let commandLine = "Node Command Action: node concert-this " + inputArg;
      var arr = JSON.parse(body); //converts string into object and captures it to a variable
      var divider = "\n------------------------------------------------------------\n\n";
      var currentTime = "Time of Log: " + moment().format("dddd, MM/DD/YYYY, HH:mm A") + "\n\n";
      var dataResults = `Venue Name: ${arr[0].venue.name}
Venue Location: ${arr[0].venue.city}, ${arr[0].venue.region}, ${arr[0].venue.country}
Event Date: ${moment(arr[0].datetime).format("MM/DD/YYYY")}`

      console.log(`------------------------
${dataResults}
------------------------
`);
      let fileName = "log.txt";
      fs.appendFile(fileName, currentTime + commandLine + "\n\n" + dataResults + divider, function (err) {
        if (err) throw err;
        console.log(`Your data was appended to the log.txt file!
`);
      });
    }
  });
};

// `spotify-this-song`
function spotifyThisSong(inputArg) {
  var spotify = new Spotify(keys.spotify);
  spotify.search({ type: "track", limit: 1, query: inputArg }, function (err, data) {
    if (err) {
      return console.log("Error occured: " + err);
    }
    let commandLine = "Node Command Action: node spotify-this-song " + inputArg;
    var divider = "\n------------------------------------------------------------\n\n";
    var currentTime = "Time of Log: " + moment().format("dddd, MM/DD/YYYY, HH:mm A") + "\n\n";
    var results = data.tracks.items[0];
    var dataResults = `Artist(s): ${results.artists[0].name}
Song Name: ${results.name}
Link: ${results.external_urls.spotify}
Album Name: ${results.album.name}`

    console.log(`------------------------
${dataResults}
------------------------
`);
    let fileName = "log.txt";
    fs.appendFile(fileName, currentTime + commandLine + "\n\n" + dataResults + divider, function (err) {
      if (err) throw err;
      console.log(`Your data was appended to the log.txt file!
`);
    });
  });
}

// `movie-this`
function movieThis(inputArg) {
  request("http://www.omdbapi.com/?r=json&type=movie&t=" + inputArg + "&apikey=" + keys.omdb.key, function (error, response, body) {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    } else {
      let commandLine = "Node Command Action: node movie-this " + inputArg;
      var arr = JSON.parse(body); //converts string into object and captures it to a variable
      var divider = "\n------------------------------------------------------------\n\n";
      var currentTime = "Time of Log: " + moment().format("dddd, MM/DD/YYYY, HH:mm A") + "\n\n";
      var dataResults = `Title: ${arr.Title}
Year: ${arr.Year}
IMDB Rating: ${arr.imdbRating}
Rotten Tomatoes Rating: ${arr.Ratings[1].Value}
Country Produced: ${arr.Country}
Language: ${arr.Language}
Plot: ${arr.Plot}
Actors and Actresses: ${arr.Actors}`

      console.log(`------------------------
${dataResults}
------------------------
`)
      let fileName = "log.txt";
      fs.appendFile(fileName, currentTime + commandLine + "\n\n" + dataResults + divider, function (err) {
        if (err) throw err;
        console.log(`Your data was appended to the log.txt file!
`);
      });
    }
  });
};

// `do-what-it-says'
function doWhatItSays() {
  let fileName = "random.txt"
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) throw err;
    let dataArr = data.split(",");
    let liriInput = dataArr[0];
    let input = dataArr[1];
    switch (liriInput) {
      case "concert-this":
        concertThis(input);
        break;
      case "spotify-this-song":
        spotifyThisSong(input);
        break;
      case "movie-this":
        movieThis(input);
        break;
      default:
        console.log(`----------------------------------------------
    Please utilize one of the following three Liri Bot functions within random.txt before the comma:
        1. concert-this
        2. spotify-this-song
        3. movie-this
    ----------------------------------------------
    `);
    }
  });
};