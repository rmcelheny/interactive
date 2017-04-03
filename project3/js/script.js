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







// // TRACK 1 Playback 

//   $('#slowest1').mouseenter(function(){
//     if (!$('.spin1').hasClass('pause')){
//     document.getElementById('trackone').play();
//     document.getElementById('trackone').playbackRate = 0.5;
//     cleanState();
//     $('.spin1').addClass('slowest');
//   }
//   });

//   $('#slowest1').mouseout(function(){
//     $('.spin1').removeClass('slowest');
//     document.getElementById('trackone').pause();
//   });

//   $('#slower1').mouseenter(function(){
//     if (!$('.spin1').hasClass('pause')){
//     document.getElementById('trackone').play();
//     document.getElementById('trackone').playbackRate = 0.75;
//     cleanState();
//     $('.spin1').addClass('slower');
//     $('.spin2').addClass('slower');
//   }
//   });

//   $('#slower1').mouseout(function(){
//     $('.spin1').removeClass('slower');
//     $('.spin2').removeClass('slower');
//     document.getElementById('trackone').pause();
//   });


//   $('#slow1').mouseenter(function(){
//     if (!$('.spin1').hasClass('pause')){
//     document.getElementById('trackone').play();
//     document.getElementById('trackone').playbackRate = 0.9;
//     cleanState();
//     $('.spin1').addClass('slow');
//     $('.spin2').addClass('slow');
//     $('.spin3').addClass('slow');
//   }
//   });

//   $('#slow1').mouseout(function(){
//     $('.spin1').removeClass('slow');
//     $('.spin2').removeClass('slow');
//     $('.spin3').removeClass('slow');
//     document.getElementById('trackone').pause();
//   });

//   $('#normal1').mouseenter(function(){
//      if (!$('.spin1').hasClass('pause')){
//     document.getElementById('trackone').play();
//     document.getElementById('trackone').playbackRate = 1;
//     cleanState();
//     $('.spin1').addClass('normal');
//     $('.spin2').addClass('normal');
//     $('.spin3').addClass('normal');
//     $('.spin4').addClass('normal');
//   }
//   });

//   $('#normal1').mouseout(function(){
//     $('.spin1').removeClass('normal');
//     $('.spin2').removeClass('normal');
//     $('.spin3').removeClass('normal');
//     $('.spin4').removeClass('normal');
//     document.getElementById('trackone').pause();
//   });

//   $('#fast1').mouseenter(function(){
//     if (!$('.spin1').hasClass('pause')){
//     document.getElementById('trackone').play();
//     document.getElementById('trackone').playbackRate = 1.25;
//     cleanState();
//     $('.spin1').addClass('fast');
//     $('.spin2').addClass('fast');
//     $('.spin3').addClass('fast');
//     $('.spin4').addClass('fast');
//     $('.spin5').addClass('fast');
//   }
//   });

//   $('#fast1').mouseout(function(){
//     $('.spin1').removeClass('fast');
//     $('.spin2').removeClass('fast');
//     $('.spin3').removeClass('fast');
//     $('.spin4').removeClass('fast');
//     $('.spin5').removeClass('fast');
//     document.getElementById('trackone').pause();
//   });

//   $('#faster1').mouseenter(function(){
//     if (!$('.spin1').hasClass('pause')){
//     document.getElementById('trackone').play();
//     document.getElementById('trackone').playbackRate = 2;
//     cleanState();
//     $('.spin1').addClass('faster');
//     $('.spin2').addClass('faster');
//     $('.spin3').addClass('faster');
//     $('.spin4').addClass('faster');
//     $('.spin5').addClass('faster');
//     $('.spin6').addClass('faster');        
//   }
//   });

//   $('#faster1').mouseout(function(){
//     $('.spin1').removeClass('faster');
//     $('.spin2').removeClass('faster');
//     $('.spin3').removeClass('faster');
//     $('.spin4').removeClass('faster');
//     $('.spin5').removeClass('faster');
//     $('.spin6').removeClass('faster');                
//     document.getElementById('trackone').pause();
//   });




