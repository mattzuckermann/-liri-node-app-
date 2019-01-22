# Liri-Bot_Node-Javascript-RestAPIs



## Purpose Of App:
This app creates ajax calls to three different APIs (Bandsintown, Spotify, and IMDB) depending on the user input on the Node.js CLI. The user can link to the proper API using either "concert-this" for Bandsintown, "spotify-this-song" for Spotify, or "movie-this" for IMDB. The main goal of the app then is to output the results from these APIs in the CLI based on the search term(s) given to API.

---

### Video Walk Through:
Click [here](https://www.youtube.com/watch?v=8cOBg6EDE40) for a video walk-through of my Liri-Bot app in Node.js:

---

### Text Walk Through:
To utilize the Liri-Bot app, after cloning the repo and running an npm install for all the required packages in the package.json, make your way to the root directory of the repo and run "node liri.js (API Request) (Search Term Request)." The items in parenthesis are where you insert the command for the API you desire (i.e. "API Request") and where to specify your search query (i.e. "Search Term Request").

In addition to running the APIs directly by following the first three commands in the table below, the user can also edit the text in the log.txt file (see repo for example of format) to indirectly pull the text from the title and run it within the app [see "do-what-it-says" command below].


The table below shows which commands run the respective APIs.

### Liri-Bot Commands Reference:

Command | API Launched
:---: | :---:
concert-this | Bandsintown
spotify-this-song" | Spotify
movie-this | IMDB
do-what-it-says | log.txt file

---

