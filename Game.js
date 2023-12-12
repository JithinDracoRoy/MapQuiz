
// let questions = ["Which continent is India part of?",
//                 "Which is the largest continent in The World?",
//                 "Which is the smallest continent in area?",
//                 "Which continent is also called as an 'Island-Continent'?",
//                 "The largest mountain in the world, Mount Everest is situated in which continent?",
//                 "On Which Continent Is Egypt?",
//                 "On which continent can you find France?",
//                 "Which is the Second biggest continent of the world?",
//                 "Columbus found which continent?",
//                 "Where is Amazon River?"];

var x=0;
function questions(){
    document.getElementById('a').innerHTML("");
    document.getElementById('b').innerHTML("");
    document.getElementById('m').style.pointerEvents("auto")
    document.getElementById('n').style.pointerEvents("none")
    var randomNumber= Math.floor((Math.random() * 10) + 1); 

 for(i=0;x<i;i++){
   if(used[i]==randomNumber){
   i=0;
randomNumber=Math.floor((Math.random()*10)+1);
 }
}
used.push(randomNumber)
document.getElementById("q1").innerHTML=questions[randomnumber];
}
// let answers = ["Asia","Asia","Australia","Australia","Asia","Africa",
//                 "Europe","Africa","North America","South America"];

function check(a){
    timing=localStorage.getItem("time");
    if(a==answers[randomnumber]){
        score++;
        document.getElementById("a").innerHTML="Correct Answer";
    }
    else{
        document.getElementById("b").innerHTML="Wrong Answer";
    }
    x++;
    document.getElementById("m").style.pointerEvents = 'none';
    document.getElementById("z").style.pointerEvents = 'auto';
    if(timing==x){
        fin();
    }
}

function store()
{
    var num=document.getElementById("number").value;
    localStorage.setItem("no",num);
    var name=document.getElementById("firstName").value;
    localStorage.setItem("fname",name);
}
let finalOutput= () => {

    document.getElementById("myBtn").disabled = true; 
    let name = localStorage.getItem(key);
    let noOfQuestions = localStorage.getItem(key);
    let score = (mark/noOfQuestions)*100;
    if( mark > 50 ){
        document.getElementById("id").innerHTML = "Congratulations" + name + ", You have scored " + score + "%.";
        document.getElementById("id").style.color = "green";
    }
    else{

        document.getElementById("id").innerHTML = "Opps" + name + ", You have scored below 50%.";
        document.getElementById("id").style.color = "red";

    }

  } 
