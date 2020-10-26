$(document).ready(function () {
    // create a email submission list
    var emailHistory = JSON.parse(window.localStorage.getItem("submit")) || [];
    // quotes list of quote and author
    quoteList = [
        {
            quote: "\"Don't worry if it doesn't work right.  If everything did, you'd be out of a job.\"",
            author: "-Mosher's Law of Software Engineering"
        },
        {
            quote: "\"Measuring programming progress by lines of code is like measuring aircraft building progress by weight.\"",
            author: "-Bill Gates"
        },
        {
            quote: "\"Good code is its own best documentation.\"",
            author: "-Steve McConnell"
        },
        {
            quote: "\"That's the thing about people who think they hate computers. What they really hate are lousy programmers.\"",
            author: "-Larry Niven"
        },
        {
            quote: "\"Everyone in this country should learn to program a computer... because it teaches you how to think.\"",
            author: "-Steve Jobs"
        },
        {
            quote: "\"Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.\"",
            author: "-Stephen Hawking"
        },
        {
            quote: "\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\"",
            author: "-Martin Fowler"
        }];
    // create <p> elements for quotes and author
    var quoteP = $("<p>").addClass("quote-text");
    var authorP = $("<p>").addClass("quote-author");
    var i = 0;
    // fade in and out quotes with authors in the ".quotes" div    
    var quoteTimer = function () {
        // set index 0 so that list starts from beginning
        if (i == quoteList.length - 1) {
            i = 0;
        }
        // quote text fades out
        $(quoteP).fadeOut(1000, function () {
            $(this).text(quoteList[i].quote);

        });
        // quote text fades in
        $(quoteP).fadeIn();
        // author fades out
        $(authorP).fadeOut(1000, function () {
            $(this).text(quoteList[i].author);

        });
        // author fades in
        $(authorP).fadeIn();
        // increment i
        i++;
    }
    // add quotes on page
    $(quoteP).text(quoteList[i++].quote);
    $('.quote-text').append(quoteP);
    $(authorP).text(quoteList[i++].author);
    $('.quote-author').append(authorP);
    // set interval and make appear each quote for 6 sec
    setInterval(quoteTimer, 6000);


    // function displays articles in page
    function displayArticles() {
        // API key
        var APIKey = 'Y7bWWVONOPeRUHMryrKxY4TiGIWIKQMQ';
        // query url link
        var queryURL = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + APIKey;

        // ajax call for the url
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var article = response.results.length;
            var count = 0;
            for (let i = 0; i < article - 21; i++) {
                // In case news has no image, skip the news
                // add the length of the list to continue display 8 articles
                if (response.results[i].multimedia === null) {
                    i++;
                    article++;
                }
                // get data from the API
                var articleTitle = response.results[i].title;
                var description = response.results[i].abstract;
                var author = response.results[i].byline;
                var date = response.results[i].updated_date;
                // format news date
                var newsDate = new Date(Date.parse(date));
                var d = newsDate.getDate();
                var m = newsDate.getMonth();
                var y = newsDate.getUTCFullYear();
                var pDate = m + "/" + d + "/" + y;
                //
                var articleURL = response.results[i].url;
                var articleImg = response.results[i].multimedia[4].url;
                var altImg = response.results[i].multimedia[4].caption;
                // assign date to the html
                // update the news title
                $('#title' + count).text(articleTitle);
                // update the news description
                $('#description' + count).text(description);
                // update the news author
                $('#author' + count).text(author);
                // udate the news date
                $('#date' + count).text(pDate);
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

    // function that displays new jobs on page
    function displayJobs() {
        // API key for jobs
        //var APIkeyJobs = 'c7ea2894becc4a46db14c94b17a22f43493277d5152dc255be9bc2e9f6c36a96';
        // url
        var jobQueryUrl = "https://www.themuse.com/api/public/jobs?category=Business%20%26%20Strategy&category=Creative%20%26%20Design&category=Data%20Science&category=Project%20%26%20Product%20Management&category=Social%20Media%20%26%20Community&page=5&descending=false";
       
        // ajax call for the url
        $.ajax({
            url: jobQueryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response.results);
            var jobs = response.results.length;
            var count = 0;
            for (let i = 0; i < jobs - 12; i++) {
                // accept job locations that do not inlcude these countries (that mean states in the US and remote will be accepted)
                if (response.results[i].locations[0].name.includes(" Canada")
                    || response.results[i].locations[0].name.includes(" China")
                    || response.results[i].locations[0].name.includes(" South Korea")
                    || response.results[i].locations[0].name.includes(" Luxembourg")
                    || response.results[i].locations[0].name.includes(" Germany")) {
                    i++;
                    jobs++;
                }
                // get data from the api
                var companyName = response.results[i].company.name;
                var jobDescr = response.results[i].name;
                var jobLocation = response.results[i].locations[0].name;
                //console.log(jobLocation)
                var publishDate = response.results[i].publication_date;
                // format the date 
                var pDate = new Date(Date.parse(publishDate));
                var date = pDate.getDate();
                var month = pDate.getMonth();
                var year = pDate.getUTCFullYear();
                var datePubl = month + "/" + date + "/" + year;
                //
                var jobUrl = response.results[i].refs.landing_page;
                // assign data to the html
                // update the job title
                $('#job-title' + count).text(companyName);
                // update the job description
                $('#job-description' + count).text(jobDescr);
                // update the job location
                $('#job-location' + count).text(jobLocation);
                // udate the job published date
                $('#job-date' + count).text(datePubl);
                // update the job link
                $('#job-link' + count).attr('href', jobUrl);
                count++
                //end for loop
            }
            //end .then()
        });
    }

    // save in local storage emails put in the form
    // when click the button submit
    $("#submit-btn").on("click", function(){
        var submit = $("#email").val();
        console.log(submit);
        emailHistory.push(submit);
        localStorage.setItem("submit", emailHistory);
        // clear input
        $("#email").val("");
    });

    // function calls
    // call displayArticles function
    displayArticles();
    // call display jobs
    displayJobs();
    // call timer
    quoteTimer();

    // end document.reday()
});