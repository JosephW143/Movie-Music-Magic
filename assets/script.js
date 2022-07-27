var movieApi = `8b11ffde`;
//var apiUrlMovie = "http://www.omdbapi.com/?apikey=8b11ffde&s=" + title + "&y=" + year + "&plot=short&r=json";
//var apiUrlMovie =  `https://omdbapi.com/?s=avengers&page=1&apiKey=8b11ffde`;
var movieFormEl = document.getElementById('search')
var title = document.querySelector("#search")
var year = document.querySelector("#search")
//let movies = [];
//var nameInputEl = document.querySelector("#search")
//var movieSearch = document.querySelector("#search")
var musicApi = "815c4d4e03msh9872b4274f9aa53p1b93a1jsn7528b7bc9183"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '815c4d4e03msh9872b4274f9aa53p1b93a1jsn7528b7bc9183',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

var getMusic = function(movie) {
  fetch(`https://spotify23.p.rapidapi.com/search/?q=${movie}%20soundtrack&type=albums&offset=0&limit=10&numberOfTopResults=1`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

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
var getMovie = function(movie) {
  fetch(`https://omdbapi.com/?s=${movie}&limit=1&apiKey=8b11ffde`)
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
    displayMovieList(data);
  })
  .catch(err=>console.error(err)); 
}


function displayMovieList(movies) {
  var movieInfo = Object.entries(document.getElementsByTagName("movieInfo"));
  movieInfo.forEach((element)=>{
  element[1].textContent = movies.Search[0][element[1].id.split("-")[1]]
})
}

//create function response to capture user input, include local storage
document.getElementById("movie-name").onclick = function(){
var movieName = document.getElementById("search").value;
getMovie(movieName);
getMusic(movieName);
//updateStorage(movieName);
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
      
    }
        movie.push(movie);
       //  document.querySelector("input").reset();
  }
       // function updateStorage() {
       // localStorage.setItem('movieName', JSON.stringify(movie));
       // console.log(localStorage);
       // }
 
//movieFormEl.addEventListener("submit", formSubmitHandler);

