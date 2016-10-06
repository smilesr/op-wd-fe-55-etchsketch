window.onload = function() {
  var response = prompt("What size grid do you want? Ex/ if you want a 4x4 grid, enter: '4'");
  var container = document.createElement("article");
  container.style.cssText = "width: 640px; height: 640px; margin: 0 auto"
  var startButton = document.createElement("button");
  startButton.innerHTML = "Clear";

  document.body.appendChild(startButton);
  startButton.style.marginLeft = "48%";
  startButton.style.marginRight = "52%";
  startButton.style.marginBottom = "10px";
  document.body.appendChild(container);
  var i = 1;
  var gridSize = response * response;
  var setWidth = (100/response) + "%";
  var setHeight = (100/response) + "%";
  for (i; i <=gridSize; i++){
    var div = document.createElement("div");

    div.style.cssText = "background: rgb(0,0,0); color: white; display: flex; justify-content: center; align-items: center; float: left; box-sizing: border-box"
    div.style.width = setWidth;
    div.style.height = setHeight;
    // div.setAttribute("id", "box" + i);
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
  startButton.addEventListener("click", function(){
    var childs = container.childNodes;
    var kk=0;
    for (kk; kk<= childs.length; kk++){
      childs[kk].style.background = "black";
      // childs[kk].firstElementChild.style.background = "black";
    }
  })
}