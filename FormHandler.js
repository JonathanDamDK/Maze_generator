import {changeVariables, startDepthFirst} from './mainHandler.js'

let gridsize_x = 1;
let gridsize_y = 1;
const init = function(){
  document.getElementById('send_button').addEventListener('click',storeData);
}
const reSizeElements = function(){
  var wholeGridElement = document.getElementById('maze');
  var gridXstring ="grid-template-columns: repeat("+gridsize_x+" 1fr)"
  var gridYstring ="grid-template-rows: repeat("+gridsize_y+" 1fr)"
  wholeGridElement.style = "width:vw; height: 70vh;max-height:650px;"+gridXstring+gridYstring
}
let pixelSizeCell = 100;
let SHOWSTEPSBOOL = false;
let TIMEDELAY =35;
const storeData= function(){
   var showStepsValue = document.getElementById('showSteps').value
   if(showStepsValue == "Yes"){SHOWSTEPSBOOL = true}else{SHOWSTEPSBOOL = false}
   var pixelsPerCell = document.getElementById('pixelsPerCell').value
   pixelSizeCell = pixelsPerCell
   var timeDelay=document.getElementById('Time').value
   TIMEDELAY = timeDelay;
   var wholeGridElement = document.getElementById('maze');
   wholeGridElement.style = "width:vw; height: 70vh;max-height:650px;"
   var lPixelsX = wholeGridElement.clientWidth;
   var lPixelsY = wholeGridElement.clientHeight;
   var lgrid_size_x =Math.round(lPixelsX/pixelSizeCell)
   var lgrid_size_y = Math.round(lPixelsY/pixelSizeCell)
   gridsize_x = lgrid_size_x
   gridsize_y = lgrid_size_y
    document.getElementById('send_button').disabled = true;
   changeVariables(lgrid_size_x,lgrid_size_y,lPixelsX,lPixelsY,SHOWSTEPSBOOL,TIMEDELAY)
   startDepthFirst()

}
document.addEventListener('DOMContentLoaded',init);
document.addEventListener('resize',reSizeElements)
