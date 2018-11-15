var area_S= function(){
  var side= document.getElementById("side").value;
  var output=document.getElementById("display");
  if(isNaN(side)){
    output.textContent= "Please enter a valid number for calculating area";
  }
  else {
    var getarea= calculation(side);

    output.textContent= "Area = "+ getarea;
  }
};

function calculation(side){
var area1= side * side;
  return area1;
}
