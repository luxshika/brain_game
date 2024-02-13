const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*20);

const questionE1 = document.getElementById("question");

const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
  score =0;
}

scoreE1.innerText = `score:${score}`;
const inputE1   =  document.getElementById("input");

questionE1.innerHTML = `what is ${num1} multiply by ${num2} ?`;


const correctAns = num1*num2;

formE1.addEventListener("submit",() =>{
    const userAns = +inputE1.value;
   if(userAns === correctAns){
    score++;
    updatelocalStroage()
    
   }else{
    score--;
    updatelocalStroage();
   }

});



function updatelocalStroage(){
  localStorage.setItem("score",JSON.stringify(score))
}