$(document).ready(function() {
  console.log('test');

  var colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'gray', '#000000'];
  var isDown = false;

  for (var i = 0; i < 1232; i++) {
    $('.canvas').append('<div class="box"></div>')
  }

  for (var i = 0; i < colors.length; i++) {
    $('.colors').append('<div class="color" style="background-color:' + colors[i] + '"></div>');
  }

  // clear button

  $('.erase').append('<button class="clear">Clear</button>');

  $('.clear').on('click', function() {
    $('.box').css('background-color', 'white');
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
