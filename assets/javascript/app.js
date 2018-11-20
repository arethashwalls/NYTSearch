$( document ).ready(function() {
    var key = '066443b5ae6e4b4a9d41cb76e219d811';
    var topic = 'cat';
    var recordCount = 5;
    var startDate = 20180101;
    var endDate = 20181119;


    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" +  topic + 
            "&begin_date=" + startDate + "&end_date=" + endDate,
        method: 'GET'
    }).then(function(response){
        console.log(response);
    });
});
