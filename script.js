$(document).ready(function() {
  $('.animate__fadeInUp').waypoint(function() {
    $('.animate__fadeInUp').addClass('animate__animated');
  }, { offset: '50%' });
});
