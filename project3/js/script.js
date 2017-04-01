$(function(){

// LETTER CALL
  $('.letters').each(function() {

  var $letterWrapper = $(this);
  var letters = $letterWrapper.html().split('');
  var letterArray = [];

  for (i = 0; i < letters.length; i++) {
    console.log(letters[i]);

    var character = letters[i];
    var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
    var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
    
    letterArray.push(characterHTML);
  };

  $letterWrapper.html(letterArray);
  });

// CLEAN SLATE

  function cleanState(){
    $('.spin.left').attr('class', 'left spin');
    $('.spin.right').attr('class', 'right spin');
    $('.spin.middle').attr('class', 'middle spin');
  };

// TRACK 1 Playback 

  $('#slowest1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackone').play();
    document.getElementById('trackone').playbackRate = 0.5;
    cleanState();
    $('.spin').addClass('slowest');
  }
  });

  $('#slowest1').mouseout(function(){
    $('.spin').removeClass('slowest');
    document.getElementById('trackone').pause();
  });

  $('#slower1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackone').play();
    document.getElementById('trackone').playbackRate = 0.75;
    cleanState();
    $('.spin').addClass('slower');
  }
  });

  $('#slower1').mouseout(function(){
    $('.spin').removeClass('slower');
    document.getElementById('trackone').pause();
  });


  $('#slow1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackone').play();
    document.getElementById('trackone').playbackRate = 0.9;
    cleanState();
    $('.spin').addClass('slow');
  }
  });

  $('#slow1').mouseout(function(){
    $('.spin').removeClass('slow');
    document.getElementById('trackone').pause();
  });

  $('#normal1').mouseenter(function(){
     if (!$('.spin').hasClass('pause')){
    document.getElementById('trackone').play();
    document.getElementById('trackone').playbackRate = 1;
    cleanState();
    $('.spin').addClass('normal');
  }
  });

  $('#normal1').mouseout(function(){
    $('.spin').removeClass('normal');
    document.getElementById('trackone').pause();
  });

  $('#fast1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackone').play();
    document.getElementById('trackone').playbackRate = 1.25;
    cleanState();
    $('.spin').addClass('fast');
    $('.spin2').addClass('faster');
  }
  });

  $('#fast1').mouseout(function(){
    $('.spin').removeClass('fast');
    $('.spin2').removeClass('faster');
    document.getElementById('trackone').pause();
  });

  $('#faster1').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackone').play();
    document.getElementById('trackone').playbackRate = 2;
    cleanState();
    $('.spin').addClass('faster');
    $('.spin2').addClass('faster');
  }
  });

  $('#faster1').mouseout(function(){
    $('.spin').removeClass('faster');
    $('.spin2').removeClass('faster');
    document.getElementById('trackone').pause();
  });

// TRACK 2 Playback

  $('#slowest2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 0.5;
    cleanState();
    $('.track2.spin').addClass('slowest');
  }
  });

  $('#slowest2').mouseout(function(){
    $('.spin').removeClass('slowest');
    document.getElementById('tracktwo').pause();
  });

  $('#slower2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 0.75;
    cleanState();
    $('.spin').addClass('slower');
  }
  });

  $('#slower2').mouseout(function(){
    $('.spin').removeClass('slower');
    document.getElementById('tracktwo').pause();
  });


  $('#slow2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 0.9;
    cleanState();
    $('.spin').addClass('slow');
  }
  });

  $('#slow2').mouseout(function(){
    $('.spin').removeClass('slow');
    document.getElementById('tracktwo').pause();
  });

  $('#normal2').mouseenter(function(){
     if (!$('.spin').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 1;
    cleanState();
    $('.spin').addClass('normal');
  }
  });

  $('#normal2').mouseout(function(){
    $('.spin').removeClass('normal');
    document.getElementById('tracktwo').pause();
  });

  $('#fast2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 1.25;
    cleanState();
    $('.spin').addClass('fast');
  }
  });

  $('#fast2').mouseout(function(){
    $('.spin').removeClass('fast');
    document.getElementById('tracktwo').pause();
  });

  $('#faster2').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 2;
    cleanState();
    $('.spin').addClass('faster');
  }
  });

  $('#faster2').mouseout(function(){
    $('.spin').removeClass('faster');
    document.getElementById('tracktwo').pause();
  });

