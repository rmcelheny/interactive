$(function(){

  $('#slowest1').mouseenter(function(){
      $('#slowest1').addClass('test');
      document.getElementById('secreto').play();
      document.getElementById('secreto').playbackRate = 0.5;
  });

  $('#slowest1').mouseout(function(){
     $('#slowest1').removeClass('test');
     document.getElementById('secreto').pause();
  });

    $('#slower1').mouseenter(function(){
      $('#slower1').addClass('test2');
      var myAudio = document.getElementById('secreto');
      myAudio.play();
      document.getElementById('secreto').playbackRate = .75;
  });

  $('#slower1').mouseout(function(){
     $('#slower1').removeClass('test2');
      var myAudio = document.getElementById('secreto');
      myAudio.pause();
  });

  $('#normal1').mouseenter(function(){
      $('#normal1').addClass('test3');
      var myAudio = document.getElementById('secreto');
      myAudio.play();
      document.getElementById('secreto').playbackRate = 1;
  });

  $('#normal1').mouseout(function(){
     $('#normal1').removeClass('test3');
      var myAudio = document.getElementById('secreto');
      myAudio.pause();
  });


  $('#slowest2').mouseenter(function(){
      $('#slowest2').addClass('test');
      document.getElementById('angel').play();
      document.getElementById('angel').playbackRate = 0.5;
  });

  $('#slowest2').mouseout(function(){
     $('#slowest2').removeClass('test');
     document.getElementById('angel').pause();
  });

    $('#slower2').mouseenter(function(){
      $('#slower2').addClass('test2');
      var myAudio = document.getElementById('angel');
      myAudio.play();
      document.getElementById('angel').playbackRate = .75;
  });

  $('#slower2').mouseout(function(){
     $('#slower2').removeClass('test2');
      var myAudio = document.getElementById('angel');
      myAudio.pause();
  });

  $('#normal2').mouseenter(function(){
      $('#normal2').addClass('test3');
      var myAudio = document.getElementById('angel');
      myAudio.play();
      document.getElementById('angel').playbackRate = 1;
  });

  $('#normal2').mouseout(function(){
     $('#normal2').removeClass('test3');
      var myAudio = document.getElementById('angel');
      myAudio.pause();
  });

  $('.track1').click(function(){
        var myAudio = document.getElementById("secreto");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

  $('.track2').click(function(){
        var myAudio = document.getElementById("angel");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });


  // $('#slowest').mouseenter(function(){
  //   document.getElementById('slowest').addClass('.test');
  //   // var myAudio = document.getElementById('secreto');
  //   // myAudio.play();
  //   // document.getElementById('secreto').playbackRate = 0.5;
  // }
  // });

  // $('#slowest').mouseout(function(){
  //   var myAudio = document.getElementById('secreto');
  //   myAudio.pause();
  // });

  // $('#slower').mouseenter(function(){
  //   if (!$('.spin').hasClass('pause')){
  //   document.getElementById('secreto').playbackRate = 0.75;
  //   cleanState();
  //   $('.spin').addClass('slower');
  // }
  // });

  // $('#slower').mouseout(function(){
  //   $('.spin').removeClass('slower');
  // });


  // $('#slow').mouseenter(function(){
  //   if (!$('.spin').hasClass('pause')){
  //   document.getElementById('secreto').playbackRate = 0.9;
  //   cleanState();
  //   $('.spin').addClass('slow');
  // }
  // });

  // $('#slow').mouseout(function(){
  //   $('.spin').removeClass('slow');
  // });

  // $('#normal').mouseenter(function(){
  //    if (!$('.spin').hasClass('pause')){
  //   document.getElementById('secreto').playbackRate = 1;
  //   cleanState();
  //   $('.spin').addClass('normal');
  // }
  // });

  // $('#normal').mouseout(function(){
  //   $('.spin').removeClass('normal');
  // });

  // $('#fast').mouseenter(function(){
  //   if (!$('.spin').hasClass('pause')){
  //   document.getElementById('secreto').playbackRate = 1.25;
  //   cleanState();
  //   $('.spin').addClass('fast');
  // }
  // });

  // $('#fast').mouseout(function(){
  //   $('.spin').removeClass('fast');
  // });

  // $('#faster').mouseenter(function(){
  //   if (!$('.spin').hasClass('pause')){
  //   document.getElementById('secreto').playbackRate = 2;
  //   cleanState();
  //   $('.spin').addClass('faster');
  // }
  // });

  // $('#faster').mouseout(function(){
  //   $('.spin').removeClass('faster');
  // });

});


// $('.containercontrol').click(function(){
//         // $('.spin').toggleClass('pause');
//         var myAudio = document.getElementById("secreto");
//         if (myAudio.paused) {
//           myAudio.play();
//         } else {
//           myAudio.pause();
//         }
//     });



//  $(document).ready(function(){
//   $(window).scroll(function() {
//     if ($(document).scrollTop() => 1200) {
//       $("body").addClass("test");
//     } else {
//       $("body").removeClass("test");
//     }
//   });
// });




