$(document).ready(function(){
function displayArticles() {
// API key
var APIKey = 'Y7bWWVONOPeRUHMryrKxY4TiGIWIKQMQ'

var queryURL = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + APIKey;

$.ajax({
    url:queryURL,
    method: "GET"
}).then(function(response) {
        var article = response.results.length
        var count = 0
        for (let i = 0; i < article - 26; i++) {
            var articleTitle = response.results[i].title
            var description = response.results[i].abstract;
            var author = response.results[i].byline;
            var date = response.results[i].updated_date;
            var articleURL = response.results[i].url;
            $('#title' + count).text(articleTitle);
            $('#description' + count).text(description);
            $('#author' + count).text(author);
            $('#date' + count).text(date);
            count++
            //end for loop    
        }
    clickArticle(articleURL) 
//end .then()
})
function clickArticle(articleURL) {
    $('.article-row-content').on('click', function() {
        $('#link').attr('href', articleURL);
        console.log('articleURL' + articleURL)
    })}

//end displayAnswers()
}
displayArticles()

// end document.reday()
});