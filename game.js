function computerPlay()
{
    let num=Math.floor(Math.random()*150);
    if(num<=50)
        return "Rock";
    else if(num>50 && num<=100)
        return "Paper";
    else
        return "Scissor";        
}

let playerScore=0;
let compScore=0;
function playRound(playerSelection,compSelection)
{
    let playChoice=playerSelection.toLowerCase();
    if(playChoice===null)
        return "No choice made";
    let compChoice=compSelection.toLowerCase();
    let outcome="";
    switch(playChoice)
    {
        case "rock":
            if(compChoice==="paper")
            {
                outcome="Computer won";
                compScore+=1;
            }
            else if(compChoice==="scissor")
            {
                outcome="Player won";
                playerScore+=1;
            }
            else
                outcome="Tie";
            break;
        case "paper":
            if(compChoice==="paper")
            {
                outcome="Tie";
            }
            else if(compChoice==="scissor")
            {
                outcome="Computer won";
                compScore+=1;
            }
            else
            {
                outcome="Player won";
                playerScore+=1;
            }
            break;
        case "scissor":
            if(compChoice==="paper")
            {
                outcome="Player won";
                playerScore+=1;
            }
            else if(compChoice==="scissor")
            {
                outcome="Tie";
            }
            else
            {
                outcome="Computer won";
                compScore+=1;
            }
            break;
        default:
            outcome="Wrong Choice";
    }
    return outcome;
}


function playGame(n)
{
    for(let i=1;i<=n;i++)
    {
        let player=prompt("Your choice:");
        let computer=computerPlay();
        console.log("Computer:"+computer);
        console.log("Player:"+player);
        let result=playRound(player,computer);
        console.log(result);
    }
}

//let rounds=prompt("Enter number of game rounds");
//playGame(rounds);
/*for(let i=1;i<=rounds;i++)
{
    let player=prompt("Your choice:");
    let computer=computerPlay();
    console.log("Computer:"+computer);
    console.log("Player:"+player);
    let result=playRound(player,computer);
    console.log(result);
}*/
const div=document.querySelector('div');
//const rockButton=document.querySelector('#rock');
//const paperButton=document.querySelector('#paper');
//const scissorButton=document.querySelector('#scissor');
//const rockid=rockButton.getAttribute('id');
const buttons=document.querySelectorAll('button');
let roundResult=document.createElement('p');
let scoreDisplay=document.createElement('p');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        roundResult.remove();
        scoreDisplay.remove();
        let playerMove=button.getAttribute('id');
        let compMove=computerPlay();
        let curr_result=playRound(playerMove,compMove);
        roundResult=document.createElement('p');
        roundResult.textContent=curr_result;
        div.appendChild(roundResult);
        scoreDisplay=document.createElement('p');
        scoreDisplay.textContent="Computer Score:"+compScore+"\t"+"Player Score:"+playerScore;
        div.appendChild(scoreDisplay);
        if(playerScore==5 || compScore==5)
            showFinalResult();
    });
});

const p=document.createElement('p');
function showFinalResult()
{
    if(playerScore>compScore)
        p.textContent="Player Wins";
    else if(compScore>playerScore)
        p.textContent="Computer Wins";
    else
        p.textContent="Tied";
    
    div.appendChild(p);
}