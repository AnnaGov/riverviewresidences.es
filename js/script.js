$(document).ready(function(){
   
    $('#buttonTownhouses').click(function() {
        $('.carouselDuplexes').hide();
        $('.carouselPenthouses').hide();
        $('.carouselTownhouses').show();
      });

      $('#buttonDuplexes').click(function() {
        $('.carouselTownhouses').hide();
        $('.carouselPenthouses').hide();
        $('.carouselDuplexes').show();
      });

      $('#buttonPenthouses').click(function() {
        $('.carouselTownhouses').hide();
        $('.carouselDuplexes').hide();
        $('.carouselPenthouses').show();
      });

  });