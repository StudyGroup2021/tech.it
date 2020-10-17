var APIKey = '401b9958d4b04c9eb9f4b7313ad0b743'
//var country = $("").val().trim();
var queryURL = "http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then( function(response){
    console.log(response)
    // Set a variable to the title of the article
    var title = respone.articles.title;

    var source = response.articles.source.name;
    var description = response.articles.description;
    var url = response.articles.url;
    //$('.article-title').text(title)
});