$(document).ready(function() {

  var questions = [
    {question: "How tall",
     answers: ["4 feet", "5 feet", "6 feet"],
     correct: 2
    },
    {question: "How wide",
     answers: ["4 inches", "5 inches", "6 inches"],
     correct: 2
    },    
    {question: "What weight",
     answers: ["40 pounds", "50 pounds", "60 pounds"],
     correct: 2
    }   
  ]

  var runQuiz = function() {
    for (var i=0; i<questions.length; i++) {
      $('#question').text(questions[i].question);
      for (var j=0; j<questions[i].answers.length; j++) {
        $('#answers').append("<li><input type='radio' class='guess' name='guess' value=" + i + ">" + 
          questions[i].answers[j] + "</li>");
      }
      console.log(i + " " + (questions[i].question))
    }
  };

  runQuiz();
})