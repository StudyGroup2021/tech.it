$(document).ready(function(){
// API key
var APIKey = 'Y7bWWVONOPeRUHMryrKxY4TiGIWIKQMQ'
//var country = $("").val().trim();
var queryURL = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + APIKey;
console.log(queryURL)
$.ajax({
    url:queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    var title = response.results[3].title;
    var description = response.results[3].abstract;
    var author = response.results[3].byline;
    var articleURL = response.results[3].url;
});


// end
});
