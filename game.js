const questions = [[" Which continent is known as the 'land Down Under'?",
                "In which continent is the Sahara Desert located?",
                "What is the largest continent by land area?",
                "Where is the Amazon Rainforest located?",
                "What is the world's smallest continent?",
                "On Which Continent Is Egypt?",
                "On which continent can you find France?",
                "Which is the Second biggest continent of the world?",
                "Columbus found which continent?",
                "Where is Amazon River?"],
                ["In which continent is the Amazon Rainforest located?",
                "Where is the Sahara Desert situated?",
                "What continent is known as the 'Land of the Rising Sun'?",
                "Which continent is home to the longest mountain range, the Andes?",
                "In which continent is the Great Barrier Reef found?",
                "Where is the Serengeti National Park, famous for its wildlife, located?",
                "What is the only continent that spans all four hemispheres?",
                "In which continent is the city of Istanbul, which straddles two continents?",
                "Which continent is known as the 'island continent'?",
                "Where would you find the highest peak in the world, Mount Everest?"],
                ["In which continent would you find the Altai Mountains",
                "Which continent is the only one without a desert?",
                "In which continent would you find the largest continuous permafrost zone?",
                "Name the continent that is home to the highest capital city in the world, La Paz.",
                "Which continent has the world's second-largest tropical rainforest, after the Amazon?",
                "In which continent is the Atacama Desert, often considered the driest desert on Earth",
                " Name the continent where the Caspian Sea is located.",
                "Which continent is the only one that does not have a single country with a coastline on the Atlantic Ocean?",
                "In which continent can you find Lake Baikal, the deepest freshwater lake in the world?",
                "In which continent would you find the Great Victoria Desert, one of the world's largest sand deserts?"]];
const answers = [["Australia","Africa","Asia","South America","Australia",
                "Africa","Europe","Africa","North America","South America"],
                ["South America","Africa","Asia","South America","Australia",
                "Africa","Africa","Europe","Australia","Asia"],
                ["Asia","Europe","North America","South America","Africa",
                "South America","Asia","Asia","Asia","Australia"]];
 
//all data for game above
 
var noOfQsAsked=0;
var score=0
var userName;
var hardness;
let noOfQuestions=1;
let randomnumber;
let usedQuestionNumbers=[];
let timerCount  //for timeout feat

const checkName=()=>{
    if(document.getElementById('firstName').value != '')
    {
        document.getElementById('start').hidden = false;
    }
    else
    {
        document.getElementById('start').hidden = true;
    }
}

const storeName=()=>{
    localStorage.setItem("name",document.getElementById("firstName").value);
    localStorage.setItem("totalQuestions",document.getElementById("number").value);
    localStorage.setItem("difficulty",document.getElementById("hardness").value);

}
const storeTotalQuestion=(a)=>{
    localStorage.setItem("totalQuestions",a);
}
const storeDifficulty=(a)=>{
    localStorage.setItem("difficulty",a);
}
const askQuestion= ()=>{
    document.getElementById("correct").innerHTML="";
    document.getElementById("wrong").innerHTML="";
    hardness=parseInt(localStorage.getItem("difficulty"));
    document.getElementById("map").style.pointerEvents = 'auto';
    document.getElementById("nextQuestion").style.pointerEvents = 'none';
    randomnumber=Math.floor(Math.random()*10);
    for(i=0;i<noOfQsAsked;i++){//to ensure no repeats
        if(usedQuestionNumbers[i]==randomnumber){
            i=0;
            randomnumber=Math.floor(Math.random()*10);
        }
    }
    usedQuestionNumbers.push(randomnumber);
    document.getElementById("questionDiv").innerHTML=questions[hardness][randomnumber];
    const timerImg=document.createElement("img");//creating coundown
    timerImg.src="assets/countdown.gif";
    timerImg.style.width='5%';
    document.getElementById("for_img").appendChild(timerImg);
    timerCount = setTimeout(timeOut,9000); 
}
const check=(answer)=>{
    //Clear timer to stop timer
    clearTimeout(timerCount);
    const removing=document.getElementById("for_img");
    removing.removeChild(removing.firstChild);
    noOfQuestions=localStorage.getItem("totalQuestions");
    hardness=parseInt(localStorage.getItem("difficulty"));
    if(answer==answers[hardness][randomnumber]){
        score++;
        document.getElementById("correct").innerHTML="Correct Answer";
        <audio id="correctAnswerAudio" src="./assets"></audio>
    }
    else{
        document.getElementById("wrong").innerHTML="Wrong Answer";
    }
    //Check for End of Game
    noOfQsAsked++;
    if(noOfQuestions==noOfQsAsked){
        result();
    }
    else{
        document.getElementById("map").style.pointerEvents = 'none';
        document.getElementById("nextQuestion").style.pointerEvents = 'auto';  
    }
}
const result=()=>{
    document.getElementById("questionDiv").style.display="none";
    document.getElementById("map").style.display="none";
    document.getElementById("nextQuestion").style.display="none";
    userName = localStorage.getItem("name");
    noOfQuestions = localStorage.getItem("totalQuestions");
    document.getElementById("reset").style.display="";
    finalScore = Math.round((score/noOfQuestions)*100) ;

   //Comments for result
   if( finalScore < 50 ){
      document.getElementById("oops").innerHTML = userName + ", You Have Scored " + finalScore + "%.\n" +"BETTER LUCK NEXT TIME" ;
     document.getElementById("imgoops").style.display="";
   }
   else if(finalScore < 70){
       document.getElementById("result").innerHTML = userName + ", You Have Scored " + finalScore + "%.\n" + "GOOD JOB";       
   }
   else if(finalScore < 80 ){
       document.getElementById("result").innerHTML = userName + ", You Have Scored " + finalScore + "%.\n" +"GREAT JOB" ;    
   }
   else if( finalScore < 95 ){
       document.getElementById("result").innerHTML = userName + ", You Have Scored " + finalScore + " %.\n" + "EXCELLENT JOB";    
   }
   else if( finalScore <= 100 ){
       document.getElementById("result").innerHTML = userName + ", You Have Scored " + finalScore + "%.\n" + "AMAZING JOB";    
   }
   if(finalScore>50)
   {
    document.body.style.backgroundImage='url("assets/GIF-FIREWORKS.gif")';
   }
} 
const timeOut=()=>{

    check("wrong answer");
} 