var Sentence = function(pages){
   this.index = 0;
   this.pages = pages;
}

Sentence.prototype.increment = function() {
   this.index += 1
}

Sentence.prototype.decrement = function() {
  this.index -= 1
}


$(document).ready(function() {

  var sentence = new Sentence(3);
  var pages = this.pages;

  currentSentence = $('.sentence' + sentence.index).text()
  console.log(currentSentence);

  $('div').hide();
  $('.currentSentence').show();
  $('.currentSentence').text(currentSentence);


  $(".right").on("click", function(e) {
      console.log("HI");
      e.preventDefault();
      sentence.increment();
      console.log(sentence.index);

      if (sentence.index < sentence.pages) {
        currentSentence = $('.sentence' + sentence.index).text()
      } else {currentSentence = "You've reached the end :-("}

      $('.currentSentence').text(currentSentence);
    });


  $(".left").on("click", function(e) {
      console.log("HI");
      e.preventDefault();
      sentence.decrement();
      console.log(sentence.index);

      if (sentence.index > 0) {
        currentSentence = $('.sentence' + sentence.index).text()
      } else {currentSentence = "You're as far back as you can go"}

      $('.currentSentence').text(currentSentence);
    });
});