// TRACK 3 Playback

  $('#slowest3').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 0.5;
    cleanState();
    $('.spin').addClass('slowest');
  }
  });

  $('#slowest3').mouseout(function(){
    $('.spin').removeClass('slowest');
    document.getElementById('trackthree').pause();
  });

  $('#slower3').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 0.75;
    cleanState();
    $('.spin').addClass('slower');
  }
  });

  $('#slower3').mouseout(function(){
    $('.spin').removeClass('slower');
    document.getElementById('trackthree').pause();
  });


  $('#slow3').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 0.9;
    cleanState();
    $('.spin').addClass('slow');
  }
  });

  $('#slow3').mouseout(function(){
    $('.spin').removeClass('slow');
    document.getElementById('trackthree').pause();
  });

  $('#normal3').mouseenter(function(){
     if (!$('.spin').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 1;
    cleanState();
    $('.spin').addClass('normal');
  }
  });

  $('#normal3').mouseout(function(){
    $('.spin').removeClass('normal');
    document.getElementById('trackthree').pause();
  });

  $('#fast3').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 1.25;
    cleanState();
    $('.spin').addClass('fast');
  }
  });

  $('#fast3').mouseout(function(){
    $('.spin').removeClass('fast');
    document.getElementById('trackthree').pause();
  });

  $('#faster3').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 2;
    cleanState();
    $('.spin').addClass('faster');
  }
  });

  $('#faster3').mouseout(function(){
    $('.spin').removeClass('faster');
    document.getElementById('trackthree').pause();
  });

