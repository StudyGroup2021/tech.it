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
            var article = response.results.length;
            var count = 0
            for (let i = 0; i < article - 21; i++) {
                // In case news has no image, skip the news 
                // add the length of the list to continue display 8 articles
                if(response.results[i].multimedia === null){
                    i++;
                    article++;
                }
                var articleTitle = response.results[i].title
                var description = response.results[i].abstract;
                var author = response.results[i].byline;
                var date = response.results[i].updated_date;
                var articleURL = response.results[i].url;
                var articleImg = response.results[i].multimedia[4].url;
                var altImg = response.results[i].multimedia[4].caption;
                // update the news title
                $('#title' + count).text(articleTitle);
                // update the news description
                $('#description' + count).text(description);
                // update the news author
                $('#author' + count).text(author);
                // udate the news date
                $('#date' + count).text(date);
                // update the news image
                $('#img' + count).attr('src', articleImg);
                $('#img' + count).attr('alt', altImg);
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


    // API key for jobs
    //var APIkeyJobs = 'c7ea2894becc4a46db14c94b17a22f43493277d5152dc255be9bc2e9f6c36a96';
    // url
    var jobQueryUrl = "https://www.themuse.com/api/public/jobs?category=Business%20%26%20Strategy&category=Creative%20%26%20Design&category=Data%20Science&category=Project%20%26%20Product%20Management&category=Social%20Media%20%26%20Community&page=5&descending=false";
    $.ajax({
        url: jobQueryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response.results);
        // gets the name of the company
        console.log(response.results[0].company.name);
    })

    // end document.reday()
});