// TRACK 2 Playback  i'm stil waiting

  $('#slowest2').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 0.5;
    cleanState();
    $('.spin1').addClass('slowest');
  }
  });

  $('#slowest2').mouseout(function(){
    $('.spin1').removeClass('slowest');
    document.getElementById('tracktwo').pause();
  });

  $('#slower2').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 0.75;
    cleanState();
    $('.spin1').addClass('slowersixty');
    // $('.spin2').addClass('slower');
  }
  });

  $('#slower2').mouseout(function(){
    $('.spin1').removeClass('slowersixty');
    // $('.spin2').removeClass('slower');
    document.getElementById('tracktwo').pause();
  });


  $('#slow2').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 0.9;
    cleanState();
    $('.spin1').addClass('slower');
    // $('.spin2').addClass('slow');
    // $('.spin3').addClass('slow');
  }
  });

  $('#slow2').mouseout(function(){
    $('.spin1').removeClass('slower');
    // $('.spin2').removeClass('slow');
    // $('.spin3').removeClass('slow');
    document.getElementById('tracktwo').pause();
  });

  $('#normal2').mouseenter(function(){
     if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 1;
    cleanState();
    $('.spin1').addClass('slow');
    // $('.spin2').addClass('normal');
    // $('.spin3').addClass('normal');
    // $('.spin4').addClass('normal');
  }
  });

  $('#normal2').mouseout(function(){
    $('.spin1').removeClass('slow');
    // $('.spin2').removeClass('normal');
    // $('.spin3').removeClass('normal');
    // $('.spin4').removeClass('normal');
    document.getElementById('tracktwo').pause();
  });

  $('#fast2').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 1.25;
    cleanState();
    $('.spin1').addClass('normal');
    // $('.spin2').addClass('fast');
    // $('.spin3').addClass('fast');
    // $('.spin4').addClass('fast');
    // $('.spin5').addClass('fast');
  }
  });

  $('#fast2').mouseout(function(){
    $('.spin1').removeClass('normal');
    // $('.spin2').removeClass('fast');
    // $('.spin3').removeClass('fast');
    // $('.spin4').removeClass('fast');
    // $('.spin5').removeClass('fast');
    document.getElementById('tracktwo').pause();
  });

  $('#faster2').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracktwo').play();
    document.getElementById('tracktwo').playbackRate = 2;
    cleanState();
    $('.spin1').addClass('fast');
    // $('.spin2').addClass('faster');
    // $('.spin3').addClass('faster');
    // $('.spin4').addClass('faster');
    // $('.spin5').addClass('faster');
    // $('.spin6').addClass('faster');        
  }
  });

  $('#faster2').mouseout(function(){
    $('.spin1').removeClass('fast');
    // $('.spin2').removeClass('faster');
    // $('.spin3').removeClass('faster');
    // $('.spin4').removeClass('faster');
    // $('.spin5').removeClass('faster');
    // $('.spin6').removeClass('faster');                
    document.getElementById('tracktwo').pause();
  });







