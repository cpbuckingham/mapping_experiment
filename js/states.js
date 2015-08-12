$(document).ready(function () {
  $("a").click(function(){
    window.location.reload()});
    alert($('li').length);

  $( "li" ).on('click', function() {
      $(this).data('state');
      $(this).css({'color' : 'teal'});
  });

});
