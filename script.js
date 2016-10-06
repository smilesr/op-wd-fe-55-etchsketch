window.onload = function() {
alert("hello");
var container = document.createElement("article");

document.body.appendChild(container);
var i = 1;
for (i; i <=24; i++){
  var div = document.createElement("div");
  div.style.cssText = "width: 25%; height: 100px; background: rgb(0,0,0); color: white; display: flex; justify-content: center; align-items: center; float: left; border: 1px white solid; box-sizing: border-box;"
  div.innerHTML = "<p>Shiloh</p>";
  div.setAttribute("id", "box" + i);
  container.appendChild(div);
}

container.addEventListener("mouseover", changeColor, false);

function changeColor(e){
  if (e.target !== e.Currenttarget){
    var targetItem = e.target; 
    var randomNumber = randomNumberGenerator();
    targetItem.style.background = "rgb(" + randomNumber + ")";
    targetItem.firstElementChild.style.background = "inherit";
  }
  e.stopPropagation();  
}
  
function randomNumberGenerator (){
  var i=0;
  var arr=[];
  for (i; i<=2; i++){
    arr[i] = Math.floor(Math.random() * 255);
  }
  return arr;
}
}