
const check = (answer)=>{
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
