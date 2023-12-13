function storeName(){
    localStorage.setItem("name",document.getElementById("firstName").value);
}
function storeTotalQuestion(a){
    localStorage.setItem("totalQuestions",a);
}