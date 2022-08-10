let factors11 = new Array(1, 0.1, 0.01, 0.001);
let factors22 = new Array(10, 1, 0.1, 0.01);
let factors33 = new Array(100, 10, 1, 0.1);
let factors44 = new Array(1000, 100, 10, 1);
//let factors5 = new Array(1000000, 100000, 10000, 1000, 1);
let factors2 = new Array(factors11,factors22,factors33,factors44);

function convertUnit2()
{
  // Grab the correct conversion factor from our arrays
  fromIndex2 = document.lengthCon2.fromUnit2.selectedIndex;
  toIndex2 = document.lengthCon2.toUnit2.selectedIndex;
  factor2 = factors2[fromIndex2][toIndex2];

  // Check the input box to make sure we have a valid number
  if(isNaN(document.lengthCon2.fromValue2.value)){
    document.getElementById("toValue2").innerHTML = "Konvertuoti galima tik skaičius.";
  }

  // Output the converted number...last number on last line
  else {
    document.getElementById("toValue2").innerHTML =Math.round(document.lengthCon2.fromValue2.value*factor2*1000000000)/1000000000;
  }
  if (toIndex==0){
      document.getElementById("toUnit2").innerHTML = "mm2.";
  }
  if (toIndex==1){
    document.getElementById("toUnit2").innerHTML = "cm2.";
  }
  if (toIndex==2){
  document.getElementById("toUnit2").innerHTML = "dm2.";
  }
  if  (toIndex==3){
  document.getElementById("toUnit2").innerHTML = "m2.";
  }
}
