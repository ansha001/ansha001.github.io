const ques_data = [
    {
        question : '1.Full form of HTML',
        a : 'Hyper Text Microcontroller',
        b : 'Hyper Text Markup Language',
        c : 'Hyper Text Multiple Language',
        d : 'Hyper Text Multi Language',
        correct : 'b'
    },

    {
        question : '2.Full form of CSS',
        a : 'Cascading Styling Sheets',
        b : 'Colorful Style Sheet',
        c : 'Computer Style Sheet',
        d : 'Common Style Sheet',
        correct : 'a'
    },
    
    {
        question : '3.Full form of PHP',
        a : 'Hypertext Preprocessor',
        b : 'Hypertext Programming',
        c : 'Hypertext Preprogramming',
        d : 'Hometext Preprocessor',
        correct : 'c'
    },
    
    {
        question : '4.Full form of SQL',
        a : 'Structured Query Language',
        b : 'Stylesheet Query Language',
        c : 'Statement Question Language',
        d : 'Stylish Question Language',
        correct : 'a'
    },
    
    {
        question : '5.Full form of XML',
        a : 'eXtensible Markup Language',
        b : 'eXecutalble Multiple Language',
        c : 'eXtra Multi-program Language',
        d : 'eXamine Multiple Language',
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