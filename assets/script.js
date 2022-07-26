var movieApi = `8b11ffde`;
apiUrlMovie = "http://www.omdbapi.com/?apikey=8b11ffde&t=" + title + "&y=" + year + "&plot=short&r=json";
var movieFormEl = document.querySelector("#search")
var title = document.querySelector("#search")
var year = document.querySelector("#search")

let movies = [];
//apiUrlMovie = (`http://www.omdbapi.com/?s=${movie}&apikey=${movieApi}`)
//apiUrlMovie = `http://www.omdbapi.com/?s=${`<>`}&apikey=8b11ffde`;
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
//var searchMovie = function(title) {
  //  apiUrlMovie = "http://www.omdbapi.com/?apikey=8b11ffde&t=" + title + "&y=" + year + "&plot=short&r=json";

fetch(apiUrlMovie)
.then(response=>response.json())
.then(response=>console.log(response))
.catch(err=>console.error(err));
//searchMovie()
//}

//create function response to capture user input, include local storage

document.getElementById("movie-name").onclick = function(){
var movieName = document.getElementById("search").value;
console.log(movieName);
}

 function formSubmitHandler(event) {
	//Prevent default
    event.preventDefault();
    let movie = {
        title: document.getElementById("search").value,
      //  year: document.getElementById
    }
        movies.push(movie);
        //document.querySelector("input").reset();

        localStorage.setItem('myMovies', JSON.stringify(movie));
        console.log(localStorage);
    
 }
movieFormEl.addEventListener("submit", formSubmitHandler);

