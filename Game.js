const askQuestion=()=>{
   document.getElementById("correct").innerHTML="";
   document.getElementById("wrong").innerHTML="";
   document.getElementById("map").style.pointerEvents = 'auto';
   document.getElementById("nextQuestion").style.pointerEvents = 'none';
   randomnumber=Math.floor(Math.random()*10);
   for(i=0;i<noOfQsAsked;i++){
       if(usedQuestionNumbers[i]==randomnumber){
           i=0;
           randomnumber=Math.floor(Math.random()*10);
       }
   }
   usedQuestionNumbers.push(randomnumber);
   document.getElementById("questionDiv").innerHTML=questions[randomnumber];
}