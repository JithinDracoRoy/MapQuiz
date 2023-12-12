function store()
{
    var num=document.getElementById("number").value;
    localStorage.setItem("no",num);
    var name=document.getElementById("firstName").value;
    localStorage.setItem("fname",name);
}