// TRACK 4 Playback

  $('#slowest4').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 0.5;
    cleanState();
    $('.spin').addClass('slowest');
  }
  });

  $('#slowest4').mouseout(function(){
    $('.spin').removeClass('slowest');
    document.getElementById('trackfour').pause();
  });

  $('#slower4').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 0.75;
    cleanState();
    $('.spin').addClass('slower');
  }
  });

  $('#slower4').mouseout(function(){
    $('.spin').removeClass('slower');
    document.getElementById('trackfour').pause();
  });


  $('#slow4').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 0.9;
    cleanState();
    $('.spin').addClass('slow');
  }
  });

  $('#slow4').mouseout(function(){
    $('.spin').removeClass('slow');
    document.getElementById('trackfour').pause();
  });

  $('#normal4').mouseenter(function(){
     if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 1;
    cleanState();
    $('.spin').addClass('normal');
  }
  });

  $('#normal4').mouseout(function(){
    $('.spin').removeClass('normal');
    document.getElementById('trackfour').pause();
  });

  $('#fast4').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 1.25;
    cleanState();
    $('.spin').addClass('fast');
  }
  });

  $('#fast4').mouseout(function(){
    $('.spin').removeClass('fast');
    document.getElementById('trackfour').pause();
  });

  $('#faster4').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 2;
    cleanState();
    $('.spin').addClass('faster');
  }
  });

  $('#faster4').mouseout(function(){
    $('.spin').removeClass('faster');
    document.getElementById('trackfour').pause();
  });

  // TRACK 5 Playback

  $('#slowest5').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 0.5;
    cleanState();
    $('.spin').addClass('slowest');
  }
  });

  $('#slowest5').mouseout(function(){
    $('.spin').removeClass('slowest');
    document.getElementById('trackfive').pause();
  });

  $('#slower5').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 0.75;
    cleanState();
    $('.spin').addClass('slower');
  }
  });

  $('#slower5').mouseout(function(){
    $('.spin').removeClass('slower');
    document.getElementById('trackfive').pause();
  });


  $('#slow5').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 0.9;
    cleanState();
    $('.spin').addClass('slow');
  }
  });

  $('#slow5').mouseout(function(){
    $('.spin').removeClass('slow');
    document.getElementById('trackfive').pause();
  });

  $('#normal5').mouseenter(function(){
     if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 1;
    cleanState();
    $('.spin').addClass('normal');
  }
  });

  $('#normal5').mouseout(function(){
    $('.spin').removeClass('normal');
    document.getElementById('trackfive').pause();
  });

  $('#fast5').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 1.25;
    cleanState();
    $('.spin').addClass('fast');
  }
  });

  $('#fast5').mouseout(function(){
    $('.spin').removeClass('fast');
    document.getElementById('trackfive').pause();
  });

  $('#faster5').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 2;
    cleanState();
    $('.spin').addClass('faster');
  }
  });

  $('#faster5').mouseout(function(){
    $('.spin').removeClass('faster');
    document.getElementById('trackfive').pause();
  });

  // TRACK 6 Playback

  $('#slowest6').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 0.5;
    cleanState();
    $('.spin').addClass('slowest');
  }
  });

  $('#slowest6').mouseout(function(){
    $('.spin').removeClass('slowest');
    document.getElementById('tracksix').pause();
  });

  $('#slower6').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 0.75;
    cleanState();
    $('.spin').addClass('slower');
  }
  });

  $('#slower6').mouseout(function(){
    $('.spin').removeClass('slower');
    document.getElementById('tracksix').pause();
  });


  $('#slow6').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 0.9;
    cleanState();
    $('.spin').addClass('slow');
  }
  });

  $('#slow6').mouseout(function(){
    $('.spin').removeClass('slow');
    document.getElementById('tracksix').pause();
  });

  $('#normal6').mouseenter(function(){
     if (!$('.spin').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 1;
    cleanState();
    $('.spin').addClass('normal');
  }
  });

  $('#normal6').mouseout(function(){
    $('.spin').removeClass('normal');
    document.getElementById('tracksix').pause();
  });

  $('#fast6').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 1.25;
    cleanState();
    $('.spin').addClass('fast');
  }
  });

  $('#fast6').mouseout(function(){
    $('.spin').removeClass('fast');
    document.getElementById('tracksix').pause();
  });

  $('#faster6').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 2;
    cleanState();
    $('.spin').addClass('faster');
  }
  });

  $('#faster6').mouseout(function(){
    $('.spin').removeClass('faster');
    document.getElementById('tracksix').pause();
  });

    $('#slowest7').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 0.5;
    cleanState();
    $('.spin').addClass('slowest');
  }
  });

  $('#slowest7').mouseout(function(){
    $('.spin').removeClass('slowest');
    document.getElementById('trackseven').pause();
  });

  $('#slower7').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 0.75;
    cleanState();
    $('.spin').addClass('slower');
  }
  });

  $('#slower7').mouseout(function(){
    $('.spin').removeClass('slower');
    document.getElementById('trackseven').pause();
  });


  $('#slow7').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 0.9;
    cleanState();
    $('.spin').addClass('slow');
  }
  });

  $('#slow7').mouseout(function(){
    $('.spin').removeClass('slow');
    document.getElementById('trackseven').pause();
  });

  $('#normal7').mouseenter(function(){
     if (!$('.spin').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 1;
    cleanState();
    $('.spin').addClass('normal');
  }
  });

  $('#normal7').mouseout(function(){
    $('.spin').removeClass('normal');
    document.getElementById('trackseven').pause();
  });

  $('#fast7').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 1.25;
    cleanState();
    $('.spin').addClass('fast');
  }
  });

  $('#fast7').mouseout(function(){
    $('.spin').removeClass('fast');
    document.getElementById('trackseven').pause();
  });

  $('#faster7').mouseenter(function(){
    if (!$('.spin').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 2;
    cleanState();
    $('.spin').addClass('faster');
  }
  });

  $('#faster7').mouseout(function(){
    $('.spin').removeClass('faster');
    document.getElementById('trackseven').pause();
  });

  // CLICK TO PAUSE TRACKS//

  $('.track1').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("trackone");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

  $('.track2').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("tracktwo");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

    $('.track3').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("trackthree");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

  $('.track4').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("trackfour");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

    $('.track5').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("trackfive");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

    $('.track6').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("tracksix");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

      $('.track7').click(function(){
        $('.spin').toggleClass('pause');
        var myAudio = document.getElementById("trackseven");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });


});



