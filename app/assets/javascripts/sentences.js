var Sentence = function(){
   this.index = 0;
}

Sentence.prototype.increment = function() {
  this.index += 1
}

Sentence.prototype.decrement = function() {
  this.index -= 1
}


$(document).ready(function() {

  var sentence = new Sentence();

  currentSentence = $('.sentence' + sentence.index).text()
  console.log(currentSentence);

  $('div').hide();
  $('.currentSentence').show();
  $('.currentSentence').text(currentSentence);


  $("h1").on("click", function(e) {
      console.log("HI");
      e.preventDefault();
      sentence.increment();
      console.log(sentence.index);
      currentSentence = $('.sentence' + sentence.index).text()
      $('.currentSentence').text(currentSentence);
    });
});
