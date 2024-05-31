let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const rendomNum=Math.floor(Math.random()*3);  //math.random in between 0 and 1 generate number randomly
    return option[rendomNum];
}

const drawGame=()=>{
    msg.innerText="Game was Drawed";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        msg.innerText=`You Win!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        msg.innerText=`You Lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}

const playGame=(userChoice)=>{

    const compChoice=getCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper") userWin=false;
        }
        else if(userChoice==="paper"){
            if(compChoice==="scissor") userWin=false;
        }
        if(userChoice==="scissor"){
            if(compChoice==="rock") userWin=false;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);  
    })
});