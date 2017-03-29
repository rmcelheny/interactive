$(function(){

// CLEAN SLATE

  function cleanState(){
    $('.spin.left').attr('class', 'left spin');
    $('.spin.right').attr('class', 'right spin');
    $('.spin.middle').attr('class', 'middle spin');
  };

// TRACK 1 Playback 

  $('#slowest1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('secreto').play();
    document.getElementById('secreto').playbackRate = 0.5;
    cleanState();
    $('.spin').addClass('slowest');
  }
  });

  $('#slowest1').mouseout(function(){
    $('.spin').removeClass('slowest');
    document.getElementById('secreto').pause();
  });

  $('#slower1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('secreto').play();
    document.getElementById('secreto').playbackRate = 0.75;
    cleanState();
    $('.spin').addClass('slower');
  }
  });

  $('#slower1').mouseout(function(){
    $('.spin').removeClass('slower');
    document.getElementById('secreto').pause();
  });


  $('#slow1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('secreto').play();
    document.getElementById('secreto').playbackRate = 0.9;
    cleanState();
    $('.spin').addClass('slow');
  }
  });

  $('#slow1').mouseout(function(){
    $('.spin').removeClass('slow');
    document.getElementById('secreto').pause();
  });

  $('#normal1').mouseenter(function(){
     if (!$('.spin').hasClass('pause')){
    document.getElementById('secreto').play();
    document.getElementById('secreto').playbackRate = 1;
    cleanState();
    $('.spin').addClass('normal');
  }
  });

  $('#normal1').mouseout(function(){
    $('.spin').removeClass('normal');
    document.getElementById('secreto').pause();
  });

  $('#fast1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('secreto').play();
    document.getElementById('secreto').playbackRate = 1.25;
    cleanState();
    $('.spin').addClass('fast');
  }
  });

  $('#fast1').mouseout(function(){
    $('.spin').removeClass('fast');
    document.getElementById('secreto').pause();
  });

  $('#faster1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('secreto').play();
    document.getElementById('secreto').playbackRate = 2;
    cleanState();
    $('.spin').addClass('faster');
  }
  });

  $('#faster1').mouseout(function(){
    $('.spin').removeClass('faster');
    document.getElementById('secreto').pause();
  });

// TRACK 2 Playback

  $('#slowest2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('angel').play();
    document.getElementById('angel').playbackRate = 0.5;
    cleanState();
    $('.spin').addClass('slowest');
  }
  });

  $('#slowest2').mouseout(function(){
    $('.spin').removeClass('slowest');
    document.getElementById('angel').pause();
  });

  $('#slower2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('angel').play();
    document.getElementById('angel').playbackRate = 0.75;
    cleanState();
    $('.spin').addClass('slower');
  }
  });

  $('#slower2').mouseout(function(){
    $('.spin').removeClass('slower');
    document.getElementById('angel').pause();
  });


  $('#slow2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('angel').play();
    document.getElementById('angel').playbackRate = 0.9;
    cleanState();
    $('.spin').addClass('slow');
  }
  });

  $('#slow2').mouseout(function(){
    $('.spin').removeClass('slow');
    document.getElementById('angel').pause();
  });

  $('#normal2').mouseenter(function(){
     if (!$('.spin').hasClass('pause')){
    document.getElementById('angel').play();
    document.getElementById('angel').playbackRate = 1;
    cleanState();
    $('.spin').addClass('normal');
  }
  });

  $('#normal2').mouseout(function(){
    $('.spin').removeClass('normal');
    document.getElementById('angel').pause();
  });

  $('#fast2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('angel').play();
    document.getElementById('angel').playbackRate = 1.25;
    cleanState();
    $('.spin').addClass('fast');
  }
  });

  $('#fast2').mouseout(function(){
    $('.spin').removeClass('fast');
    document.getElementById('angel').pause();
  });

  $('#faster2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('angel').play();
    document.getElementById('angel').playbackRate = 2;
    cleanState();
    $('.spin').addClass('faster');
  }
  });

  $('#faster2').mouseout(function(){
    $('.spin').removeClass('faster');
    document.getElementById('angel').pause();
  });


  // CLICK TO PAUSE TRACKS//

  $('.track1').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("secreto");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

  $('.track2').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("angel");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });



});



