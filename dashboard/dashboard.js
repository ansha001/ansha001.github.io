//Your progress bar graph animation

setTimeout(function start (){
  
    $('.bar').each(function(i){  
      var $bar = $(this);
      $(this).append('<span class="count"></span>')
      setTimeout(function(){
        $bar.css('width', $bar.attr('data-percent'));      
      }, i*100);
    });
   
  $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).parent('.bar').attr('data-percent')
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now) +'%');
          }
      });
  });
   
}, 500)

//Pie-chart animation

var percentage = 70;
var total = 158;

$( document ).ready(function() {
    var result = ((percentage * total) / 100);
  
    $('.pie').css('strokeDasharray', result);
});