// TRACK 3 Playback go to him

  $('#slowest3').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 0.5;
    cleanState();
    $('.spin1').addClass('slowest');
    $('.spin2').addClass('slowest');
    $('.spin3').addClass('slowest');
    $('.spin4').addClass('slowest');
  }
  });

  $('#slowest3').mouseout(function(){
    $('.spin1').removeClass('slowest');
    $('.spin2').removeClass('slowest');
    $('.spin3').removeClass('slowest');
    $('.spin4').removeClass('slowest');
    document.getElementById('trackthree').pause();
  });

  $('#slower3').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 0.75;
    cleanState();
    $('.spin1').addClass('slower');
    $('.spin2').addClass('slower');
    $('.spin3').addClass('slower');
    $('.spin4').addClass('slower');
  }
  });

  $('#slower3').mouseout(function(){
    $('.spin1').removeClass('slower');
    $('.spin2').removeClass('slower');
    $('.spin3').removeClass('slower');
    $('.spin4').removeClass('slower');
    document.getElementById('trackthree').pause();
  });


  $('#slow3').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 0.9;
    cleanState();
    $('.spin1').addClass('slow');
    $('.spin2').addClass('slow');
    $('.spin3').addClass('slow');
    $('.spin4').addClass('slow');
  }
  });

  $('#slow3').mouseout(function(){
    $('.spin1').removeClass('slow');
    $('.spin2').removeClass('slow');
    $('.spin3').removeClass('slow');
    $('.spin4').removeClass('slow');
    document.getElementById('trackthree').pause();
  });

  $('#normal3').mouseenter(function(){
     if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 1;
    cleanState();
    $('.spin1').addClass('normal');
    $('.spin2').addClass('normal');
    $('.spin3').addClass('normal');
    $('.spin4').addClass('normal');
  }
  });

  $('#normal3').mouseout(function(){
    $('.spin1').removeClass('normal');
    $('.spin2').removeClass('normal');
    $('.spin3').removeClass('normal');
    $('.spin4').removeClass('normal');
    document.getElementById('trackthree').pause();
  });

  $('#fast3').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 1.25;
    cleanState();
    $('.spin1').addClass('fast');
    $('.spin2').addClass('fast');
    $('.spin3').addClass('fast');
    $('.spin4').addClass('fast');
  }
  });

  $('#fast3').mouseout(function(){
    $('.spin1').removeClass('fast');
    $('.spin2').removeClass('fast');
    $('.spin3').removeClass('fast');
    $('.spin4').removeClass('fast');
    document.getElementById('trackthree').pause();
  });

  $('#faster3').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackthree').play();
    document.getElementById('trackthree').playbackRate = 2;
    cleanState();
    $('.spin1').addClass('faster');
    $('.spin2').addClass('faster');
    $('.spin3').addClass('faster');
    $('.spin4').addClass('faster');      
  }
  });

  $('#faster3').mouseout(function(){
    $('.spin1').removeClass('faster');
    $('.spin2').removeClass('faster');
    $('.spin3').removeClass('faster');
    $('.spin4').removeClass('faster');              
    document.getElementById('trackthree').pause();
  });











