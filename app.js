var yo = "hello"

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  $.getJSON('http://api.springer.com/metadata/json?q=' + searchTerm + '&api_key=c0822968168cdedf2a5a94608a28c833', function(data){
    showResults(data.records);
  });
}

function showResults(result){
  var html = "";
  $.each(result, function(index,values){
    html += '<a href=' + values.url[0].value + '>' + values.title + ' </a><br><p> ' + values.abstract + ' </p>';
 
  });
  $('#search-results').html(html);
}