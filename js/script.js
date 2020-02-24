$(document).ready(function() {
  //whatwedo onclick description
  $(".clickable1").click(function() {
    $(".image1").toggle();
    $(".whatwedo1").toggle();
  });

  $(".clickable2").click(function() {
    $(".image2").toggle();
    $(".whatwedo2").toggle();
  });

  $(".clickable3").click(function() {
    $(".image3").toggle();
    $(".whatwedo3").toggle();
  });



  function sendMessage(){
    var name = document.getElementById('name');
    alert(name + "Your Message is submitted");
  };

  $('.portimg').hover(function(){
    $('.porttext',this).slideToggle('slow');
 }, function(){
    $('.porttext',this).slideToggle('slow');
 });
});
