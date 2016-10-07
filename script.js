window.onload = function() {
  alert("Slowly and smoothly move the cursor across the board to change the board's tile colors.  First, however, select the size of the board tiles you want.");
  var response = prompt("The higher the number the smaller the tiles.  Please enter a number between 1 and 250.");
  var container = document.createElement("article");
  container.style.cssText = "width: 640px; height: 640px; margin: 0 auto"
  var startButton = document.createElement("button");
  startButton.innerHTML = "Clear Board";
  var refreshButton = document.createElement("button");
  refreshButton.innerHTML = "New Board";
  refreshButton.style.width = "100px";
  refreshButton.addEventListener("click",function(){
    location.reload();
  });
  document.body.appendChild(refreshButton);

  document.body.appendChild(startButton);
  startButton.style.marginLeft = "46%";
  startButton.style.marginRight = "54%";
  startButton.style.marginBottom = "10px";
  refreshButton.style.marginLeft = "46%";
  refreshButton.style.marginRight = "54%";
  refreshButton.style.marginBottom = "10px";
  startButton.style.width = "100px";
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