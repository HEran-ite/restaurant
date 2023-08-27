

let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    loses:0,
    ties:0}; // get the item stored 

updateBoard();


/* if (score===null){let score={
    wins:0,
    loses:0,
    ties:0}
};
*/
function updateBoard(){
    
    document.querySelector('.Sscore')
    .innerHTML='\n Wins:'+ score.wins +', Loses:'+ score.loses + ', Ties:'+ score.ties;
   
  
}

function play(playerMove){
    const move= pickMove();
    
    if (playerMove==='rock'){
        if (move==='rock'){
           result='Tie.';
        }
        else if (move==='sicssors'){
            result='You win.';
        }
        else {
        result='You lose.';
        }
    }
     
    if (playerMove==='paper')  { 
        if (move==='paper'){
            result='Tie.';
        }
        else if (move==='rock'){
            result='You win.';
        }
        else {
            result='You lose.';
        }
     }

    if (playerMove==='scissors'){
        if (move==='sicssors'){
            result='Tie.';
        }
        else if (move==='paper'){
            result='You win.';
        }
        else {
            result='You lose.';
        }
    }
    
    if (result==='You win.'){
        score.wins+=1}

    else if (result==='You lose.'){
        score.loses+=1
    }
    else{
        score.ties+=1
    }

    document.querySelector('.Smove')
    .innerHTML=`You : ${playerMove} -  Computer : ${move}  `
    
    document.querySelector('.Sresult')
    .innerHTML=`${result}`;

   localStorage.setItem('score',JSON.stringify(score)) // uses to store files which get lost after the page is refreshed and i used JSON to change it to string. 

   updateBoard();

   document.body.addEventListener('keydown',(event)=>{
    console.log(event.key);
    if(event.key==='r'){
        play('rock');
    }else if(event.key==='s'){
        play('scissors');
    }else if (event.key==='p'){
        play('paper');}
})
}  




function pickMove(){
    const randomNum=Math.random(); 
    if (randomNum<=1/3){
        move='rock';
    }
    else if (  randomNum >1/3 && randomNum<=2/3   ){
        move='sicssors';
    }
    else{
        move='paper';
    }  
    return move; 
}




function autoPlay (){
    let intervalId;
    let isAutoPlaying=false;
    
    if (!isAutoPlaying){
    intervalId=setInterval(function(){
      const playerMove=pickMove()
        play(playerMove);
    },1000);
    isAutoPlaying=true;
    } else{
    clearInterval(intervalId);
    isAutoPlaying=false;
}
}