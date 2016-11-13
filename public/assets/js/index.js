$(document).on('ready', function() {

  console.log('jQuery file loaded');

  $(document).on('click', '.todo', function(){
    console.log("I've been clicked!")
    var currentURL = window.location.origin;
    console.log(currentURL)
    var completed = {'completed': true};
    console.log($(this))
    $.put(currentURL + 'todo/', completed, function(data){
      // $.get(currentURL + 'todo/')
    });
  });
});