// TRACK 4 Playback  REGGAE IS BACK AGAIN

  $('#slowest4').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 0.5;
    cleanState();
    $('.spin1').addClass('slowest');
    $('.spin2').addClass('slowest');
    // $('.spin3').addClass('slowest');
    // $('.spin4').addClass('slowest');
    // $('.spin5').addClass('slowest');
    // $('.spin6').addClass('slowest');
  }
  });

  $('#slowest4').mouseout(function(){
    $('.spin1').removeClass('slowest');
    $('.spin2').removeClass('slowest');
    // $('.spin3').removeClass('slowest');
    // $('.spin4').removeClass('slowest');
    // $('.spin5').removeClass('slowest');
    //  $('.spin6').removeClass('slowest');           
    document.getElementById('trackfour').pause();
  });

  $('#slower4').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 0.75;
    cleanState();
    $('.spin1').addClass('slower');
    $('.spin2').addClass('slower');
    $('.spin3').addClass('slower');
    // $('.spin4').addClass('slower');
    // $('.spin5').addClass('slower');
    // $('.spin6').addClass('slower');
  }
  });

  $('#slower4').mouseout(function(){
    $('.spin1').removeClass('slower');
    $('.spin2').removeClass('slower');
    $('.spin3').removeClass('slower');
    // $('.spin4').removeClass('slower');
    // $('.spin5').removeClass('slower');
    // $('.spin6').removeClass('slower');
    document.getElementById('trackfour').pause();
  });


  $('#slow4').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 0.9;
    cleanState();
    $('.spin1').addClass('slow');
    $('.spin2').addClass('slow');
    $('.spin3').addClass('slow');
    $('.spin4').addClass('slow');
    // $('.spin5').addClass('slow');
    // $('.spin6').addClass('slow');
  }
  });

  $('#slow4').mouseout(function(){
    $('.spin1').removeClass('slow');
    $('.spin2').removeClass('slow');
    $('.spin3').removeClass('slow');
    $('.spin4').removeClass('slow');
    // $('.spin5').removeClass('slow');
    // $('.spin6').removeClass('slow');
    document.getElementById('trackfour').pause();
  });

  $('#normal4').mouseenter(function(){
     if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 1;
    cleanState();
    $('.spin1').addClass('normal');
    $('.spin2').addClass('normal');
    $('.spin3').addClass('normal');
    $('.spin4').addClass('normal');
    $('.spin5').addClass('normal');
    // $('.spin6').addClass('normal');
  }
  });

  $('#normal4').mouseout(function(){
    $('.spin1').removeClass('normal');
    $('.spin2').removeClass('normal');
    $('.spin3').removeClass('normal');
    $('.spin4').removeClass('normal');
    $('.spin5').removeClass('normal');
    // $('.spin6').removeClass('normal');
    document.getElementById('trackfour').pause();
  });

  $('#fast4').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 1.25;
    cleanState();
    $('.spin1').addClass('fast');
    $('.spin2').addClass('fast');
    $('.spin3').addClass('fast');
    $('.spin4').addClass('fast');
    $('.spin5').addClass('fast');
    $('.spin6').addClass('fast');
  }
  });

  $('#fast4').mouseout(function(){
    $('.spin1').removeClass('fast');
    $('.spin2').removeClass('fast');
    $('.spin3').removeClass('fast');
    $('.spin4').removeClass('fast');
    $('.spin5').removeClass('fast');
    $('.spin6').removeClass('fast');
    document.getElementById('trackfour').pause();
  });

  $('#faster4').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfour').play();
    document.getElementById('trackfour').playbackRate = 2;
    cleanState();
    $('.spin1').addClass('faster');
    $('.spin2').addClass('faster');
    $('.spin3').addClass('faster');
    $('.spin4').addClass('faster');
    $('.spin5').addClass('faster');
    $('.spin6').addClass('faster');        
  }
  });

  $('#faster4').mouseout(function(){
    $('.spin1').removeClass('faster');
    $('.spin2').removeClass('faster');
    $('.spin3').removeClass('faster');
    $('.spin4').removeClass('faster');
    $('.spin5').removeClass('faster');
    $('.spin6').removeClass('faster');                
    document.getElementById('trackfour').pause();
  });








  // TRACK 5 Playback DIRTY BACK ROADS

  $('#slowest5').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 0.5;
    cleanState();
    $('.spin1').addClass('slowest');
    $('.spin2').addClass('slowest');
    $('.spin3').addClass('slowest');
  }
  });

  $('#slowest5').mouseout(function(){
    $('.spin1').removeClass('slowest');
    $('.spin2').removeClass('slowest');
    $('.spin3').removeClass('slowest');
    document.getElementById('trackfive').pause();
  });

  $('#slower5').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 0.75;
    cleanState();
    $('.spin1').addClass('slower');
    $('.spin2').addClass('slower');
    $('.spin3').addClass('slower');
  }
  });

  $('#slower5').mouseout(function(){
    $('.spin1').removeClass('slower');
    $('.spin2').removeClass('slower');
    $('.spin3').removeClass('slower');
    document.getElementById('trackfive').pause();
  });


  $('#slow5').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 0.9;
    cleanState();
    $('.spin1').addClass('slow');
    $('.spin2').addClass('slow');
    $('.spin3').addClass('slow');
  }
  });

  $('#slow5').mouseout(function(){
    $('.spin1').removeClass('slow');
    $('.spin2').removeClass('slow');
    $('.spin3').removeClass('slow');
    document.getElementById('trackfive').pause();
  });

  $('#normal5').mouseenter(function(){
     if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 1;
    cleanState();
    $('.spin1').addClass('normal');
    $('.spin2').addClass('normal');
    $('.spin3').addClass('normal');
    $('.spin4').addClass('normal');
  }
  });

  $('#normal5').mouseout(function(){
    $('.spin1').removeClass('normal');
    $('.spin2').removeClass('normal');
    $('.spin3').removeClass('normal');
    $('.spin4').removeClass('normal');
    document.getElementById('trackfive').pause();
  });

  $('#fast5').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 1.25;
    cleanState();
    $('.spin1').addClass('fast');
    $('.spin2').addClass('fast');
    $('.spin3').addClass('fast');
    $('.spin4').addClass('fast');
    $('.spin5').addClass('fast');
  }
  });

  $('#fast5').mouseout(function(){
    $('.spin1').removeClass('fast');
    $('.spin2').removeClass('fast');
    $('.spin3').removeClass('fast');
    $('.spin4').removeClass('fast');
    $('.spin5').removeClass('fast');
    document.getElementById('trackfive').pause();
  });

  $('#faster5').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackfive').play();
    document.getElementById('trackfive').playbackRate = 2;
    cleanState();
    $('.spin1').addClass('faster');
    $('.spin2').addClass('faster');
    $('.spin3').addClass('faster');
    $('.spin4').addClass('faster');
    $('.spin5').addClass('faster');     
  }
  });

  $('#faster5').mouseout(function(){
    $('.spin1').removeClass('faster');
    $('.spin2').removeClass('faster');
    $('.spin3').removeClass('faster');
    $('.spin4').removeClass('faster');
    $('.spin5').removeClass('faster');   
    document.getElementById('trackfive').pause();
  });








  // TRACK 6 Playback 

  $('#slowest6').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 0.5;
    cleanState();
    $('.spin1').addClass('slowest');
  }
  });

  $('#slowest6').mouseout(function(){
    $('.spin1').removeClass('slowest');
    document.getElementById('tracksix').pause();
  });

  $('#slower6').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 0.75;
    cleanState();
    $('.spin1').addClass('slower');
    $('.spin2').addClass('slower');
  }
  });

  $('#slower6').mouseout(function(){
    $('.spin1').removeClass('slower');
    $('.spin2').removeClass('slower');
    document.getElementById('tracksix').pause();
  });

  $('#slow6').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 0.9;
    cleanState();
    $('.spin1').addClass('slow');
    $('.spin2').addClass('slow');
    $('.spin3').addClass('slow');
  }
  });

  $('#slow6').mouseout(function(){
    $('.spin1').removeClass('slow');
    $('.spin2').removeClass('slow');
    $('.spin3').removeClass('slow');
    document.getElementById('tracksix').pause();
  });

  $('#normal6').mouseenter(function(){
     if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 1;
    cleanState();
    $('.spin1').addClass('normal');
    $('.spin2').addClass('normal');
    $('.spin3').addClass('normal');
    $('.spin4').addClass('normal');
  }
  });

  $('#normal6').mouseout(function(){
    $('.spin1').removeClass('normal');
    $('.spin2').removeClass('normal');
    $('.spin3').removeClass('normal');
    $('.spin4').removeClass('normal');
    document.getElementById('tracksix').pause();
  });

  $('#fast6').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 1.25;
    cleanState();
    $('.spin1').addClass('fast');
    $('.spin2').addClass('fast');
    $('.spin3').addClass('fast');
    $('.spin4').addClass('fast');
    $('.spin5').addClass('fast');
  }
  });

  $('#fast6').mouseout(function(){
    $('.spin1').removeClass('fast');
    $('.spin2').removeClass('fast');
    $('.spin3').removeClass('fast');
    $('.spin4').removeClass('fast');
    $('.spin5').removeClass('fast');
    document.getElementById('tracksix').pause();
  });

  $('#faster6').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('tracksix').play();
    document.getElementById('tracksix').playbackRate = 2;
    cleanState();
    $('.spin1').addClass('faster');
    $('.spin2').addClass('faster');
    $('.spin3').addClass('faster');
    $('.spin4').addClass('faster');
    $('.spin5').addClass('faster');
    // $('.spin6').addClass('faster');        
  }
  });

  $('#faster6').mouseout(function(){
    $('.spin1').removeClass('faster');
    $('.spin2').removeClass('faster');
    $('.spin3').removeClass('faster');
    $('.spin4').removeClass('faster');
    $('.spin5').removeClass('faster');
    // $('.spin6').removeClass('faster');                
    document.getElementById('tracksix').pause();
  });










