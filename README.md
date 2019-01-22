# Liri-Bot_Node-Javascript-RestAPIs



## Purpose Of App:
This app creates ajax calls to three different APIs (Bandsintown, Spotify, and IMDB) depending on the user input on the Node.js CLI. The user can link to the proper API using either "concert-this" for BandsInTown, "spotify-this-song" for Spotify, or "movie-this" for IMDB. The main goal of the app then is to output the results from these APIs in the CLI based on the search term(s) given to API.

---

### Video Walk Through:
Click [here](https://www.youtube.com/watch?v=8cOBg6EDE40) for a video walk-through of my Liri-Bot app in Node.js:

---

### Text Walk Through:
To utilize the Liri-Bot app, after pulling down the repo and running an npm install for all the required packages in the package.json, one simply runs "node liri.js (API Request) (Search Term Request)." The below table shows which commands run the respective APIs and how one can lookup searches based on the next term within the CLI array index #3 (i.e. array[3] or the "(Search Term Request)" position above).

Command | API Launched
:---: | :---:
concert-this | Bandsintown
spotify-this-song" | Spotify
movie-this | IMDB
do-what-it-says | log.txt file

---

