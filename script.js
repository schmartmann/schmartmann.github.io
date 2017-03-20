"use strict";
$(function(){

var rooms = [
//create array housing each room's attributes like display text, correct answer, and coordinates
     {name: 'room-0',
      top: "280px",
      left: "500px",
      prompt: "You loaned your charger to someone... I want to say... Nathan? Shit, where is it!?",
      reject: "Not there... It had something to do with music",
      answer: "guitar",
      reveal: "Under the guitar... of course..."
    },
     {name: 'room-1',
      top: "300px",
      left: "785px",
      prompt: "Oh, man. It's your friend looking for your 'honest' feedback on a mixtape",
      reject: "Are you sure? You can really be honest!",
      answer: "perfect",
      reveal: "Yup! The only 'honest' feedback most people really want"
    },
     {name: 'room-2',
      top: "645px",
      left: "560px",
      prompt: "Outside the bathroom, you notice a terrible painting. What is that even supposed to be?",
      reject: "Maybe that blue thing at the bottom is supposed to be the ocean?...",
      answer: "boat",
      reveal: "You learn as much from bad art as you do from good art."
    },
     {name: 'room-3',
      top: "550px",
      left: "940px",
      prompt: "Which suit of armor did you wear to this party? Classic house party problem.",
      reject: "That looks like someone else's: maybe in the middle?",
      answer: "middle",
      reveal: "Phew! Imagine how embarrassing it'd be to leave wearing someone ELSE's armor?"
    },
     {name:'room-4',
      top: "900px",
      left: "500px",
      prompt: "That book on the table is the one you loaned your friend years ago. What do you do?",
      reject: "You've definitely brought it up with them more than once...",
      answer: "take",
      reveal: "I bet they didn't even start reading it!"
   },
     {name: 'room-5',
     // kitchen
      top: "860px",
      left: "810px",
      prompt: "Which one of these burners did you turn on?",
      reject: "Assume you're right handed... and that stove top burners always match your dominant hand...",
      answer: "right",
      reveal: "Oh yeah, A negligent arson sentence will really eat into your Netflix time."
   },
     {name: 'room-6',
     //computer room
      top: "1200px",
      left: "500px",
      prompt: "Oh, wow, it's an acquaintance from middle school. He wants to know how life has been since?",
      reject: "Let's keep this briefer, shall we?",
      answer: "good",
      reveal: "Yeah, I mean, how else do you sum up decades of life? Sort of a rude question IMHO."
  },
     {name: 'room-7',
     //living room
      top: "1050px",
      left: "900px",
      prompt: "So close, but you haven't said all your goodbyes! What style of goodbye do you use?",
      reject: "Same name as a style of coffee that also makes you wander away wordlessly...",
      answer: "irish",
      reveal: "It's not like anybody ever says 'That was a really great Goodbye'."
  },
    {name: 'room-8',
      top: "1400px",
      left: "350px",
      prompt: "You made it! The adventure continues in the sequel...'Forced Small Talk With Your Uber Driver'",
      reject: "",
      answer: "",
      reveal: "You made it out in one piece!"
  }
]

//set a counter that increases as player successfully solves riddles
var roomCount = 0;

var timeLeft = 60;

var $timerText = $(".status-bar");

var input = $('#text-input');
//protag default start location
$('#protagonist').css({'top' : '280px', 'left' : '500px'})

$timerText.html('<li id="prompt">You\'re a red circle at a tedious party, and you just want to go home!</li>');
$timerText.append('<li id="prompt"><br>Grab your stuff & get out before your Uber driver abandons you!</li>');
$timerText.append('<li id="prompt"><br>Click anywhere to begin!</li>');

//make protagonist blink
setInterval(function () {
  $('#protagonist').toggleClass('blink')}, 1000)

//need a way to capture player text input and check it against the "answer" attribute of each room in the array
function checkInput () {
  //grab text from input bar
  var input = $('input').val()
//split text on space into new array
  var user_answer = input.split(' ');
  //do a for-each loop on each word of the input to check it against the "answer" in the rooms array
  user_answer.forEach (function (word) {
    if (word === rooms[roomCount].answer) {
    $('#prompt').html('<li id="prompt">'+rooms[roomCount].reveal+'</li>');
    //on successful answer, increase room count, update #protagonist div coordinates, and add time left
        roomCount++;
        changeRooms();
        timeLeft = timeLeft + Math.floor((60/(roomCount)))
  } else {
    //on unsuccessful answer, display rejection prompt
    rooms[roomCount].prompt = rooms[roomCount].reject
    $('#prompt').html('<li id="prompt">'+rooms[roomCount].reject+'</li>');
    setTimeout( function() {
    $('#prompt').html('<li id="prompt">'+rooms[roomCount].prompt+'</li>');
    }, 5000)
  }
  })
}

//on successful answer, use jQuery .css() method to update top & left properties to move #protag div
function changeRooms () {
  $('#protagonist').css({'top' : rooms[roomCount].top, 'left' : rooms[roomCount].left});
  $('#prompt').html('<li id="prompt">'+rooms[roomCount].prompt+'</li>')
}

//un-dim room div that protagonist is currently in
function LightsOn () {
  $('#room-' + roomCount).css('opacity', '1');
}


$('.container').on('click', function () {
  //make it so you can only click 1x to start
  $('.container').off();
  //create a setInterval to 1x per second update timer text & timer--
    var setTimer = setInterval(function () {
        if (timeLeft === 0) {
  //if time has run out, suspend timer & display game over text
        $timerText.html("<li class='timer'><strong>0</strong> seconds<br>before your<br> ride leaves!</li>");
        alert("Your ride left without you! Looks like you're spending the night here.");
        clearInterval(setTimer);
  } else {
        $timerText.html('<li id="prompt">'+rooms[roomCount].prompt+'</li>')
        LightsOn();
        $timerText.append("<li class='timer'><strong>"+timeLeft+"</strong> seconds<br>before your<br>ride leaves!</li>");
        timeLeft--;
  }
  }, 1000);
    $(input).on('keypress', function (event) {
        if (event.which === 13) {
          checkInput();
          input.val('');
            if (roomCount >= 8) {
              $timerText.html('<li id="prompt">'+rooms[roomCount].prompt+'</li>')
              // alert('You made it!');
              clearInterval(setTimer);
              $timerText.append('<li class="timer">You made it!</li>');
              $('#room-8').css('opacity', '1')
                } else {};
        } else {
          $('#prompt').html('<li id="prompt">'+rooms[roomCount].prompt+'</li>');
        };
        })
})

//jquery selector to grab the text from the input bar


//reach features:

//bounce player back to previous room if input !== correct


//bottom
});
