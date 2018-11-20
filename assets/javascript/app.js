<<<<<<< HEAD
var key = '066443b5ae6e4b4a9d41cb76e219d811';
var topic = 'cat';
var recordCount = 5;
console.log('hi')
$(".searchButton").on("click", function (e) {
   e.preventDefault();
   var startDate = $(".start-year").val();
   var endDate = $(".end-year").val();
   var topic = $(".topic").val();
    
   $.ajax({
       url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + topic +
           "&begin_date=" + startDate + "&end_date=" + endDate,
       method: 'GET'
   }).then(function (response) {
       console.log(response);
   });
=======
$( document ).ready(function() {
   var key = '066443b5ae6e4b4a9d41cb76e219d811';
   var topic = 'cat';
   var recordCount = 5;

   $(".searchButton").on("click", function (e) {
      e.preventDefault();
      var startDate = $(".start-year").val();
      var endDate = $(".end-year").val();
      var topic = $(".topic").val();

      $.ajax({
          url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + topic +
              "&begin_date=" + startDate + "&end_date=" + endDate,
          method: 'GET'
      }).then(function (response) {
          console.log(response);
      });
>>>>>>> 430acb157bf11eca3ea1cc2474be0396258ed693

   });
});
