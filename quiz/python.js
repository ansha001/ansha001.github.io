const ques_data = [
    {
        question : '1.Which one of the following is the correct extension of the Python file',
        a : '.p',
        b : '.py',
        c : '.python',
        d : 'None of these',
        correct : 'b'
    },

    {
        question : '2.What do we use to define a block of code in Python language?',
        a : 'Indentation',
        b : 'Brackets',
        c : 'Key',
        d : 'None of these',
        correct : 'a'
    },
    
    {
        question : '3.Which character is used in Python to make a single line comment?',
        a : '/',
        b : '//',
        c : '#',
        d : '!',
        correct : 'c'
    },
    
    {
        question : '4. Which of the following is not a keyword in Python language?',
        a : 'val',
        b : 'raise',
        c : 'try',
        d : 'with',
        correct : 'a'
    },
    
    {
        question : '5. Which of the following operators is the correct option for power(ab)?',
        a : 'a**b',
        b : 'a ^ b',
        c : 'a ^ ^ b',
        d : 'a ^ * b',
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