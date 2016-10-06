window.onload = function() {
alert("hello");
var container = document.createElement("article");

document.body.appendChild(container);
var i = 1;
for (i; i <=24; i++){
  var div = document.createElement("div");
  div.style.width = "25%";
  div.style.height = "100px";
  div.style.background = "rgb(0,0,0)";
  div.style.color = "white";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.innerHTML = "<p>Shiloh</p>";
  div.style.float = "left";
  div.style.border = "1px white solid"
  div.style.boxSizing = "border-box";
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