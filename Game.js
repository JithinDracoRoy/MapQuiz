 const storeName=()=>{
    localStorage.setItem("name",document.getElementById("firstName").value);
}
const storeTotalQuestion=(a)=>{
    localStorage.setItem("totalQuestions",a);
}