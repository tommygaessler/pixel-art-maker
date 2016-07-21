$(document).ready(function() {
  console.log('test');

  var colors = ['red', 'blue', 'green'];
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

    $('.color:nth-child(' + position + ')').on('click', function() {


      $('.box').on('click', function() {
        $(this).css('background-color', colors[position-1]);
      });

      $('.canvas > .box').mousedown(function() {
         isDown = true;
       })
      $('.canvas > .box').mouseup(function() {
         isDown = false;
       });

      $(".canvas > .box").mouseover(function() {
        if(isDown) {
          $(this).css('background-color', colors[position-1]);
        }
       });
    });
  });

  // $('.color:nth-child(2)').on('click', function() {
  //   $('.color').css('border', 'none');
  //   $(this).css('border', '2px solid black');
  //
  //   $('.box').on('click', function() {
  //     $(this).css('background-color', colors[1]);
  //   });
  //
  //   $('.canvas > .box').mousedown(function() {
  //      isDown = true;      // When mouse goes down, set isDown to true
  //    })
  //   $('.canvas > .box').mouseup(function() {
  //      isDown = false;    // When mouse goes up, set isDown to false
  //    });
  //
  //   $(".canvas > .box").mouseover(function() {
  //     if(isDown) {        // Only change css if mouse is down
  //       $(this).css('background-color', colors[1]);
  //     }
  //    });
  // });

  // $('.color:nth-child(3)').on('click', function() {
  //   $('.color').css('border', 'none');
  //   $(this).css('border', '2px solid black');
  //
  //   $('.box').on('click', function() {
  //     $(this).css('background-color', colors[2]);
  //   });
  //
  //   $('.canvas > .box').mousedown(function() {
  //      isDown = true;      // When mouse goes down, set isDown to true
  //    })
  //   $('.canvas > .box').mouseup(function() {
  //      isDown = false;    // When mouse goes up, set isDown to false
  //    });
  //
  //   $(".canvas > .box").mouseover(function() {
  //     if(isDown) {        // Only change css if mouse is down
  //       $(this).css('background-color', colors[2]);
  //     }
  //    });
  //
  //
  // });
});
