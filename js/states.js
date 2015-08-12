$(document).ready(function () {
  $("a").click(function(){
    window.location.reload()  });

  $( "li" ).on('click', function() {
      var state = $(this).first('li').data('state');
      $(this).css({'color' : 'teal'});
  });
});
