let wholeGridElement = document.getElementById('maze');
let startIndex;
let globalCurrentIndex;
let stack;
function drawCell(x,y,leftWall, rightWall,topWall,bottomWall, id){
      const wallElement = document.createElement('div');
      wallElement.style.gridRowStart = y;
      wallElement.style.gridColumnStart = x;
      wallElement.id = id
      wholeGridElement.appendChild(wallElement)
      if(leftWall ==true){
          wallElement.classList.add('leftWall');
      }
      if(rightWall ==true){
        wallElement.classList.add('rightWall');
      }
      if(topWall ==true){
        wallElement.classList.add('topWall');
      }
      if(bottomWall == true){
        wallElement.classList.add('bottomWall')
      }
}
function drawStartCell(){

      var start = document.getElementById(startIndex)
      if(start != null){
      start.classList.add("start")
      }
}
export function drawWholeGrids(grid,current_index,localStack){
      wholeGridElement.innerHTML = ('')
      for(var x= 0;x<= grid.length-1;x++){
      //the +1 is refactoring because css grids starts at index 1
          var new_x = grid[x].x+1
          var new_y = grid[x].y+1

          drawCell(new_x,new_y,grid[x].wallLeft,grid[x].wallRight,grid[x].wallUp,
            grid[x].wallDown, x)
            
    }
      drawStartCell();
      if(stack != undefined){
      for(var i = 0;i<=stack.length-1;i++){
        if(stack[i] != current_index && stack[i] != startIndex){
          var stackelement = document.getElementById(stack[i])
          stackelement.classList.add('stack')
        }
        stack = localStack
        }
      }


}
export function setStartForDraw(index,gridSize_x,gridSize_y,pixels_x,pixels_y){
  startIndex = index;
  globalCurrentIndex = index;
  var grid_style_element = document.getElementById('maze')
  var widthString = ""+ pixels_x +"px"
  grid_style_element.style.width =  widthString
  var heightstring =""+ pixels_y + "px"
  grid_style_element.style.height = heightstring
  grid_style_element.style.gridTemplateRows = "repeat(" + gridSize_y+",1fr)"
  grid_style_element.style.gridTemplateColumns = "repeat(" + gridSize_x+",1fr)"

}

export function updateDrawCell(grid,index,localStack,currentBool) {
       if(stack != undefined){
          clearStack();
          }
        var cell = document.getElementById(index); 
      if(cell != null)     {  
        cell.classList.remove('leftWall','rightWall','topWall',
                              'bottomWall','stack','currentCell','start')
      }
    
        if(grid[index].wallLeft == true){
          cell.classList.add('leftWall');
      }
      if(grid[index].wallRight == true){
        cell.classList.add('rightWall');
      }
      if(grid[index].wallUp ==true){
        cell.classList.add('topWall');
      }
      if(grid[index].wallDown == true){
        cell.classList.add('bottomWall')
      }
      if(currentBool == true){
        cell.classList.add('currentCell');
    }
    if(currentBool == true){
      cell.classList.add('currentCell');
  }
      drawStartCell(startIndex,globalCurrentIndex);
        drawStack(localStack,globalCurrentIndex);
    
}

function drawStack(localStack,current_index){
  if(localStack != undefined){
    for(var i = 0;i<=localStack.length-2;i++){
      if(localStack[i] != current_index && localStack[i] != startIndex){
        var stackelement = document.getElementById(stack[i])
        if(stackelement != null){
        stackelement.classList.add('stack')
        }
      }
      stack = localStack
      
      }
  }
}
function clearStack(){
    for(var i = 0; i<=stack.length-1;i++){
        var stackElement = document.getElementById(stack[i]);
        if(stackElement != null){
        stackElement.classList.remove('stack')
        }
    }
} 
