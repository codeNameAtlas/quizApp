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

  var finalScore = 0;

  var getAnswer = function(questionNum) {
    var answer;
    $('form').submit(console.log('answer submitted'));
    return answer;
  }

  var evaluateAnswer = function(whichQuestion, answerSubmitted) {
    return (answerSubmitted === questions[whichQuestion].correct)
  }

  var displayResults = function() {
    dislay "Your final score is:" + finalScore + " of" + questions.length;
  }

  var runQuiz = function() {
    // get each question and answer options and display
    for (var i=0; i<questions.length; i++) {
      $('#question').text(questions[i].question);
      for (var j=0; j<questions[i].answers.length; j++) {
        $('#answers').append("<li><input type='radio' class='guess' name='guess' value=" + i + ">" + 
          questions[i].answers[j] + "</li>");
      }

      // get users answer and evaluate the result
      if (evaluateAnswer) {finalScore++};

      evaluateAnswer(i, getAnswer(i))

    }
    // after all questions have been answered, show the final score
    displayResults();
  };

  runQuiz();
})