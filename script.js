$(document).ready(function () {
    // function displays articles in page
    function displayArticles() {
        // API key
        var APIKey = 'Y7bWWVONOPeRUHMryrKxY4TiGIWIKQMQ'
        // query url link
        var queryURL = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + APIKey;

        // ajax call for the url
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var article = response.results.length
            var count = 0
            for (let i = 0; i < article - 26; i++) {
                var articleTitle = response.results[i].title
                var description = response.results[i].abstract;
                var author = response.results[i].byline;
                var date = response.results[i].updated_date;
                var articleURL = response.results[i].url;
                var articleImg = response.results[i].multimedia[4].url
                console.log(articleImg);
                // update the news title
                $('#title' + count).text(articleTitle);
                // update the news description
                $('#description' + count).text(description);
                // update the news author
                $('#author' + count).text(author);
                // udate the news date
                $('#date' + count).text(date);
                // update the news image
                $('#img'+ count).attr('src', articleImg);
                // update the news link
                $('#link' + count).attr('href', articleURL);
                count++
                //end for loop    
            }
            //end .then()
        });
        //end displayAnswers()
    }

    // call displayArticles function
    displayArticles();

    // end document.reday()
});