var key = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
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