var movieApi = `8b11ffde`;
apiUrlMovie = `http://www.omdbapi.com/?s=${movie}&apikey=8b11ffde`;
//var musicApi = '815c4d4e03msh9872b4274f9aa53p1b93a1jsn7528b7bc9183'
var movieFormEl = document.querySelector("#search")
var movie;
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
fetch(apiUrlMovie)
.then(response=>response.json())
.then(response=>console.log(response))
.catch(err=>console.error(err));


//create function response to capture user input, include local storage
function movieInput(event) {
	var movieNameInput = document.querySelector("input[name='search']");
	console.dir(movieNameInput)
	movieInput();
	
	movieFormEl.appendChild(movieFormEl);
}

 function formSubmitHandler(event) {
	//Prevent default
    event.preventDefault();
    console.log(event);
 }
movieFormEl.addEventListener("submit", formSubmitHandler);
