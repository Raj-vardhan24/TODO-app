let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
// list item creation
    let li=document.createElement("li");
    li.innerText=`${inp.value}`;

    // delete button creation
    let del=document.createElement("button");
    del.classList.add("delete");
    del.innerText="DELETE";

    // setting the input value to""
    inp.value="";

    // putting li and delete button on screen
    if(li.innerText!="")
    {ul.appendChild(li);
    li.appendChild(del);}

});

 // functiionality to delete button by event delegation as eventlistner is 
//only applied to element of html content not the ones created in javascript.
// event.target and event delegation is important
let ull=document.querySelector("ul");
ull.addEventListener("click",function(event)
{
    let tar=event.target;
    if(tar.nodeName=="BUTTON")
    {
        tar.parentElement.remove();
    }
});