var movieApi = `8b11ffde`;
//var apiUrlMovie = "http://www.omdbapi.com/?apikey=8b11ffde&s=" + title + "&y=" + year + "&plot=short&r=json";
var apiUrlMovie =  `https://omdbapi.com/?s=avengers&page=1&apiKey=8b11ffde`;
var movieFormEl = document.getElementById('search')
var title = document.querySelector("#search")
var year = document.querySelector("#search")
//let movies = [];
//var nameInputEl = document.querySelector("#search")
//var movieSearch = document.querySelector("#search")

//var musicApi = '815c4d4e03msh9872b4274f9aa53p1b93a1jsn7528b7bc9183'

//Check calls movie API
//Check calls from music API
//parse data?
//send data to HTML
//fetch music api
//create a function to call the music API using the variable from local storage
//parse the data?
//send data to HTML
//create a function to create HTML on page

//fetch url from movie api
var getMovie = function() {
  fetch( `https://omdbapi.com/?s=thor&page=1&apiKey=8b11ffde`)
  .then(response=>response.json())
  .then(data=>console.log(data))
  .catch(err=>console.error(err));
 //if (data.Response = "True") displayMovieList(data.search);
}
getMovie();
function findMovies() {
  let movies = (search.value).trim();
  if(movies.length >0) {
    searchList.search.remove('hide-search-list');
  loadMovies(movies);
  }
}

function displayMovieList(movies) {
for (let i = 0; i < movies.length; i++) {

}
}

//create function response to capture user input, include local storage

document.getElementById("movie-name").onclick = function(){
var movieName = document.getElementById("search").value;
console.log(movieName);
}

 function formSubmitHandler(event) {
	//Prevent default
    event.preventDefault();

    var movieSearch = nameInputEl.value.trim();

    if (movieSearch) {
      searchMovie(movieSearch)
    }

    let movie = {
        title: document.getElementById("search").value,
      //  year: document.getElementById
    }
        movie.push(movie);
        //document.querySelector("input").reset();

        localStorage.setItem('movies', JSON.stringify(movie));
        console.log(localStorage);
    
 }
movieFormEl.addEventListener("submit", formSubmitHandler);

