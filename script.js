const inputBox = document.getElementById("input-box");
const clickButton = document.querySelector("button");
console.log(clickButton);
const listContainer = document.getElementById("list-container");
console.log(listContainer);



clickButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        console.log(inputBox.value);
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        console.log(li);
        listContainer.appendChild(li);
        console.log(listContainer);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';

})

console.log(listContainer);
listContainer.addEventListener("click",function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false)