console.log("hola");
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
 
 var led2 = new five.Led(8);
 var led = new five.Led(13);

// led.brightness(256);
// led2.brightness(256);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led,
    led2: led2,
  });




console.log("Twitting2");
var Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: 'Q8DZ6nk8NG50cRjNWwQtjAIJ7',
    consumer_secret: 'ZSp8I8aQ27FQ4I8DjQPjNZYoZpVxxFg2Uwl6ygibQpcXnbKjdS',
    token: '796018368100888576-VxLJbv2peY7nU802GnGiuAoEfBmlUZp',
    token_secret: '83Zj1bobqBqXFIDknSsoLyK1i0FyERpSi8b8H4Z35APre'
  })

var Twitter2 = require('node-tweet-stream')
  , t2 = new Twitter({
    consumer_key: 'Q8DZ6nk8NG50cRjNWwQtjAIJ7',
    consumer_secret: 'ZSp8I8aQ27FQ4I8DjQPjNZYoZpVxxFg2Uwl6ygibQpcXnbKjdS',
    token: '796018368100888576-VxLJbv2peY7nU802GnGiuAoEfBmlUZp',
    token_secret: '83Zj1bobqBqXFIDknSsoLyK1i0FyERpSi8b8H4Z35APre'
  })


var j = 0;
var g = 0;
t.on('tweet', function (tweet) {
  console.log("--------------LOVE--------------");
  console.log(tweet.text);
  console.log(j);
  j++;
  console.log("----------------------------");
  led.blink(200, stop);
})

t2.on('tweet', function (tweet) {
  console.log("--------------GOT--------------");
  console.log(tweet.text);
  console.log(g);
  g++;
  console.log("----------------------------");
  led2.blink(200, stop2);
})


function stop(){
  console.log("stop");
  led.stop();
  led.off();
}

function stop2(){
  console.log("stop2");
  led2.stop();
  led2.off();
}


t.on('error', function (err) {
  console.log('Oh no')
});
t2.track('#got');
t.track('#love');

});