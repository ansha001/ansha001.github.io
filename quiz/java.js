const ques_data = [
    {
        question : '1.Which of the following is not a Java features?',
        a : 'Dynamic',
        b : 'Use of pointers',
        c : 'Object-oriented',
        d : 'Architecture Neutral',
        correct : 'b'
    },

    {
        question : '2.Which of the following option leads to the portability and security of Java?',
        a : 'Bytecode is executed by JVMs',
        b : 'The applet makes the Java code secure and portable',
        c : 'Use of exception handling',
        d : 'Dynamic binding between objects',
        correct : 'a'
    },
    
    {
        question : '3._____ is used to find and fix bugs in the Java programs.',
        a : 'JVM',
        b : 'JRE',
        c : 'JDK',
        d : 'JDB',
        correct : 'd'
    },
    
    {
        question : '4. Which package contains the Random class?',
        a : 'java.util package',
        b : 'java.lang package',
        c : 'java.awt package',
        d : 'java.io package',
        correct : 'a'
    },
    
    {
        question : '5. Which option is false about the final keyword?',
        a : 'A final class cannot extend other classes.',
        b : 'A final class cannot be extended.',
        c : 'A final method cannot be overridden in its subclasses.',
        d : 'A final method can be inherited.',
        correct : 'a'
    }
];

const quiz = document.getElementById('quiz');
var answerEls = document.getElementsByName('answer');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let score =0;
let question_number = 0;  
load_question();

function load_question(){
      deselect();
      const currentQuestion = ques_data[question_number] 
      question.innerText = currentQuestion.question;
      a_text.innerText =  currentQuestion.a;
      b_text.innerText =  currentQuestion.b;
      c_text.innerText =  currentQuestion.c;
      d_text.innerText =  currentQuestion.d;
}

function selected_answer(){
    
    let answer = undefined;
    for(let i=0;i < answerEls.length;i++){
        if(answerEls[i].checked){
            answer = answerEls[i].id;
        }
    }
    
    return answer;
}

function deselect(){
    for(let i=0;i < answerEls.length;i++){
        answerEls[i].checked = false;
    }
}



submitBtn.addEventListener("click", () => {
     answer = selected_answer();
    if(answer && answer === ques_data[question_number].correct){
        score++;
    }
    question_number = question_number + 1;
    if(question_number < ques_data.length ){
        load_question();
    }
    else{
        quiz.innerHTML = `<h2>You have Scored
         <br><center><h1>${score}/${ques_data.length}</h1></center><br> questions correctly <br> Good Luck</h2>`        
    }
})