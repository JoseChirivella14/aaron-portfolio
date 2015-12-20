$(function() {
  $('.slideshow img:gt(0)').hide();

$('.next').click(function() {
  $('.slideshow img:first-child').fadeOut().next().fadeIn().end().appendTo('.slideshow');
});

$('.prev').click(function() {
  $('.slideshow img:first-child').fadeOut();
  $('.slideshow img:last-child').prependTo('.slideshow').fadeOut();
  $('.slideshow img:first-child').fadeIn();
});
});
