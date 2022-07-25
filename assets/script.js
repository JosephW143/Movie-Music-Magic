//Check calls movie API
//Check calls from music API
//fetch url from movie api
//create function response to capture user input, include local storage
//parse data?
//send data to HTML
//fetch music api
//create a function to call the music API using the variable from local storage
//parse the data?
//send data to HTML
//create a function to create HTML on page






//var musicApi = '815c4d4e03msh9872b4274f9aa53p1b93a1jsn7528b7bc9183';
var musicApi = '815c4d4e03msh9872b4274f9aa53p1b93a1jsn7528b7bc9183'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '815c4d4e03msh9872b4274f9aa53p1b93a1jsn7528b7bc9183',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));