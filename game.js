let questions = ["Which continent is India part of?", 
                "Which is the largest continent in The World?",
                "Which is the smallest continent in area?",
                "Which continent is also called as an 'Island-Continent'?",
                "The largest mountain in the world, Mount Everest is situated in which continent?",
                "On Which Continent Is Egypt?",
                "On which continent can you find France?",
                "Which is the Second biggest continent of the world?",
                "Columbus found which continent?",
                "Where is Amazon River?"];
let answers = ["Asia","Asia","Australia","Australia","Asia","Africa",
                "Europe","Africa","North America","South America"];

var x=0;
var score=0
var fname;
var timing=1;
var randomnumber;
var used=[];

function store(){
    localStorage.setItem("name",document.getElementById("firstName").value);
}
function times(a){
    localStorage.setItem("time",a);
}
function question(){
    document.getElementById("a").innerHTML="";
    document.getElementById("b").innerHTML="";
    document.getElementById("m").style.pointerEvents = 'auto';
    document.getElementById("z").style.pointerEvents = 'none';
    randomnumber=Math.floor(Math.random()*10);
    for(i=0;i<x;i++){
        if(used[i]==randomnumber){
            i=0;
            randomnumber=Math.floor(Math.random()*10);
        }
    }
    used.push(randomnumber);
    document.getElementById("q1").innerHTML=questions[randomnumber];
}
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
function fin(){
    timing=localStorage.getItem("time");
    fname=localStorage.getItem("name");
    document.getElementById("z").style.pointerEvents = 'none';
    if((score/timing)>0.5){
        document.getElementById("c").innerHTML="Congrats "+fname+" You scored above 50%";
    }
    else{
        document.getElementById("d").innerHTML="Opps "+fname+" You scored below 50%";
    }
}