// TRACK 7 Playback CHRONIC DOPE

  $('#slowest7').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 0.5;
    cleanState();
    // $('.spin1').addClass('slowest');
    $('.spin6').addClass('slowest');
  }
  });

  $('#slowest7').mouseout(function(){
    $('.spin6').removeClass('slowest');
    document.getElementById('trackseven').pause();
  });

  $('#slower7').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 0.75;
    cleanState();
    $('.spin6').addClass('slowersixty');
  }
  });

  $('#slower7').mouseout(function(){
    $('.spin6').removeClass('slowersixty');
    document.getElementById('trackseven').pause();
  });

  $('#slow7').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 0.9;
    cleanState();
    $('.spin6').addClass('slower');
  }
  });

  $('#slow7').mouseout(function(){
    $('.spin6').removeClass('slower');
    document.getElementById('trackseven').pause();
  });

  $('#normal7').mouseenter(function(){
     if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 1;
    cleanState();
    $('.spin6').addClass('slow');
  }
  });

  $('#normal7').mouseout(function(){
    $('.spin6').removeClass('slow');
    document.getElementById('trackseven').pause();
  });

  $('#fast7').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 1.25;
    cleanState();
    $('.spin6').addClass('normal');
  }
  });

  $('#fast7').mouseout(function(){
    $('.spin6').removeClass('normal');
    document.getElementById('trackseven').pause();
  });

  $('#faster7').mouseenter(function(){
    if (!$('.spin1').hasClass('pause')){
    document.getElementById('trackseven').play();
    document.getElementById('trackseven').playbackRate = 2;
    cleanState();
    $('.spin6').addClass('fast');        
  }
  });

  $('#faster7').mouseout(function(){
    $('.spin6').removeClass('fast');                
    document.getElementById('trackseven').pause();
  });


  // CLICK TO PAUSE TRACKS//

  $('.track1').click(function(){
        $('.spin1').toggleClass('pause');
        $('.spin2').toggleClass('pause');
        $('.spin3').toggleClass('pause');
        $('.spin4').toggleClass('pause');
        $('.spin5').toggleClass('pause');
        $('.spin6').toggleClass('pause');
        var myAudio = document.getElementById("trackone");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

  $('.track2').click(function(){
        $('.spin1').toggleClass('pause');
        $('.spin2').toggleClass('pause');
        $('.spin3').toggleClass('pause');
        $('.spin4').toggleClass('pause');
        $('.spin5').toggleClass('pause');
        $('.spin6').toggleClass('pause');
        var myAudio = document.getElementById("tracktwo");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

    $('.track3').click(function(){
        $('.spin1').toggleClass('pause');
        $('.spin2').toggleClass('pause');
        $('.spin3').toggleClass('pause');
        $('.spin4').toggleClass('pause');
        $('.spin5').toggleClass('pause');
        $('.spin6').toggleClass('pause');
        var myAudio = document.getElementById("trackthree");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

  $('.track4').click(function(){
        $('.spin1').toggleClass('pause');
        $('.spin2').toggleClass('pause');
        $('.spin3').toggleClass('pause');
        $('.spin4').toggleClass('pause');
        $('.spin5').toggleClass('pause');
        $('.spin6').toggleClass('pause');
        var myAudio = document.getElementById("trackfour");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

    $('.track5').click(function(){
        $('.spin1').toggleClass('pause');
        $('.spin2').toggleClass('pause');
        $('.spin3').toggleClass('pause');
        $('.spin4').toggleClass('pause');
        $('.spin5').toggleClass('pause');
        $('.spin6').toggleClass('pause');
        var myAudio = document.getElementById("trackfive");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

    $('.track6').click(function(){
        $('.spin1').toggleClass('pause');
        $('.spin2').toggleClass('pause');
        $('.spin3').toggleClass('pause');
        $('.spin4').toggleClass('pause');
        $('.spin5').toggleClass('pause');
        $('.spin6').toggleClass('pause');
        var myAudio = document.getElementById("tracksix");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

      $('.track7').click(function(){
        $('.spin1').toggleClass('pause');
        $('.spin2').toggleClass('pause');
        $('.spin3').toggleClass('pause');
        $('.spin4').toggleClass('pause');
        $('.spin5').toggleClass('pause');
        $('.spin6').toggleClass('pause');
        var myAudio = document.getElementById("trackseven");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });


});



