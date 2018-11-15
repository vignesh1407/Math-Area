var area_T= function(){
  var base= document.getElementById("base").value;
  var height= document.getElementById("height").value;
  var output=document.getElementById("display");
  if(isNaN(base) || isNaN(height)){
    output.textContent= "Please enter a valid number for calculating area";
  }
  else {
    var getarea= calculation(base, height);

    output.textContent= "Area = "+ getarea;
  }
};

function calculation(a, b){
var area1= 0.5 * a * b;
  return area1;
}
