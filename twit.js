console.log("Twitting");
var Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: 'Q8DZ6nk8NG50cRjNWwQtjAIJ7',
    consumer_secret: 'ZSp8I8aQ27FQ4I8DjQPjNZYoZpVxxFg2Uwl6ygibQpcXnbKjdS',
    token: '796018368100888576-VxLJbv2peY7nU802GnGiuAoEfBmlUZp',
    token_secret: '83Zj1bobqBqXFIDknSsoLyK1i0FyERpSi8b8H4Z35APre'
  })

var i = 0;
t.on('tweet', function (tweet) {
  console.log("----------------------------");
  console.log(tweet.text);
  console.log(i);
  i++;
  console.log("----------------------------");
})

t.on('error', function (err) {
  console.log('Oh no')
})

t.track('#love');