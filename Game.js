
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
