const quizData=[
    {
        question:'What is the full form of DSA',
        a:'DataStructure and Algorithm',
        b:'DataWare House',
        c:'Data Modelling',
        d:'Data Pipeline',
        correct:'a'

    },{
        question:'What is the full form of HTML',
        a:'Hyper Text Makeup Language',
        b:'Hyper Text Markup Language',
        c:'Cascading Style Sheet',
        d:'None', 
        correct:'b'
    },{
        question:'What is the full form of CSS',
        a:'Cascasding Style Sheet',
        b:'Cursor Sheet Style',
        c:'Cascading Sheet Style',
        d:'None',
        correct:'a'
    },{
        question:'Which language is mostly used in Web Development',
        a:'Python',
        b:'Java',
        c:'C',
        d:'Javascript',
        correct:'d'
    },{
        question:'What is the full form of DOM',
        a:'Document Object Mapping',
        b:'Document Object Model',
        c:'Document Orient Map',
        d:'None',
        correct:'b'
    }
]
const questions=document.getElementById("question")
const text_a=document.getElementById("a_text")
const text_b=document.getElementById("b_text")
const text_c=document.getElementById("c_text")
const text_d=document.getElementById("d_text")
const btn=document.getElementById("button")
const ipanswer=document.querySelectorAll(".answer")
const quiz=document.getElementById("quiz")


function ansSelected(){

 
    let answer=undefined

    ipanswer.forEach((answerel)=>{
        if(answerel.checked){
            answer= answerel.id
        }
    })

    return answer
    
}

let currentQuestion=0
let score=0
loadQuiz()
function loadQuiz(){

    deselectAnswer()

    const currentQuiz=quizData[currentQuestion]
    questions.innerHTML=currentQuiz.question
    text_a.innerHTML=currentQuiz.a
    text_b.innerHTML=currentQuiz.b
    text_c.innerHTML=currentQuiz.c
    text_d.innerHTML=currentQuiz.d

}

function deselectAnswer(){
    ipanswer.forEach((answerel)=>{
        answerel.checked=false
    
        })
}
btn.addEventListener('click',()=>{

  const answer=ansSelected()
  if(answer){
  if(answer===quizData[currentQuestion].correct){
    score++
  
}

    currentQuestion++
   
    if (currentQuestion<quizData.length){
        loadQuiz()
    }else{

      quiz.innerHTML=`<h2>Your score:${score}.</h2>
      <button onclick="location.reload()">Reload</button>
      `

    }
}
})




