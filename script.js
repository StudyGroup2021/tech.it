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
    var date = response.results[3].updated_date
    var articleURL = response.results[3].url;
    $('#title1').text(title);
    $('#description1').text(description);
    $('#author1').text(author);
    $('#date1').text(date);
    clickArticle(articleURL)
    console.log(articleURL);
});


// end
});
function clickArticle(articleURL) {
$('.article-row-content').on('click', function() {
    $('#link1').attr('href', articleURL);
    console.log('articleURL' + articleURL)
})}