import {initializeMaze, getIndexNumberByXY , getXYByIndexNumber} from './GridLogic.js'
import {setStartForDraw} from './drawLogic.js'

let stack =[]
let visitedNodes = []
let objectGrid = []
let gridSize_x
let gridSize_y
// then we need to randomly choose a random number between the neighbours
//add the first position to the visited and traceback stack
//remove the walls between first and second position(both ways!)
//add the second one to the visited and traceback
//if there is no unvisited neigbhours, go one step back in the traceback stack
//check this new field for unvisited neigbhours, if it succeds, go back to normal
//if it doesnt go one back again in the traceback stack and look again, until true



export function depthFirstSearch(){
      //console.log("stack " + stack.length)
      if(stack.length > 0){
          var currentIndex = stack.pop()
          var neighbours = checkVisitedNeighbours(currentIndex);
          if(neighbours.length != 0){
              stack.push(currentIndex)
              var neighbourList_index =getRandomNumber(neighbours.length);
              var neighbour_index = neighbours[neighbourList_index];
              removeWall(neighbour_index,currentIndex);
              visitedNodes[neighbour_index].visited = true
              stack.push(neighbour_index);
            }
              //console.log(currentIndex +" " + neighbour_index)
              return {index1: currentIndex, index2: neighbour_index,completed: false,stack : stack};
        }
        else{
          //console.log(currentIndex +" " + neighbour_index)
          return {index1 : currentIndex, index2: neighbour_index, completed: true, stack : stack};
    }
}

export function setVariables(grid,x_gridSize,y_gridSize){

      stack = []
      objectGrid = []
      visitedNodes=[]
      gridSize_x = x_gridSize
      gridSize_y = y_gridSize
      for(var x=0;x<=grid.length-1;x++){
          objectGrid.push(grid[x]);
          visitedNodes.push({visited : false})

      }

}

export function setRandomStartPoint(){
      var randomNumber= Math.floor(Math.random()*objectGrid.length);
      stack.push(randomNumber)
      visitedNodes[randomNumber].visited = true
      return randomNumber;
}
function checkVisitedNeighbours(index){
      var unvisited_neighbours =[]
      var y_size = gridSize_y
      var directions = [-y_size, y_size,-1,1];
      for(var x=0;x<=directions.length-1;x++){
          var legitNode = false;
          var new_index = index+directions[x]
          //check for edge cases
          var index_x = Math.floor(index/gridSize_y)

          //this if statements only trigger on right and left
              if(new_index == index - gridSize_y || new_index == index + gridSize_y){
                if(new_index >= 0 && new_index <= objectGrid.length-1){
                    legitNode = true;
                }
              }
              else if(new_index >= index_x*gridSize_y &&
               new_index < (index_x+1)*gridSize_y){
                    legitNode = true;

               }

            if(legitNode == true){

                  if(visitedNodes[new_index].visited == false){
                      unvisited_neighbours.push(new_index)
                  }
                }
            }
          return unvisited_neighbours
      }


function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}
function removeWall(newIndex,oldIndex){

      var directions ={left: -gridSize_y,right: gridSize_y, down:1, up: -1}
      var difference = newIndex-oldIndex

      if(difference == directions.left){

          objectGrid[oldIndex].wallLeft = false
          objectGrid[newIndex].wallRight = false

      }
      else if(difference == directions.right){

        objectGrid[oldIndex].wallRight = false
        objectGrid[newIndex].wallLeft = false
      }
      else if(difference == directions.up){

        objectGrid[oldIndex].wallUp = false
        objectGrid[newIndex].wallDown = false

      }
      else if(difference == directions.down){
        objectGrid[oldIndex].wallDown = false
        objectGrid[newIndex].wallUp = false

      }
}
export function getGrid(){
  return objectGrid;
}
