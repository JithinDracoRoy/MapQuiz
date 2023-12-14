const questions = ["Which continent is India part of?", 
                "Which is the largest continent in The World?",
                "Which is the smallest continent in area?",
                "Which continent is also called as an 'Island-Continent'?",
                "The largest mountain in the world, Mount Everest is situated in which continent?",
                "On Which Continent Is Egypt?",
                "On which continent can you find France?",
                "Which is the Second biggest continent of the world?",
                "Columbus found which continent?",
                "Where is Amazon River?"];
const answers = ["Asia","Asia","Australia","Australia","Asia","Africa",
                "Europe","Africa","North America","South America"];

var noOfQsAsked=0;
var score=0
var userName;
var noOfQuestions=1;
var randomnumber;
var usedQuestionNumbers=[];

function storeName(){
    localStorage.setItem("name",document.getElementById("firstName").value);
}
function storeTotalQuestion(a){
    localStorage.setItem("totalQuestions",a);
}
function askQuestion(){

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

    // Creating Count Down    
    let timerImg=document.createElement('img');
    timerImg.src='assets/countdown.gif';
    timerImg.width="10%";
    document.getElementById("for_img").appendChild(timerImg);
    setTimeout(timeOut, 10000); 

}
function check(answer){
    noOfQuestions=localStorage.getItem("totalQuestions");
    if(answer==answers[randomnumber]){
        score++;
        document.getElementById("correct").innerHTML="Correct Answer";
    }
    else{
        document.getElementById("wrong").innerHTML="Wrong Answer";
    }
    noOfQsAsked++;
    document.getElementById("map").style.pointerEvents = 'none';
    document.getElementById("nextQuestion").style.pointerEvents = 'auto';
    if(noOfQuestions==noOfQsAsked){
        result();
    }
}
// function result(){
//     noOfQuestions=localStorage.getItem("totalQuestions");
//     userName=localStorage.getItem("name");
//     document.getElementById("nextQuestion").style.pointerEvents = 'none';
//     if((score/noOfQuestions)>0.5){
//         document.getElementById("result").innerHTML="Congrats "+userName+" You scored above 50%";
//     }
//     else{
//         document.getElementById("opps").innerHTML="Opps "+userName+" You scored below 50%";
//     }
// }

// FINAL RESULT
let result=()=>{

    document.getElementById("questionDiv").style.display="none";
     document.getElementById("map").style.display="none";
     document.getElementById("nextQuestion").style.display="none";
     userName = localStorage.getItem("name");
     noOfQuestions = localStorage.getItem("totalQuestions");
     document.getElementById("nextQuestion").style.pointerEvents = 'none'; 
     finalScore = (score/noOfQuestions)*100;

//  Showing result in percentage
    if( finalScore < 50 ){
       document.getElementById("oops").innerHTML = userName + ", you have scored " + finalScore + "%.\n" +"BETTER LUCK NEXT TIME" ;       
    }
    else if(finalScore < 70){
        document.getElementById("result").innerHTML = userName + ", you have scored " + finalScore + "%.\n" + "GOOD JOB";       
    }
    else if(finalScore < 80 ){
        document.getElementById("result").innerHTML = userName + ", you have scored " + finalScore + "%.\n" +"GREAT JOB" ;    
    }
    else if( finalScore < 95 ){
        document.getElementById("result").innerHTML = userName + ", you have scored " + finalScore + " %.\n" + "EXCELLENT JOB";    
    }
    else if( finalScore <= 100 ){
        document.getElementById("result").innerHTML = userName + ", you have scored " + finalScore + "%.\n" + "AMAZING JOB";    
    }
} 


let timeOut=()=>{
    document.getElementById("wrong").innerHTML="Timeout! Please go the next question.";
    document.getElementById("nextQuestion").style.pointerEvents = 'auto';
    document.getElementById("map").style.pointerEvents = 'none';
    document.getElementById("for_img").innerHTML='';
}
//Count Down
          

