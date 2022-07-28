// movie api key
var movieApi = `8b11ffde`;
var movieFormEl = document.getElementById('search')

// key and host for movie api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '815c4d4e03msh9872b4274f9aa53p1b93a1jsn7528b7bc9183',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

// fetch url from music api
var getMusic = function(movie) {
  fetch(`https://spotify23.p.rapidapi.com/search/?q=${movie}%20soundtrack&type=albums&offset=0&limit=1&numberOfTopResults=1`, options)
	.then(response => response.json())
	.then(data => {
    console.log(data);
    displayMusicList(data);
  })
	.catch(err => console.error(err));

}

// fetch url from movie api
var getMovie = function(movie) {
  fetch(`https://omdbapi.com/?s=${movie}&limit=1&apiKey=8b11ffde`)
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
    displayMovieList(data);
  })
  .catch(err=>console.error(err)); 
}

// function to display movie information
function displayMovieList(movies) {
  var movieInfo = Object.entries(document.getElementsByTagName("movieInfo"));
  movieInfo.forEach((element)=>{
  element[1].textContent = movies.Search[0][element[1].id.split("-")[1]]
})
}

// function to display music info
function displayMusicList(data) {
  // get music titile and display to page 
  const musicName = data.albums.items[0].data.name;
  const musicTitle = document.getElementById('music-name');
  musicTitle.textContent = musicName;

  // get music artist and display to page 
  const musicArtist = data.albums.items[0].data.artists.items[0].profile.name;
  const musicArtistInfo = document.getElementById('music-artist');
  musicArtistInfo.textContent = musicArtist;

  // get soundtrack image and display to page
  var img = document.createElement('img');
  var imgParent = document.getElementById('img-parent');
  img.src = data.albums.items[0].data.coverArt.sources[2].url;
  imgParent.appendChild(img);
}

// create function response to capture user input, include local storage
document.getElementById("movie-name").onclick = function(){
var movieName = document.getElementById("search").value;

getMovie(movieName);
getMusic(movieName);
// updateStorage(movieName);
}

 //function formSubmitHandler(event) {
	//Prevent default
   // event.preventDefault();

   // var movieSearch = nameInputEl.value.trim();

    //if (movieSearch) {
      //searchMovie(movieSearch)

    //}

   // let movie = {
       // title: document.getElementById("search").value,
      
   // }
        //movie.push(movie);
        //document.querySelector("input").reset();
 // }
       // function updateStorage() {
       // localStorage.setItem('movieName', JSON.stringify(movie));
       // console.log(localStorage);
       // }