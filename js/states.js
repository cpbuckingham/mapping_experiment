$(document).ready(function () {
  $("a").click(function(){
    window.location.reload()  });

  $( "li" ).click(function() {
    $( "li" ).each(function() {
      $( this ).css({'color' : 'teal'});
    });
  });
});
