var area_R= function(){
  var length= document.getElementById("length").value;
  var width= document.getElementById("width").value;
  var output=document.getElementById("display");
  if(isNaN(length) || isNaN(width)){
    output.textContent= "Please enter a valid number for calculating area";
  }
  else {
    var getarea= calculation(length , width);

    output.textContent= "Area = "+ getarea;
  }
};

function calculation(a, b){
var area1= a * b;
  return area1;
}
