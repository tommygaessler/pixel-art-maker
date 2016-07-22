$(document).ready(function() {

  var colors = ['red', 'orange', 'yellow'];
  var isDown = false;

  for (var i = 0; i < 1250; i++) {
    $('.canvas').append('<div class="box"></div>')
  }

  for (var i = 0; i < colors.length; i++) {
    $('.colors').append('<div class="color" style="background-color:' + colors[i] + '"></div>');
  }

  draw();

  $('form').on('submit', function (event) {

    event.preventDefault();

    var newColor = $('input').val();

    $('.colors').append('<div class="color" style="background-color:' + newColor + '"></div>');

    $("input").val('');

    colors.push(newColor);

    draw();

  });

  $('.clear').on('click', function() {
    $('.box').css('background-color', 'white');
    $('.color').css('border', 'none');
  });

  function draw() {
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
  }

  $('.erase').on('click', function() {
    $('.color').css('border', 'none');

    $('.box').on('click', function() {
      $(this).css('background-color', 'white');
    });

    $('.canvas > .box').mousedown(function() {
       isDown = true;
    })

    $('.canvas > .box').mouseup(function() {
       isDown = false;
    });

    $(".canvas > .box").mouseover(function() {
      if(isDown) {
        $(this).css('background-color', 'white');
      }
    });
  });



});
