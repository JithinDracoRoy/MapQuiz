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
function result(){
    
    noOfQuestions=localStorage.getItem("totalQuestions");
    userName=localStorage.getItem("name");
    document.getElementById("nextQuestion").style.pointerEvents = 'none';
    if((score/noOfQuestions)>0.5){
        document.getElementById("congrats").innerHTML="Congrats "+userName+" You scored above 50%";
    }
    else{
        document.getElementById("oopps").innerHTML="Opps "+userName+" You scored below 50%";
        document.getElementById("oops").style.display="";



    }
}