$(function(){

  function cleanState(){
    $('.spin.left').attr('class', 'left spin');
    $('.spin.right').attr('class', 'right spin');
    $('.spin.middle').attr('class', 'middle spin');
  }

    $('#slowest').mouseover(function(){
      	document.getElementById('secreto').playbackRate = 0.5;
        cleanState();
        $('.spin').addClass('slowest');
    });

    $('#slower').mouseover(function(){
      document.getElementById('secreto').playbackRate = 0.75;
      cleanState();
      $('.spin').addClass('slower');
    });

    $('#slow').mouseover(function(){
    	document.getElementById('secreto').playbackRate = 0.9;
      cleanState();
      $('.spin').addClass('slow');
    });

    $('#normal').mouseover(function(){
    	document.getElementById('secreto').playbackRate = 1;
      cleanState();
      $('.spin').addClass('normal');
    });

    $('#fast').mouseover(function(){
    	document.getElementById('secreto').playbackRate = 1.25;
      cleanState();
      $('.spin').addClass('fast');
    });

    $('#faster').mouseover(function(){
    	document.getElementById('secreto').playbackRate = 2;
      cleanState();
      $('.spin').addClass('faster');
    });

});

$('.containercontrol').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("secreto");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });



//  $(document).ready(function(){
//   $(window).scroll(function() {
//     if ($(document).scrollTop() => 1200) {
//       $("body").addClass("test");
//     } else {
//       $("body").removeClass("test");
//     }
//   });
// });




