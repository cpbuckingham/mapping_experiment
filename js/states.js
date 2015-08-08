$(document).ready(function () {

  $("navbar-brand").click(function(){
         $("p").hide();
     });

  $('#li').hover(
      function() {
      	$('#li').css({'color' : 'red'});
      },
      function() {
      	$('#li').css({'color' : 'blue'});
      }
  )
