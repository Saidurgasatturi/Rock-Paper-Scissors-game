let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#Computer-Score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawgame=()=>{
    console.log("game was draw.");
    msg.innerText="game was draw. play again";
    msg.style.backgroundColor="#081b31";
};
const showwinner=(userwin, userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("YOU WON :)......!!!!");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("YOU LOSE :(");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
    }
};

const playGame=(userchoice) =>{
    console.log("userChoice =",userchoice);
    const compchoice=genCompChoice();
    console.log("compChoice =",compchoice);

    if(userchoice==compchoice){
        drawgame();
        
    } else{
        let userwin= true;
        if(userchoice==="rock"){
            userwin= compchoice==="paper"? false : true;
        } else if(userchoice==="paper"){
            usewin = compchoice === "scissors"? false: true;
        }else{
            userwin = compchoice === "rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
     
}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id")
        console.log("choice was clicked",userchoice);
        playGame(userchoice);

    });
});