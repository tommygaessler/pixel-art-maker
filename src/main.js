$(document).ready(function() {
  console.log('test');

  var colors = ['red', 'blue', 'green'];
  var isDown = false;

  for (var i = 0; i < 1250; i++) {
    $('.canvas').append('<div class="box"></div>')
  }

  for (var i = 0; i < colors.length; i++) {
    $('.colors').append('<div class="color" style="background-color:' + colors[i] + '"></div>');
  }

  $('.erase').on('click', function() {
    $('.box').css('background-color', 'white');
    $('.color').css('border', 'none');
  });

  //colors, make loop

  $('.color').on('click', function() {
    $('.color').css('border', 'none');
    var position = $(this).index();
    $(this).css('border', '2px solid black');
    console.log(position);


    $('.box').on('click', function() {
      $(this).css('background-color', colors[position]);
    });

    $('.canvas > .box').mousedown(function() {
       isDown = true;
    })

    $('.canvas > .box').mouseup(function() {
       isDown = false;
    });

    $(".canvas > .box").mouseover(function() {
      if(isDown) {
        $(this).css('background-color', colors[position]);
      }
    });
  });
});
