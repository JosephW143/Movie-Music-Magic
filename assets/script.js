
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
const optionsMovie = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '815c4d4e03msh9872b4274f9aa53p1b93a1jsn7528b7bc9183',
		'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
	}
};

fetch('https://mdblist.p.rapidapi.com/?s=jaws', optionsMovie)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	//create function response to capture user input, include local storage
