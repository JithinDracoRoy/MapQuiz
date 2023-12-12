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