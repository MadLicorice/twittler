$(document).ready(function(){
  var $body = $('body');
  var $main = $('main');

  $('#new-tweets').on('click', function(){
    $main.html('');
    var index = streams.home.length - 1;
    while(index >= 0) {

      var tweet = streams.home[index];
      var $tweetContainer = $('<div class="tweet-container">');
      $tweetContainer.appendTo($main);
      var $tweetColLeft = $('<div class="tweet-col-left">');
      $tweetColLeft.appendTo($tweetContainer);
      var $avatarContainer = $('<div class="avatar-container">');
      $avatarContainer.appendTo($tweetColLeft);
      var $avatarIntweet = $('<div class="avatar intweet">');
      $avatarIntweet.appendTo($avatarContainer);
      var $avatarIcon = $('<i class="fas fa-user"></i>');
      $avatarIcon.appendTo($avatarIntweet);


      var $tweetColRight = $('<div class="tweet-col-right">');
      $tweetColRight.appendTo($tweetContainer);
      var $tweetUser = $('<p class="tweet-user">');
      $tweetUser.text('@' + tweet.user);
      $tweetUser.appendTo($tweetColRight);
      var $tweetMessage = $('<p class="tweet"></p>');
      $tweetMessage.text(tweet.message);
      $tweetMessage.appendTo($tweetColRight);
      var $tweetDate = $('<p class="date"></p>');
      $tweetDate.text(tweet.created_at);
      $tweetDate.appendTo($tweetColRight);

      index -= 1;
    }
    
    function anyUsersTweets () {
      $('.tweet-user').on('click', function(){
        var person = $(this).text().slice(1);
        console.log(person);
        $main.html('');

        var len = streams.users[person].length - 1;

        while (len >= 0) {

          var tweet = streams.users[person][len];
          var $tweetContainer = $('<div class="tweet-container">');
          $tweetContainer.appendTo($main);
          var $tweetColLeft = $('<div class="tweet-col-left">');
          $tweetColLeft.appendTo($tweetContainer);
          var $avatarContainer = $('<div class="avatar-container">');
          $avatarContainer.appendTo($tweetColLeft);
          var $avatarIntweet = $('<div class="avatar intweet">');
          $avatarIntweet.appendTo($avatarContainer);
          var $avatarIcon = $('<i class="fas fa-user"></i>');
          $avatarIcon.appendTo($avatarIntweet);


          var $tweetColRight = $('<div class="tweet-col-right">');
          $tweetColRight.appendTo($tweetContainer);
          var $tweetUser = $('<p class="tweet-user">');
          $tweetUser.text('@' + tweet.user);
          $tweetUser.appendTo($tweetColRight);
          var $tweetMessage = $('<p class="tweet"></p>');
          $tweetMessage.text(tweet.message);
          $tweetMessage.appendTo($tweetColRight);
          var $tweetDate = $('<p class="date"></p>');
          $tweetDate.text(tweet.created_at);
          $tweetDate.appendTo($tweetColRight);

          len -= 1;
        }

      });

    }
    anyUsersTweets();
  });


});

