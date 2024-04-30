var circlePosition = document.getElementsByClassName('circle');
console.log(circlePosition);
var playerScore = 0

function instructions(){
  alert("literally all you do is click the image")
}

function setScore(){
  playerScore = playerScore + 1;
  document.getElementById('scores').innerHTML = playerScore;
}

function message(){
    alert("Hello a script");
}

function position() {
  for (var i = 0; i < circlePosition.length; i++ ) {
    //give circle a random position
    var posx = (Math.random() * ($(document).width() - 0)).toFixed();
    var posy = (Math.random() * ($(document).height() - 0)).toFixed();
    setScore();


    //apply position to circle
    $(circlePosition[i]).css({
      'position':'absolute',
      'left':posx+'px',
      'top':posy+'px',
      
    })
  } 
} //end function position

var circleTotal = circlePosition.length;

$('.circle').click(function() {
  $(this).fadeOut();
  circleTotal = circleTotal - 1;
  console.log(circleTotal);

  if(circleTotal == 0) {
    position();
    $('.circle').fadeIn();
  }

});

position();