export function initializeMaze(gridSize_x, gridSize_y){
  var Elements = []
  for(var x = 0 ; x <= gridSize_x -1 ; x++){
      for(var y = 0 ; y <= gridSize_y - 1;y++){
          Elements.push({x: x, y: y, wallLeft : true, wallRight : true, wallUp : true,wallDown : true, start: false, end: false})

        }
      }
      console.log(Elements);
        return Elements;
        
    }


export function getIndexNumberByXY(x,y,gridSize_y){
      var indexnumber = (x*gridSize_y)+y;
      return indexnumber

}
export function getXYByIndexNumber(indexNumber,gridSize_y){
        var y= indexNumber % gridSize_y
        var x= (indexNumber-y)/gridSize_y
        return {x,y}
}
