import {getXYByIndexNumber,getIndexNumberByXY,initializeMaze} from './GridLogic.js'
import{drawWholeGrids,updateDrawCell,setStartForDraw} from './drawLogic.js'
import{depthFirstSearch,setRandomStartPoint, setVariables,getGrid} from './MazeMachine.js'


let GRID_SIZE_X = 50;
let GRID_SIZE_Y = 50;
let PIXELS_X = 3000;
let PIXELS_Y = 3000;
let ISSLOW = true;
let TIMERLOWERLIMIT = 15;
let calculation_grid = initializeMaze(GRID_SIZE_X,GRID_SIZE_Y)



export function startDepthFirst(){
calculation_grid = initializeMaze(GRID_SIZE_X,GRID_SIZE_Y)
var startpoint = setAllStartValues()
depthFirstSearchCycler(startpoint)
}

function depthFirstSearchCycler(startpoint){
      //this will just run the code to cycle through the main function
      var completed = false;
      var search;
      if(ISSLOW == true){
          slowStep()

      }
      else{
      while(completed == false){
          search = depthFirstSearch()
          completed = search.completed
      }
      calculation_grid = getGrid()
      drawWholeGrids(calculation_grid, search.index1,search.stack)
      document.getElementById('send_button').disabled = false;
    }
}

let prev_search_step;
function step(){
  var grid = getGrid()
  if(prev_search_step!= undefined){
    if(prev_search_step.index1 != undefined){
    updateDrawCell(grid,prev_search_step.index1,prev_search_step.stack,false);
    }
    if(prev_search_step.index2 != undefined){
      updateDrawCell(grid,prev_search_step.index2,prev_search_step.stack,false);
    }
    if(prev_search_step.stack !=null){
      var stackLength = prev_search_step.stack.length;
      if(stackLength > 0){
      updateDrawCell(grid,prev_search_step.stack[stackLength-1],prev_search_step.stack,true);
      }
    }
  }
  var search = depthFirstSearch()
  prev_search_step = search;
  if(search.completed == false){
      slowStep()
  }
  else{
    document.getElementById('send_button').disabled = false;
  }
}
function slowStep(){
      var t = setTimeout(step,TIMERLOWERLIMIT);
}
function setAllStartValues(){
  setVariables(calculation_grid,GRID_SIZE_X,GRID_SIZE_Y);
  var startpoint = setRandomStartPoint();
  setStartForDraw(startpoint,GRID_SIZE_X,GRID_SIZE_Y,PIXELS_X,PIXELS_Y);
  drawWholeGrids(calculation_grid,0,undefined);
  return startpoint;
}
export function changeVariables(gridsize_x,gridsize_y,pixels_x,pixels_y,slowedDown,timerLowerLimit = 15){
    GRID_SIZE_X = gridsize_x;
    GRID_SIZE_Y = gridsize_y;
    PIXELS_X = pixels_x;
    PIXELS_Y = pixels_y;
    ISSLOW = slowedDown;
    TIMERLOWERLIMIT =  timerLowerLimit;

}